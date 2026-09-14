param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]]$Urls,  # opcional: baixar.bat https://link1 https://link2  (senao usa a lista abaixo)
  [switch]$Simular  # so testa (nao baixa nada): baixar.bat -Simular
)

# ================= CONFIG =================
$replace   = $false
$video     = $true      # $false = baixa so o audio em mp3
$maxHeight = 1080       # so vale quando video = true: 1080, 720, 480...
$musicPath = 'musicas'
$videoPath = 'videos'

$videoURLs = @(
  # 'https://www.youtube.com/watch?v=...'
  # 'https://ok.ru/video/...'
)
# ==========================================

if ($Urls) { $videoURLs = $Urls }

$ErrorActionPreference = 'Stop'
$here        = $PSScriptRoot
$ytdlp       = Join-Path $here 'yt-dlp.exe'
$cookies     = Join-Path $here 'cookies.txt'
$ffmpeg      = Join-Path $here 'ffmpeg.exe'
$destDir     = Join-Path $here ($(if ($video) { $videoPath } else { $musicPath }))
$hasFfmpeg   = (Test-Path $ffmpeg) -or [bool](Get-Command ffmpeg -ErrorAction SilentlyContinue)

if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force $destDir | Out-Null }

$commonArgs = @('--windows-filenames', '--newline', '--retries', '10', '--socket-timeout', '60')
$commonArgs += $(if ($replace) { '--force-overwrites' } else { '--no-overwrites' })
if (Test-Path $cookies) { $commonArgs += @('--cookies', $cookies) }
if (Test-Path $ffmpeg)  { $commonArgs += @('--ffmpeg-location', $ffmpeg) }
if ($Simular)           { $commonArgs += '--simulate' }

if ($video) {
  if ($hasFfmpeg) {
    $formatArgs = @('-f', "bv*[height<=$maxHeight]+ba/b[height<=$maxHeight]", '--merge-output-format', 'mp4')
  } else {
    Write-Warning 'ffmpeg nao encontrado: so da para baixar videos que ja vem com video+audio juntos. O YouTube hoje quase nunca oferece isso, entao coloque ffmpeg.exe nesta pasta.'
    $formatArgs = @('-f', "b[height<=$maxHeight]/b")
  }
} else {
  if ($hasFfmpeg) {
    $formatArgs = @('-x', '--audio-format', 'mp3', '--audio-quality', '0')
  } else {
    Write-Warning 'ffmpeg nao encontrado: baixando o audio no formato original (m4a/webm), sem converter para mp3.'
    $formatArgs = @('-f', 'ba/b')
  }
}

# ---------- plano B para ok.ru (quando o extrator do yt-dlp quebra) ----------
$okQualities = [ordered]@{ mobile = 144; lowest = 240; low = 360; sd = 480; hd = 720; full = 1080; quad = 1440; ultra = 2160 }

function Get-OkRuVideo([string]$url) {
  $id = [regex]::Match($url, 'ok\.ru/(?:video|videoembed|live)/(\d+)').Groups[1].Value
  if (-not $id) { throw "Nao consegui achar o id do video em $url" }
  $pageUrl = "https://ok.ru/video/$id"

  $headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36' }
  $page = Invoke-WebRequest $pageUrl -UseBasicParsing -Headers $headers -TimeoutSec 60
  $m = [regex]::Match($page.Content, 'data-options="([^"]+)"')
  if (-not $m.Success) { throw 'Nao achei os dados do player na pagina (video privado, removido ou precisa de login?)' }

  $options   = [System.Net.WebUtility]::HtmlDecode($m.Groups[1].Value) | ConvertFrom-Json
  $flashvars = $options.flashvars
  $metadata  = $flashvars.metadata
  if (-not $metadata -and $flashvars.metadataUrl) {
    $metaUrl  = [System.Uri]::UnescapeDataString($flashvars.metadataUrl)
    $metadata = Invoke-WebRequest $metaUrl -Method Post -UseBasicParsing -Headers $headers -Body @{ 'st.location' = 'AutoplayLayerMovieRBlock/anonymous' } -TimeoutSec 60 |
      Select-Object -ExpandProperty Content
  }
  if ($metadata -is [string]) { $metadata = $metadata | ConvertFrom-Json }
  if (-not $metadata.videos) { throw 'A pagina nao trouxe links de video (pode ser live, video pago ou bloqueado).' }

  $best = $metadata.videos |
    Where-Object { $okQualities.Contains($_.name) -and $okQualities[$_.name] -le $maxHeight } |
    Sort-Object { $okQualities[$_.name] } |
    Select-Object -Last 1
  if (-not $best) { $best = $metadata.videos | Select-Object -First 1 }

  [pscustomobject]@{
    Title   = $metadata.movie.title
    Quality = $best.name
    Height  = $okQualities[$best.name]
    Url     = $best.url
  }
}

function Invoke-OkRuFallback([string]$url) {
  Write-Host "Usando plano B do ok.ru para $url" -ForegroundColor Yellow
  $info = Get-OkRuVideo $url
  $safeTitle = ($info.Title -replace '[\\/:*?"<>|]', '_').Trim()
  if (-not $safeTitle) { $safeTitle = 'okru_video' }
  Write-Host "Titulo: $($info.Title) | qualidade: $($info.Quality) ($($info.Height)p)"

  $args2 = @($info.Url, '--add-header', 'Referer:https://ok.ru/') + $commonArgs
  if ($video) {
    $args2 += @('-o', (Join-Path $destDir "$safeTitle.mp4"))
  } else {
    if ($hasFfmpeg) { $args2 += @('-x', '--audio-format', 'mp3', '--audio-quality', '0') }
    $args2 += @('-o', (Join-Path $destDir "$safeTitle.%(ext)s"))
  }
  & $ytdlp @args2 | Out-Host
  return $LASTEXITCODE
}

# ---------- loop principal ----------
foreach ($videoURL in $videoURLs) {
  Write-Host "`n=== $videoURL ===" -ForegroundColor Cyan
  $outArgs = @('-o', (Join-Path $destDir '%(title)s.%(ext)s'))
  & $ytdlp $videoURL @commonArgs @formatArgs @outArgs
  $code = $LASTEXITCODE

  if ($code -ne 0 -and $videoURL -match 'ok\.ru/') {
    try { $code = Invoke-OkRuFallback $videoURL }
    catch { Write-Host "Plano B falhou: $($_.Exception.Message)" -ForegroundColor Red; $code = 1 }
  }

  if ($code -eq 0) { Write-Host "Download de $videoURL finalizado!" -ForegroundColor Green }
  else {
    Write-Host "Erro ao baixar $videoURL. Codigo: $code" -ForegroundColor Red
    if ($video -and -not $hasFfmpeg) { Write-Host 'Dica: provavelmente falta o ffmpeg.exe nesta pasta.' -ForegroundColor Yellow }
  }
}
