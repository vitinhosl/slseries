const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const replace = false;
const video = true
const musicPath = 'musicas';
const videoPath = 'videos'
const maxHeight = 1080; // so vale quando video = true: 1080, 720, 480...

const ytdlpPath = path.join(__dirname, 'yt-dlp.exe');
const cookiesPath = path.join(__dirname, 'cookies.txt');
const destDir = path.join(__dirname, video ? videoPath : musicPath);

const videoURLs = [
  'https://www.youtube.com/watch?v=dfh03TW1RLA',

];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const formatArgs = video
  ? ['-f', `bv*[height<=${maxHeight}]+ba/b[height<=${maxHeight}]`, '--merge-output-format', 'mp4']
  : ['-x', '--audio-format', 'mp3', '--audio-quality', '0'];

function download(videoURL) {
  return new Promise((resolve) => {
    const downloadProcess = spawn(ytdlpPath, [
      videoURL,
      '--cookies', cookiesPath,
      ...formatArgs,
      replace ? '--force-overwrites' : '--no-overwrites',
      '--windows-filenames',
      '-o', path.join(destDir, '%(title)s.%(ext)s')
    ]);

    downloadProcess.stdout.on('data', (data) => process.stdout.write(data));
    downloadProcess.stderr.on('data', (data) => process.stderr.write(data));

    downloadProcess.on('close', (code) => {
      if (code === 0) {
        console.log(`Download de ${videoURL} finalizado!`);
      } else {
        console.error(`Erro no yt-dlp para ${videoURL}. Codigo: ${code}`);
      }
      resolve();
    });
  });
}

(async () => {
  for (const videoURL of videoURLs) {
    await download(videoURL);
  }
})();
