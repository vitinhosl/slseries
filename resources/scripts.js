import { seriesAll } from './episodes/index.js';
const seriesData = seriesAll;

const seriesData2 = [
    {
      group_name: "Filmes",
      visible: true,
      group: [
        //HARRY POTTER
        {
          name: "Tropa de Elite",
          enabled: true,
          visible: true,
          thumb_buttons: {
              url: [
                "https://i.imgur.com/l8BHSFw.jpeg",
              ],
          },

          carrousel: {
              enabled: true,
              homepage: true,
              title: "NOME TEST",
              logo: { 
                enabled: true, 
                url: "https://i.imgur.com/B6tMcLM.png",
                minimalist: true,
              },
              thumb: [
                  "https://pp-vod-img-aws.akamaized.net/0068571/playplus_thumb_1600.jpg",
                  "https://i.imgur.com/H7LkieU.png",
              ],
              text: "Destaque",
              description: `
                Após a morte de Moisés, Josué é o novo líder dos hebreus e terá que cumprir uma difícil missão ordenada por Deus: Comandar as 12 tribos de Israel na conquista de Canaã, a Terra Prometida. Continuação da saga Os Dez Mandamentos.
              `
          },

          season: [
            {
              name: "Temporada 01",
              thumb_season: "https://i.imgur.com/dRR1C5K.jpeg",
              episodes: [
                { title: "Episódio 001", subtitle: "", duration: "1:09:48", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 002", subtitle: "", duration: "49:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "55:05", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },

              ]
            }
          ],
        },

        //TEST 2
        {
          name: "Animais Fantasticos",
          enabled: false,
          visible: true,
          thumb_buttons: {
            url: [
              "https://i.imgur.com/69wXwwB.png",
            ],
          },
          carrousel: {
              enabled: true,
              homepage: false,
              title: "NOME TEST 2",
              logo: {
                enabled: false,
                url: "https://i.imgur.com/jpGZXos.png", //https://i.imgur.com/nQfnOXD.png
                minimalist: false,
              },
              thumb: [
                "https://pp-vod-img-aws.akamaized.net/0090405/playplus_thumb_1600.jpg",
                "https://i.imgur.com/v0uF3s6.png",
              ],
              text: "",
              description: `
                Grande sucesso da televisão brasileira, este épico bíblico narra a saga de Moisés, o hebreu que escapou da morte ainda bebê, virou príncipe do Egito e acabou se transformando no líder escolhido por Deus para libertar seu povo da escravidão.
              `
          },
          season: [
            {
              name: "Temporada 01",
              thumb_season: "https://i.imgur.com/dRR1C5K.jpeg",
              episodes: [
                { title: "Episódio 001", subtitle: "", duration: "10:48", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 002", subtitle: "", duration: "20:49", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 003", subtitle: "", duration: "30:50", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
                { title: "Episódio 004", subtitle: "", duration: "40:51", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
              ]
            }
          ],
        },
      ],
    }
];

//=======================================================================
//CONFIGURAÇÕES
//=======================================================================
let iconsAnimated           = false; //ATIVA AS ANIMAÇÕES DOS ICONES
let randomImagesCards       = false; //AS IMAGENS ALEATÓRIAS DOS BOTÕES
let randomImagesCarrousel   = false; //AS IMAGENS ALEATÓRIAS DO CARROUSEL
let speedCarrouselBar       = 5;     //VELOCIDADE DAS ANIMAÇÕES DO CARROUSEL

localStorage.clear();

//=======================================================================
//ICONES
//=======================================================================
const homeIconBase64        = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVR4nO2c24tNcRiGn3Em5RQKERnjhguSJCkkpORGrqQ0pST/gn+BK7lxIYm0c+VKkyTJhZRERIxyyjAzTuP4atda0ST2zF57/771re+pp6ZpLt733dP01awWBEEQBEEQBEEQlIMuoAYMZta/XpY6VFXYDLwDNMz69zalDuedfcCXv4yf+w3oTh3SK0eAn/8YP7f+M0eBjtSBvTAOONHA8MM9BYxPHb7sTAUujWL83MvAtNQlyso84FYT4+feARamLlM2VgC9BYyf+xxYlbpUWdgC9Bc4fu57YEfqctbZD3xtwfh/nqkHU5e0SEd2OqpNHosz9TcTgNNtHD/3PDCJijMd6Ekwfm5PlqGSzAduJxw/9y6wiIqxEnhmYPzcF8BqKsJWYMDA6BrmB2AnzjmQnYIy6nfgEA5p95mpAs7UMThhInDGwKgaoReAyZScGcAVA2NqlF4HZlNSFgP3DIyoJn0IdFIy1gAvDYyngnwDrKck7AI+GhhNBfsZ2INxuo2fmSrgTD2MQcp2ZsrTmVo/M88aGEVttmbhTJ0JXDUwhhJ5A5iTavwlwH0DIyixj7JHJdvKWuCVgfIyYh+woV3j7wY+GSgtYw4Be9vxeOAPA2Vl1PyxyMIZCxw3UFAl8WT2SGUh1P9xfc5AKZXMi8CUZsefBVwzUEYl9SYwd7TjLwUeGCihkvsYWD7S8dcBrw2ElxPfAhsbHX97dlKlDi1nDmXb/penBsLKqU8a+QAsPa8jZ/Y2+icoPgRaMv42WoAqbnJUcZOjipscVdzkqOImRxU3Oaq4yVHFTY71gjKez31BGc/nvqCM53NfUMbzuS8o4/ncF5TxfO4Lyng+9wVlPJ/7gjKez31BGc/nvqCM53NfUMbzuS8o4/ncF5TxfO4Lyng+9wVlPJ/7gjKez31BGc/nvqCM53NfUMbzuS8o4/ncF5TxfO4Lyng+9wVlPF/TDLawXH8F8jVNrcWvjvSer2m6sreFFF2ur6C3FVrPVwgLsvfxF/FO6IHsN6uzQvmCIAiCIAiCIAiCIAgC/PMLPuW3uHQ1X/MAAAAASUVORK5CYII=';
const historyIconBase64     = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnUlEQVR4nO2deahXRRTHP9ZTM8wtskxfGWUiIi1ELyhMU8wsS7CNCMulghYriRZazKioiBajMlAraM80so2iiKgI0sqsbCE1X4tmpj5b1efEwHnweOhvzv3duXfmXu8H5r/3fufMfO/MnZkzcy5UVFRUVFRUVFRUVFTERW9gDHAZ8CDwOrAC+AH4HdgIGGAT0Ax8DbwNzAGuBU4D+oauRJHoCowD7gWWANulgdOWlcB8YCKwT+hKxshxwCPAH54avFb5F1gkvaOB3ZgG4EIZNkyg8jNwHdCDiDlFxldbJnj4vS7ANBnHTSTFvktmAd2JkOZ2jm4DzknxWyOBbyNocFOjR1wA7EFEdHTSvhjPr2M28xiwI4JGNoryITCISNiZg0l6wmjgtwga1SQsW4CLiQBTpwidgJs8TCW3yPz/NmAqMAo4THpV+9IfOBGYAtwJvACs8SDEk0A3AmLqEMHOtV9NUekVwK3ACUDnlP4fAlwKvJPiYVgqAgfBJBTBPo0f1zk/f1qeYtt7sqC/zHZ+qcO/VcDhBMAkEGF/4POEFdsmizD7v3mxFzC9DiHWAUeQM0ka8seEFVoMDCEcdt5/D7A1gc9r8+4JJqOFz1nEwzDgiwT+2wdtQF7OZTHHHkicG4EPJajHkrxmRz4bf3YBNsCmAv8p6/NUHg75anw7+/BFI7AAaJGyEBjs8ffHAn8p65X5Yi1tw9vth6s9N/6GndjZ4HlcHq4UwS4UDyViAban3MDryIIatuzq1/dOsGaG9H6Gaxcvw0/aXdT2tNSws5ls3gmaOk4i8neALxGMo2TBowq7v2YV2PElQL1b2TEIYKeoyxS27f5V1AL46AkmgACWoxTvA7vA7Bm7AGlFMIEEQE5ruOzf6NtoS4YiTCiYAD1kL6iWfRvC3dOn0UUZCWDE2SIJYLlK4cN4nwYHZ3heZ00BBdhb0Qte9m20URY5mz03/tgCCoCER2v58E+sR1x8YCIQoFER3jyTkmIiEACJMdfy43FKiolEgMsdfnxPSTGRCDBQ4Uspj8abSARAce7oVEqIiUiA5xy+2JMXpcNEJMAshy/3UUJMRAJMcvhiQ6Wlw0QkwPEOXz6jhJiIBGh0+PITu6EATTn60tfhi90z2u0E2CSX/vKgl8OX9T4NzZa4p40PvAeMIAwtShHy6AndFBEyL0Y+3cmPtwKnkz8LFQLkJYKrB3g5pXFNDQNrsjwPUyM+sTESEQYr7hSk5k2HEXuyOG+apHFDizDcYfsjH0bechg5lzA0RSDC2Q67L+VxKGkm4Th6F+dE85od3e6waScuqZnuMPIiYWlK2BN8Dpmu4dnLoeQxintTeb+I04jwAf5Y77Bltyq8rPZcN9yHEp4mpQitngLmQx12tvq8QeO6PzWDOGhSitDPg61bFHeLvfGA4r4UBRGh2ZMd12Fde9/MG+MVT5XPK0JZimBTGaRliKI9TsLzxeZNBYv+DJMXbmu7J3+yp9+eo9gF9Xo+1DJPcVfKpimIje7AAR5/bz/gb0db2Jv/3hmp6HY2O0rZmaVoB5vvwjs2i9R3it2/PHM+5E1/6emuMGRm66KLFOrPpbw8o6j/eVk60FWRYaRVdgnLxgjFgnR1HpkAZiiegtVZ3JUKSB9l9q0r8nCmi+JdYOTUWOg9Ih/YOryiqO9XHrJ7eV2YlWVWdIOyrnaWmCuvKZzaETBg4+uWvCbV5rMEoJ9iO7ZtV7CIt0UmKpP82ZScB4ZyckKCK6lF6gmTlUk67Izv5NDOPqwUwXblmyN/MXdSrnTbyh1EQGdF4L59eT7SKWofCa9q6/FuTNm/7A3y5QmT3o0iHkZ3SFLuKsti3Hg8WA4imQRD0lxP0al6GSC3GXckzOob7d2vg+r4LsAWCe/l+UT1lPFbmxeurazKM11lvQyo8xsBf0oYL8vI2pGSRt+1o7mrGG/I3pqI3glfzKZDsYeBr5eTB2lmTfZ/j5Ee9kkKfxYXMfVAgyKYbxRlvSS/mClbvcdKRvTeMgPrKmPyIIkF24xcd0mjuZJqaN5T92cRXsyTcXVmKzeBy1r50lIp6JvgXL+JoNj1wL6UkDOAbyJoYLOLslx6bKnpLIGLdRE0ePvbjFOKPtbXc9ZoGvBlwIZfKj4E/UZMaDrJVsC8nD5laA+YPZHzddbC0EUyjMyWT6G0nWpLW+zh4rslsB7NBloR6CX77VfKKvkNGbJWSm/ZKh//WScJkpbIpQn7t5fIV5jsb1RUVFRUVFRUVFRUVBAL/wObPLflU9ygPQAAAABJRU5ErkJggg==';
const favoritesIconBase64   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2azUtUURjGf6MhCgXRBykRtAoCm6Ai/4TSRRQVQQQOBQYmBNWyRdG+CLTa+bFzF7SoTR9QCxdFVkhQWUJBqwSzjNSaOPBeuEQz3jn3zj3vnM4PntXF932fBzz3nHMHAoFAIBAIBPJlIzAGfBGNAhv4T2gBXgHlv/RSnnlP/z/MRzLPvKYAvK4SwBugCY/prmI+0n485l6CAO7iKduAXwkC+A1sx0NuJDAfaQjPWAvM1xDAd2AdHnGhBvORzuMJzcC0RQAz8rcNzyEL85EO4gGPUgTwkAakCegAdgG9KcxH6pVaHRp2ieuBTtmtlYCLwCBwG5gAPgFLGZiupCXpMSE9B2WGkszUKTNmzgnLhcyV3gHHszJ/THZn5QaTmfloFgG8UGDGVpNZBLCgwIitzI4yNZMKjNjqeRYBHGngNeAwGdEPLCswlVTL9bhe2wd8VWBuJX0DDlAnisBHBSYr6TOwhzqzWenCOAVsJSfWyN1dWYkeyKVLrrTI1x3X5seBVhze819y+Jq8LjM4pwQs5mjcnApP48G9X9lSppc6ruUYwFUU8iTHAB6jjGbZgeV5yluFIoo5mo+0A0WcchDASRRxy0EAN1HEMwcBPEUJrcBPBwEsutwCx+lyYD7SXhRwxnL4OWBANGdZw/R2zqjF4HeALbEa7ZYnyxEUMFXDwB+Aniq1zLP3NdQzvZ2zkPD0Zo6uqxPUa5MjdpKF1ew+nTOd4HW12/JHVfdXqP0WBZyrMNws0Jfyk3ZBasxW6HEWBRSAK8CP2PvZLE6bMuxhag3HPr2bf7vLWm6D4helxTr/usvU3im9AoFAIBAIBAKk4A/urZv0O3FdhQAAAABJRU5ErkJggg==';
const favoritesS2IconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO2cy4vOURjHPy65bZQ7uS9YUCZJGAkRWQlJ0ZAQJUSy4A+QhYjFoKhhMQuS3URMuSyQkMiGGsmlKbzjOmbMo6Mjk1sz7/zO7zznfZ9PfetdvJfne573nPM7VzAMwzAMwzAMwzAMwzAMwzAMwzAMw8iDMcA6oBqoB54Bb4A24APwErgH1AL7gEqgZ4A43HfO9r9R63/zpY+hzcfUAFzxsa4FRlMiDAZ2edNShN4BJ4GZGcQyCzgFFIqM5S6wExhEggwDDgEfizQvf9EtYGERsSzyn80qDleTDgJDSYAewDb/z5ZAqutgE+KayIsB43gLbAW6o5QRvt2VHFQA1vwnlqouNE2d1SXfIqhiKvAqpwKQdtr/2z/UvT4QIY4XQAVKmAs0RSgE8arxiXA6EzEOVyPnxE7GtMjJEK9jwHEFcRR8axGFkcBrBYUgyuTGNMPzToYbXF1TYF6Uqt4/cebGbgWmRbl25JWMUcB7BYZFuZr8UCA41QrMSiI6EjoZLuNfFBiVRPQ59KBxrwKTkpj2hEzIYwUGJTE9DJWMiQrMSaIaHyIhWxQYk0S1MURCTiowJonqRIiE3FBgTBLV1RAJea7AmCQqt38gczTM6kqiciuomdOqwJgkqpYQCbEaQpfWSTLH+hB09SGPFBiTRPUgRELqFRiTRHU5REKOKjAmiepwiITY1AlFa1OIhFQqMCaJKou9yX/Q25ZuKUbvfdkF4YICg5KYzhGQzQoMSmLaEDIhbn34qwKTkoiagSEE5qwCo5KI3Amt4CxUYFQS0bw8EtLNL9zHNisJTJe4ssqFFQoMi3ItJUdc5m8qMC1KdTvP2vGTBQqMi0K1+UNMUTitoABEmdzR62gMtEM7tFejP5sflZUKCkKUaDlKsCMK/FgvUoObzbyjoFAkku4DfVHGuDLtT14BY1HKtIzvNxHl+gTMQDnLy2RTXSuwjERwd0x9U1BoEnDwF+SIQUjW+8BLMRlbSJTNJVZTWlOsGb+zqkRWGZv9ILgkWJL4Zu0CsJgSYzLwVEHhSif1xMdekgzM8dY5yUDX89ikEJueiewTPgH0oozY4U8WiTK1+Is8y5Lpvo0WJWrwe5jLmv5+/5JE1nlgQOzC0ERVpIlJd2PP9hibElKgIuejc25/2ZTYprXTx9/H+y3wfJS7ybRfbLMpURmow3cd9/zY5lLu8GsyTEaN/04jg0Wvxi5enL86tolSY0iRJ7jq8rodtFzZ2MGzjk2hTy8Zv5jgt978Kxnu0XlSu/cbOT0eH/5Hx22Ps5FH+J+93GtDySTl9NhBGIZhGIZhGIZhGIZhGITkO/octMIinUkwAAAAAElFTkSuQmCC';
const animesIconBase64      = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVR4nO3Vv0kEQRTA4U/BxPAywfwKsAEbMDS1BVs4LMGLTK1BbMC7XHMDU8HE6AKRkQ0WLGD+7AzvBy/deR8MO0RRFEWNSoOM1gsEREAserReICACYtEj9wef8DUC5BgrbPHTM+R/azyPAJm7wvsIkKkT3OK7d8jcGR7w2ztk7gL7ESBTR3jrHbLCfcYrpjZkemdu8Jn73FQRconXAmemWpBzPBYCpBqQU2xwKIxIpSDT3+gaHxUAqRTkLvP7kFpBWo3WCwREQCx6tF4gIEaFRL22b3BddiUguwaQlxKQKIqiSK7+AIURFUL7hB/5AAAAAElFTkSuQmCC';
const channelsIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKUlEQVR4nO1ZSWsUQRT+BJ0Bo3FFnfGgouAG4sHlbDy5RjBq1PgPkqC44yEeE8EkLr9BvbnicjVq4sZEFFzvRpGAk1zcMvKgWsrnV3b1TE9PDv1BwTD91dfv1fLeq2ogRYoUKVKkqB52AGhB7XHA2FIWNgP4CaAEoBO1w2ljwy8AjVE7rwAwYgSC1oHk0aFsEJuW+XbOAHiuBII2D8kh77DhKYBJPgKnHAI3kDxuOmw54TMKeklJew2gHsmjHsBbYk8xbHVcJJ1+AFijeBOM03Ejb7RtrDM2aLt6XSIzAYx6duitQgAINjZ733lil6ycGUzoECF/NQ7a2A5gzOJIeIwrxJaM9lb1fLZZTtq+dib2mBC7FWcqgM+E11yBE3uJ3icAUxyrwG6PtNh8NcpB0zH7mCOKNFXgSJND8wjJbZozpjd9MyENKqEsgCHCu0qMy5ppHzD7btT8bjPPNK4R3Y8mp9l4SXi7bMI5QjirRDYSzncAC8jsDjpGWVrBcGwsNFol1RoUr4dw5L8/uOexXM4QziUyE/9zwnZGz8xlwutSnN2Ec8cmfCCEVUrkAeHsU5x2DyeC1qr67iecPsVZTTjvbMIwIeiwy5xd7BH5XK1f9RUtzZF32phFOF9sAlufujBjyXKy4rDyxtWEa6OOcOSdNjKE8y0OR+oqcESSrQ3JG5pTjOrIeFhaSwjnfdSl5bPZ+zw2e1vMm/1+1M1+1yP8dhGOhEwbWRNaw5wokGR3hfA6PcLv7agJsSFCQixETIiLHKX6Bo9666+EuIcQXiiRjCkbfEqUjFk6/SYAjJgCr5XMhOC6Z4nyKqxEyXsWjUcdo7wT8ReNhxVvJeGIzXO14EDYtCVYxg+R0M6W/0MmeNARxyXk2diWwMFqCzlYsRwlUdL7qCsjkeRRt4c8u+AY5OkuMXY2lmiyVvHkgiCH+JEjlw/rHRGtO0yITeGbGl0HTTMJj5U3c8I6n3REEbksSxq3HLbIkTsUUiw+cwj8E+qqiJzDhicAJvqKLB+nl9hFAEujimyyPivUwokAx63PCnKnVhYax8mHnpZyvo2kSJEiRYoU8MRvmE9/FfKn/30AAAAASUVORK5CYII';
const moviesIconBase64      = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO2aO04DMRRFT0E2EKUiSUUxBdvIWlgLLQWLAEVKg5BoYBGwCj4Rky6iMBrJQSjCGmd+ecb3SLebzNyjxB7bCgghhBDCGnNgCWwAl1iqziugOET2w0Dxtll7l1qWBsp2ldsY4RR/xqGUMcL7H4q9bui07f+DhANIGAkjYRIQdomnlmMXTFb4DpgCZ8A18PXfhWd79z0HHlIQDtH0QQvgpUcRc8IVI+ACeM1FeMcYuAS2uQjvKPwkl43w7/H9nJNwxUnk+O5N2HU8qcQyAR6H6OGMCFec5iY8zUl4AjwdQzhEX8Kxi5LYXqaFs3ktFbksPMbAVcOtY1LCIz9O3xpOREkJL6xvD11uBwCuYe69dDZHPM5IanG5C4ewKiLhOiQcQMJImCSENwZkuspnjPDKQNGuchO7N10bKNs273+s54PM/Z+6SgPFD03pv9loWSGEEEIwCN9pId6v9CL0IgAAAABJRU5ErkJggg==';
const novelsIconBase64      = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8UlEQVR4nO3aMWoCURSF4b8ICCFVsBDcQbICt5DWfUznItyUtemSLkVKd6CVzRHhFcPtMgm57w7ng1sK54cBixmwehbAAByBC6Dkm2QNfHQwXr8JWXQYoSkhQwej9Rch73MJOc8lRJ3ej2UPlkOC7MFySJA9WA4JsgfLIUH2YDkkyB4shwTZg+WQIHuwHBJkD5ZDguzBckiQPVgOCbIHyyFB9mA5JMgeLIcE2YPlkGD84/tLnzdgSUFqdwAeKEztXiju2kLub3dL+24hG4rbt5BP4JHCnoFTi/kCtsCKol5Hj1gvN9kTsGv/JWU/qjH+2Q0wMsm2YlkwMAAAAABJRU5ErkJggg==';
const minecraftIconBase64   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVR4nO2ZMQ7CMBAEt4KGJ5CaP6DwMXgRKFI+BojkA0tzFSLBPsuxgR1pu9xpx3IRyYAQQtRMA6ADMALgwhkB9AB2KeVvBYrzJXfrEk1XQXlaLh6BEteGExk8Aqws0ZQuTAngRwX2MzNtQBHvfDTeRaknSQkYEoAEIAG+SZtR4LCEQK4TZuJeCVACKCMw92/zibYGgVQogQkkEAglMMFfCnChmSBCF6/s+3XmmWhCFx8BbACcMs9Ew8oSzdcLjBWUpuXhEegrKE7L2SOws8eF0uWvALZw0tjjwlCg+GAn7y4vhBDIzhOzgN/txYqywwAAAABJRU5ErkJggg==';
const seriesIconBase64      = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxElEQVR4nO3ZP2sUQRzG8Q+xiNhIILYRLWMj2tolrZ0aX4EivgC72Nqazhegha2VKZQY25SWkoBWitFGzpA7VhZ+B8uR3Ca53bvZMF+YZu/f893hubuZIZPJZDInZwnr+IoPOsY81vAeAxQxOiOyjBf4UQn/D29xFxckzGU8wudK+HJ8wTMsSpg5rOA1epXwv7CBm6n3ZikC7FbCD6ILa9GNZHszj/t4h8NKgG/Rh2up92Z5ggAz780CnmJnJMBOXC8fb6M3C3iCBykU97S9mcMq3lQ+92ASka0Gi7sbUqXccVzFc+yNzPpwnJnhG9QFELOzEbM1fF0vZnMl7vJRXMRDbI6ItyLSRnFvxBfGz5rwRVsi5Z29g1f4W3nO77h26wziMxHZaqC4RQoixQl7U1fcZETqfun7DQoU0xK5gpfYbyF8MU2Ram86LdI/LyJFFpFFTkUWkUVkkXFkEc2P/nkR+dh1kf34Q7rYRZFBrCLL1eQlDbCNT1MU2YvFWLkoa52mRWZ2tFA0JDLzo4ViApE/sdNyWwJsj+nNccXdjE24cjMuaYojxvfYgLuuQxxE+F7sX62O2SJNmnt4XHO0kMlkzI7/Dl4A1TYi2ZUAAAAASUVORK5CYII=';
const biblicalIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO3UOw7CMBBF0VuSImwBVgQsBYVNImgJGyH9oEgurBQo5IM95l1p2niOIhuUSloFNMAN6ABLNLPaA23C5W0JSJURwuZALhksb0tA7qVAulIgltlMbo3DBUEQBDFByAOy9jmTE+TLBBnb3152EwRBRiUIgiDIpwRBELKFLDmTS724CTIo9eImyKDUi5sgg+KPPIADUOMwixBbHGdh+j9BCZAa571KgdwC5IjzmgBpvV/2KrxYPeYJnDyDdhEm9cxuA5yBa/QAuIQoftQbj1q63jmvEcwAAAAASUVORK5CYII=';
const twitchIconBase64      = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8ElEQVR4nO3RsQ3CMBBG4UdNj4COURiFTcwmrMIMSCQFEkPQc4gBcOzjkjine5JLy/8ng+NWwAOQhZyfHRsYJxaQiwfIGnh5gJwaGCYWkKvm0oRJyaYD8PYAOWu/ccKkZNPTC0QCMl0SEOohpXc1b0hACAgByRQQCQgByRUQCQgByRUQUUDGTDxAkgdIqtnUKiRl9nRLgaTMlh7YLwGSNIjWIGkAsctdLoFooLlRtacfQowFsUR0JYgxILMgrCGzISwhsyIwetgScQM2KLIaYPUTWw0CLwgaAHzP/V9Ebc0PLM0FAi8IvCDwgsALghb7APBVkMnu8/RMAAAAAElFTkSuQmCC';
const youtubeIconBase64     = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVR4nO2ZT0hUQRzHP5qBN0OxY+hJ6xJ0yIvgRQovXrrrkmB4CjoFeSgQ9iwdPQpCGwQdPKl0CILFP0gaIcIi4h6KWBMjdXWZeDAPtljfb7Y3szvCfOB7Wtjf78PO7Jv3GwgEAoFAIGDMdeA2MApMAa+AOeAdsAysAbvAN6Ck8xtQVTmu+qwIfAXywBLwBngNTAMZ4AFwC0v0ADPAZ6D8T1ONyhHwAXgCtP+PxGPgV5OaV5dkG7hTj0S0fCoeNK5qZA/oNpG4Bux70LBKSNZE5K4HjSohBRORRx40qgzSIYk886BJZZD7ksisB00qg4xLIu9TFhgGtnzY8J9SFohoAyaB7w5FFiSRTQsiMZ16qZ47EFmSRHYtisT0AYuWRTYlkaIDkZhhfcywIVKURH46FIlP0U+Bw5R1zoCWpEJpT7mmxPvnwtVDsdwgkS4LIjeSCqT9yU2XVtolXAFakwodON7sX1J+v9KJ3jIT2XEg0u/g77cgiWxckQfiuiTy0YJIvA9KDgSUzook8jZlgRE9HVGOMy+JZBvQhI28lEQmPGhSGWRMEhnyoEllkEFJpNvjUZDSqZiOhJY9aFYlJOrPiHs15ra+5BQYoA4e6oG08ig/9BS0bqJ1+BxYBU6a1PyJrv8CuIkFopNmrx73Z/T4P7oGyOn357x+EBarrg6O67hWyNW4VuiVTriBQCAQCAT4mz8yJp3ulSURNAAAAABJRU5ErkJggg==';
const homeIconSvg           = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="192" height="192" viewBox="0 0 24 24"><path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path></svg>`;
const kickIconSvg           = `<svg role="img" viewBox="-5 0 30 30" xmlns="http://www.w3.org/2000/svg" id="Kick--Streamline-Simple-Icons" class="custom-icon"><path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" fill="#000000" stroke-width="1"></path></svg>`;
const homeIconImg           = 'https://i.imgur.com/xS20AuN.png';
const historyIconImg        = 'https://i.imgur.com/nxaxTS3.png';
const favoritesIconImg      = 'https://i.imgur.com/LAcxXkU.png'; //'https://i.imgur.com/UmEAJ1G.png';

function getIcon(groupName) {
  const name = groupName.toLowerCase();
  
  if (name.includes('animes'))    return { type: 'base64', value: animesIconBase64,    alt: 'animes' };
  if (name.includes('canais'))    return { type: 'base64', value: channelsIconBase64,  alt: 'canais' };
  if (name.includes('filmes'))    return { type: 'base64', value: moviesIconBase64,    alt: 'filmes' };
  if (name.includes('novelas'))   return { type: 'base64', value: novelsIconBase64,    alt: 'novelas' };
  if (name.includes('minecraft')) return { type: 'base64', value: minecraftIconBase64, alt: 'minecraft' };
  if (name.includes('bíblicas'))  return { type: 'base64', value: biblicalIconBase64,  alt: 'séries bíblicas' };
  if (name.includes('séries'))    return { type: 'base64', value: seriesIconBase64,    alt: 'séries' };
  if (name.includes('streams'))   return { type: 'base64', value: twitchIconBase64,    alt: 'streams' };

  return { type: 'fa', value: 'fas fa-layer-group' }; 
}

function setupStreamIcons(link) {
  const text = "Streams";
  const icons = [
    { type: 'base64', value: twitchIconBase64,  alt: 'twitch'  },
    { type: 'svg',    value: kickIconSvg,       alt: 'kick'    },
    { type: 'base64', value: youtubeIconBase64, alt: 'youtube' },
  ];
  let currentIndex = 0;

  function updateIcon() {
    const iconData = icons[currentIndex];
    let newIconHTML = '';
    if (iconData.type === 'svg') newIconHTML = iconData.value;
    else if (iconData.type === 'base64') newIconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt}">`;
    link.innerHTML = `${newIconHTML} ${text}`;
    currentIndex = (currentIndex + 1) % icons.length;
  }

  updateIcon();
  setInterval(updateIcon, 3000);
}

//=======================================================================
//FAVORITOS
//=======================================================================
function getFavorites() {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(serieName) {
  const favorites = getFavorites();
  return favorites.some(fav => fav.name === serieName);
}

function toggleFavorite(serie) {
  const favorites = getFavorites();
  const index = favorites.findIndex(fav => fav.name === serie.name);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(serie);
  }
  saveFavorites(favorites);
  return index === -1;
}

function updateCarouselFavorites() {
  const carouselButtons = document.querySelectorAll('#carousel .favorite-button-s2');
  
  carouselButtons.forEach(button => {
    if (button.getAttribute('data-serie')) {
      const serieData = JSON.parse(button.getAttribute('data-serie'));
      const isNowFavorite = isFavorite(serieData.name);
      
      button.classList.toggle('active', isNowFavorite);
      
      const tooltip = button.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = isNowFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
      }
    }
  });
}

function attachFavoriteListeners(container = document) {
  const existingButtons = container.querySelectorAll('.favorite-button, .favorite-button-s2');
  existingButtons.forEach(btn => {
    btn.removeEventListener('click', btn._favoriteHandler);
  });

  const favoriteButtons = container.querySelectorAll('.favorite-button, .favorite-button-s2');
  
  favoriteButtons.forEach(button => {
    const handler = function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const serieData = JSON.parse(this.getAttribute('data-serie'));
      const nowFavorite = toggleFavorite(serieData);

      updateCarouselFavorites();

      if (this.classList.contains('favorite-button-s2')) {
        this.classList.toggle('active', nowFavorite);
        this.classList.add('heart-pulse');
        this.addEventListener('animationend', () => {
          this.classList.remove('heart-pulse');
        }, { once: true });
      } else {
        this.classList.toggle('favorited', nowFavorite);
        
        const star = this.querySelector('.rating__star');
        if (star) {
          const ring = star.querySelector('.rating__star-ring');
          const stroke = star.querySelector('.rating__star-stroke');
          const fill = star.querySelector('.rating__star-fill');
          const lines = star.querySelectorAll('.rating__star-line');

          [ring, stroke, fill, ...lines].forEach(el => {
            if (el) el.style.animation = 'none';
          });
          this.offsetHeight;

          if (nowFavorite) {
            if (ring) ring.style.animation = 'starRing 1s ease-in-out forwards';
            if (stroke) stroke.style.animation = 'starStroke 1s ease-in-out forwards';
            if (fill) fill.style.animation = 'starFill 1s ease-in-out forwards';
            lines.forEach(line => line.style.animation = 'starLine 1s ease-in-out forwards');
          } else {
            if (ring) ring.style.animation = 'starRing 1s ease-in-out reverse forwards';
            if (stroke) stroke.style.animation = 'starStroke 1s ease-in-out reverse forwards';
            if (fill) fill.style.animation = 'starFill 1s ease-in-out reverse forwards';
            lines.forEach(line => line.style.animation = 'starLine 1s ease-in-out reverse forwards');
          }
        }
      }

      const tooltip = this.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = nowFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
      }

      this.classList.add('pulse');
      setTimeout(() => { this.classList.remove('pulse'); }, 600);

      const currentPath = getCurrentPath();
      if (currentPath === generateSlug('Início') || currentPath === generateSlug('Favoritos')) {
        if (!this._lastClick || Date.now() - this._lastClick > 300) {
          this._lastClick = Date.now();
          loadPageContent(currentPath);
        }
      }
    };

    button._favoriteHandler = handler;
    button.addEventListener('click', handler);
  });
}

//=======================================================================
// FILTRO DE SÉRIES/GRUPOS
//=======================================================================
function getFilteredItems(path) {
  const segments = path.split('/').filter(s => s);

  if (segments.length === 2) {
    const [groupSlug, seriesSlug] = segments;
    const series = findSeriesByGroupAndSlug(groupSlug, seriesSlug);
    if (series) {
      return [{ type: 'series', data: series }];
    }
  }

  if (segments.length === 1) {
    const singlePath = segments[0];

    if (singlePath === generateSlug('Favoritos')) {
      return seriesData.map(groupItem => ({
          ...groupItem,
          group: groupItem.group ? groupItem.group.filter(item => isFavorite(item.name)) : []
      })).filter(groupItem => groupItem.group.length > 0);

    } else if (singlePath === generateSlug('Início')) {
      const allFavorites = [];
      seriesData.forEach(groupItem => {
          if (groupItem.group) {
              const favoritesInGroup = groupItem.group.filter(item => isFavorite(item.name));
              allFavorites.push(...favoritesInGroup);
          }
      });

      const homepageGroups = seriesData
          .filter(groupItem => groupItem.visible && groupItem.group && groupItem.group.length > 0)
          .map(groupItem => ({
              ...groupItem,
              group: [...groupItem.group]
          }));

      if (allFavorites.length > 0) {
          const favoritesGroup = {
              group_name: "Favoritos",
              visible: true,
              group: allFavorites
          };
          return [favoritesGroup, ...homepageGroups];
      }
      return homepageGroups;
    } else {
        const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === singlePath && groupItem.visible);
        return matchingGroup ? [matchingGroup] : [];
    }
  }
  return [];
}

function findSeriesByGroupAndSlug(groupSlug, seriesSlug) {
  const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === groupSlug);
  if (matchingGroup && matchingGroup.group) {
    const series = matchingGroup.group.find(item => generateSlug(item.name) === seriesSlug);
    if (series) {
      return { ...series, group_name: matchingGroup.group_name };
    }
  }
  return null;
}

function attachSeriesNavigationListeners(container = document) {
  const seriesButtons = container.querySelectorAll('#group-series-button[data-series-slug][data-group-slug]');
  
  seriesButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (e.target.closest('.favorite-button') || e.target.closest('.watch-button')) {
        return;
      }
      
      e.preventDefault();
      const groupSlug = this.getAttribute('data-group-slug');
      const seriesSlug = this.getAttribute('data-series-slug');
      window.location.hash = `#${groupSlug}/${seriesSlug}`;
    });
  });
}

function findSeriesByName(seriesName) {
  for (const groupItem of seriesData) {
    if (groupItem.group) {
      const series = groupItem.group.find(item => item.name === seriesName);
      if (series) {
        return { ...series, group_name: groupItem.group_name };
      }
    }
  }
  return null;
}

//=======================================================================
// PAGINA INICIAL
//=======================================================================
function loadPageContent(path) {
  const contentContainer = document.getElementById('page-content');
  let html = '';
  const segments = path.split('/').filter(s => s);
  const isFavoritesPage = segments.length === 1 && segments[0] === generateSlug('Favoritos');
  const isHomePage = segments.length === 1 && segments[0] === generateSlug('Início');
  const filteredItems = getFilteredItems(path);
  const isSeriesPage = filteredItems.length > 0 && filteredItems[0].type === 'series';

  if (isHomePage) {
    const globalContinueHtml = renderGlobalContinueWatching();
    if (globalContinueHtml) {
      html += `
        ${globalContinueHtml}
      `;
    }

    const allFavorites = [];
    seriesData.forEach(groupItem => {
      if (groupItem.group) {
        const favoritesInGroup = groupItem.group.filter(item => isFavorite(item.name));
        allFavorites.push(...favoritesInGroup);
      }
    });

    if (allFavorites.length > 0) {
      const favoritesGroup = {
        group_name: "Favoritos",
        visible: true,
        group: allFavorites
      };
      
      html += renderGroupSection(favoritesGroup, true);
    }

    const homepageGroups = seriesData
      .filter(groupItem => groupItem.visible && groupItem.group && groupItem.group.length > 0)
      .map(groupItem => ({
        ...groupItem,
        group: [...groupItem.group]
      }));

    homepageGroups.forEach(groupItem => {
      if (groupItem.group_name === "Favoritos") return;
      
      html += renderGroupSection(groupItem, true);
    });

  } else if (isFavoritesPage) {
    html += '<h1 class="main-favorites-title">Meus Favoritos</h1>';
    
    if (filteredItems.length > 0) {
      filteredItems.forEach(groupItem => {
        html += renderGroupSection(groupItem, false);
      });
    } else {
      html += '<p>Você ainda não adicionou nenhum item aos favoritos.</p>';
    }

  } else if (isSeriesPage) {
    const series = filteredItems[0].data;
    let activeInThisSeries = [];
    series.season.forEach((season, s) => {
      for (let e = 0; e < season.episodes.length; e++) {
        const w = getWatchedEpisode(series.name, s, e);
        if (w && w.active) {
          activeInThisSeries.push({ seasonIdx: s, epIdx: e });
          break;
        }
      }
    });

    if (activeInThisSeries.length > 0) {
      html += `
        <section id="continue-watching">
          <header class="group-title-header">
            <h2>Continue Assistindo</h2>
          </header>
          <div class="continue-episodes-container">
      `;

      activeInThisSeries.forEach((seasonActive) => {
        const season = series.season[seasonActive.seasonIdx];
        const episode = season.episodes[seasonActive.epIdx];
        const thumb = episode.thumb || season.thumb_season;
        const urls = episode.url || [];
        const seasonNum = seasonActive.seasonIdx + 1;
        const epNum = seasonActive.epIdx + 1;
        const paddedEp = epNum.toString().padStart(3, '0');

        html += `
          <div class="continue-episode-container">
            <div id="continue-episode-button" 
                style="background-image: url('${thumb}');" 
                data-urls='${JSON.stringify(urls)}' 
                data-series-name="${series.name}" 
                data-season-index="${seasonActive.seasonIdx}" 
                data-episode-index="${seasonActive.epIdx}" 
                onclick="playContinueEpisode(this)">
              <span class="icon-btn">
                <span class="trash-lid"></span>
                <span class="trash-handle"></span>
                <span class="trash-bar bar1"></span>
                <span class="trash-bar bar2"></span>
                <span class="trash-bar bar3"></span>
              </span>
              <span class="badge-duration">${episode.duration}</span>
              <p>T${seasonNum} - EP ${paddedEp}</p>
              <div class="remove-button" 
                  data-series-name="${series.name}" 
                  data-season-index="${seasonActive.seasonIdx}" 
                  data-episode-index="${seasonActive.epIdx}">✕</div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </section>
      `;
    }

    html += `
      <section id="series-header">
        <header class="group-title-header">
          <button class="back-button" onclick="history.back()">
            <i class="fas fa-arrow-left"></i> Voltar
          </button>
          <h1 class="series-title">${series.name}</h1>
        </header>
      </section>
    `;

    html += `
      <section id="series-episodes">
        <div class="episodes-container">
    `;

    series.season.forEach((season, seasonIndex) => {
      season.episodes.forEach((episode, episodeIndex) => {
        const firstUrl = episode.url && episode.url.length > 0 ? episode.url[0] : '#';
        const watchedData = getWatchedEpisode(series.name, seasonIndex, episodeIndex);
        const isWatched = watchedData && watchedData.watched;
        const isActive = watchedData && watchedData.active;
        
        let buttonClasses = '';
        if (isActive) buttonClasses += 'active ';
        if (isWatched) buttonClasses += 'watched ';
        buttonClasses = buttonClasses.trim();
        
        html += `
          <div class="episode-container slide-in-right" style="opacity: 1;">
            <div id="episode-button" 
                data-series-name="${series.name}"
                data-url="${firstUrl}" 
                data-urls='${JSON.stringify(episode.url || [])}'
                data-season-index="${seasonIndex}"
                data-episode-index="${episodeIndex}"
                class="${buttonClasses}" 
                onclick="playEpisode(this)"
                style="background-image: url('${episode.thumb || season.thumb_season}');">
              <img class="episode-thumb" 
                  data-src="${episode.thumb}" 
                  data-fallback="${season.thumb_season}" 
                  alt="${episode.title}" 
                  loading="lazy"
                  src="${episode.thumb || season.thumb_season}"
                  style="opacity: 0; transition: opacity 0.3s ease-in;">
              <span class="icon-btn"></span>
              ${isWatched ? '<span class="badge-watched">▶ ASSISTIDO</span>' : ''}
              <span class="badge-duration">${episode.duration}</span>
            </div>
            <p class="episode-title">${episode.title}</p>
            <p class="episode-subtitle">${episode.subtitle || ''}</p>
          </div>
        `;
      });
    });

    html += `
        </div>
      </section>
    `;

  } else {
    if (filteredItems.length > 0) {
      filteredItems.forEach(groupItem => {
        html += renderGroupSection(groupItem, false);
      });
    } else {
      html += '<p>Nenhum item encontrado.</p>';
    }
  }

  contentContainer.innerHTML = html;

  if (isSeriesPage) {
    const removeBtns = contentContainer.querySelectorAll('.remove-button');
    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const seriesName = this.getAttribute('data-series-name');
        const seasonIdx = parseInt(this.getAttribute('data-season-index'));
        const epIdx = parseInt(this.getAttribute('data-episode-index'));
        removeContinueWatching(seriesName, seasonIdx, epIdx);
      });
    });
    loadEpisodeImages();
    updateEpisodeUI();
    updateSeriesContinueWatching();
  }

  if (isHomePage) {
    initializeHomePageFeatures();
  }
  
  attachFavoriteListeners(contentContainer);
  updateCarouselFavorites();
}

function initializeHomePageFeatures() {
  const exploreButtons = document.querySelectorAll('.explore-button');
  exploreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const groupSlug = this.getAttribute('data-group');
      
      if (groupSlug === generateSlug('Favoritos')) {
        const favoritesLink = document.querySelector(`a[data-path="${generateSlug('Favoritos')}"]`);
        if (favoritesLink) {
          favoritesLink.click();
        }
      } else {
        const targetLink = document.querySelector(`a[data-group="${groupSlug}"]`);
        if (targetLink) {
          targetLink.click();
        }
      }
    });
  });

  const groupCardsHeaders = document.querySelectorAll('.group-cards-header.home-layout');
  groupCardsHeaders.forEach(header => {
    const container = header.querySelector('.group-cards-container');
    const prevBtn = header.querySelector('.nav-arrow.prev');
    const nextBtn = header.querySelector('.nav-arrow.next');
    
    if (!container || !prevBtn || !nextBtn) return;

    const cardWidth = 240;
    const scrollAmount = cardWidth * 2;

    const updateArrowVisibility = () => {
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
      
      prevBtn.classList.toggle('hidden', !canScrollLeft);
      nextBtn.classList.toggle('hidden', !canScrollRight);
    };

    nextBtn.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    container.addEventListener('scroll', updateArrowVisibility);
    setTimeout(updateArrowVisibility, 100);
  });
}

function renderGroupSection(groupItem, isHomePage) {
  const groupSlug = generateSlug(groupItem.group_name);
  let html = '';
  
  html += `<section id="group-${groupSlug}-header">`;
  html += `<header class="group-title-header">`;
  
  let displayGroupName = groupItem.group_name;
  let iconHTML = '';
  
  if (groupItem.group_name === 'Favoritos') {
    iconHTML = `<img src="${favoritesIconBase64}" class="custom-icon" alt="Favoritos Icon">`;
  } else {
    const iconData = getIcon(groupItem.group_name);
    if (iconData.type === 'fa') {
      iconHTML = `<i class="${iconData.value}"></i>`;
    } else if (iconData.type === 'base64') {
      iconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt || groupItem.group_name + ' Icon'}">`;
    } else if (iconData.type === 'svg') {
      iconHTML = iconData.value;
    }
  }
  
  const sortedGroup = [...groupItem.group].sort((a, b) => {
    if (a.enabled !== false && b.enabled === false) return -1;
    if (b.enabled !== false && a.enabled === false) return 1;
    return a.name.localeCompare(b.name);
  });

  const visibleItems = sortedGroup.filter(item => item.visible !== false && item.name);
  const count = visibleItems.length;

  let fullDisplayName = displayGroupName;
  if (groupItem.group_name === 'Favoritos') {
    fullDisplayName += ` (${count})`;
  } else {
    fullDisplayName += ` (${count} disponíveis)`;
  }
  
  const favoritesClass = groupItem.group_name === 'Favoritos' ? 'favorites-header' : '';
  html += `<h2 class="${favoritesClass}">${iconHTML} ${fullDisplayName}</h2>`;
  
  if (isHomePage && groupItem.group_name !== 'Favoritos') {
    html += `
    <button class="explore-button" data-group="${groupSlug}">
      <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <span class="text">Explorar</span>
      <span class="circle"></span>
      <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
    </button>
    `;
  }
  html += `</header>`;
      
  const layoutClass = isHomePage ? 'home-layout' : 'category-layout';
  html += `<div class="group-cards-header ${layoutClass}">`;

  if (isHomePage) {
    html += `<button class="nav-arrow prev hidden" aria-label="Cartões anteriores"><i class="fas fa-chevron-left"></i></button>`;
  }

  html += `<div class="group-cards-container ${layoutClass}">`;

  visibleItems.forEach(item => {
    const urls = item.thumb_buttons.url;
    const selectedThumb = randomImagesCards 
      ? urls[Math.floor(Math.random() * urls.length)] 
      : urls[0];
    const isEnabled = item.enabled !== false;
    const watchButtonClass = isEnabled ? 'watch-button' : 'watch-button disabled';
    const watchButtonText = isEnabled ? 'ASSISTIR' : 'INDISPONÍVEL';
    const currentIsFavorite = isFavorite(item.name);
    const containerClass = isEnabled ? '' : 'disabled';
    const seriesSlug = generateSlug(item.name);

    html += `
      <div class="card-container ${containerClass}" data-series-slug="${seriesSlug}">
        <div class="inner-container">
            <div class="border-outer"></div> 
            <div class="main-card" style="background-image: url('${selectedThumb}')"></div>
            <div class="glow-layer-1"></div>
            <div class="glow-layer-2"></div>
        </div>

        <div class="overlay-1"></div>
        <div class="overlay-2"></div>
        <div class="background-glow"></div>

        <div id="group-series-button" data-series-slug="${seriesSlug}" data-group-slug="${groupSlug}">
          <div class="info">
            <h2>${item.name}</h2>
            <p>TEST</p>
            <button class="${watchButtonClass}">${watchButtonText}</button>
          </div>
          <button class="favorite-button ${currentIsFavorite ? 'favorited' : ''}" data-serie='${JSON.stringify(item)}'>
            <svg class="rating__star" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
              <g transform="translate(16,16)">
                <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
              </g>
              <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <g transform="translate(16,16) rotate(180)">
                  <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                  <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                </g>
                <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
                  <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                  <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                  <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                  <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                  <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                </g>
              </g>
            </svg>
            <span class="tooltip-text black tooltip-top">${currentIsFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</span>
          </button>
        </div>
      </div>
    `;
  });
  
  html += `</div>`;

  if (isHomePage) {
    html += `<button class="nav-arrow next" aria-label="Próximos cartões"><i class="fas fa-chevron-right"></i></button>`;
  }
  html += `</div>`;
  html += '</section>';
  
  return html;
}

//=======================================================================
// SISTEMA DE EPISÓDIOS
//=======================================================================
function getWatchedEpisodes() {
  const watched = localStorage.getItem('watchedEpisodes');
  return watched ? JSON.parse(watched) : {};
}

function saveWatchedEpisodes(watched) {
  localStorage.setItem('watchedEpisodes', JSON.stringify(watched));
}

function getWatchedEpisode(seriesName, seasonIndex, episodeIndex) {
  const watched = getWatchedEpisodes();
  const key = `${seriesName}-${seasonIndex}-${episodeIndex}`;
  return watched[key] || null;
}

function markEpisodeAsWatched(seriesName, seasonIndex, episodeIndex) {
  const watched = getWatchedEpisodes();
  const currentKey = `${seriesName}-${seasonIndex}-${episodeIndex}`;

  Object.keys(watched).forEach(key => {
    const [sName, sIndex, eIndex] = key.split('-');
    if (sName === seriesName && parseInt(sIndex) === seasonIndex && key !== currentKey) {
      if (watched[key]) {
        watched[key].active = false;
        console.log(`Desativado active em: ${key}`);
      }
    }
  });

  watched[currentKey] = {
    watched: true,
    active: true,
    timestamp: Date.now(),
    series: seriesName,
    season: seasonIndex,
    episode: episodeIndex
  };

  saveWatchedEpisodes(watched);
  updateEpisodeUI();
  console.log(`Marcado em ${seriesName}: Ep ${episodeIndex + 1}`);
}

function getActiveEpisodesBySeries() {
  const watched = getWatchedEpisodes();
  const activeBySeries = {};
  
  Object.keys(watched).forEach(key => {
    const data = watched[key];
    if (data && data.active) {
      const [seriesName, seasonIndex, episodeIndex] = key.split('-');
      
      if (!activeBySeries[seriesName]) {
        activeBySeries[seriesName] = [];
      }
      
      const existingSeasonIndex = activeBySeries[seriesName].findIndex(
        item => item.seasonIndex === parseInt(seasonIndex)
      );
      
      if (existingSeasonIndex === -1) {
        activeBySeries[seriesName].push({
          seasonIndex: parseInt(seasonIndex),
          episodeIndex: parseInt(episodeIndex),
          data: data
        });
      }
    }
  });
  
  return activeBySeries;
}

function updateEpisodeUI() {
  const seriesTitle = document.querySelector('.series-title')?.textContent || '';
  if (!seriesTitle) return;

  const watched = getWatchedEpisodes();
  const episodeButtons = document.querySelectorAll('#episode-button[data-series-name="' + seriesTitle + '"]');
  episodeButtons.forEach(button => {
    button.classList.remove('watched', 'active');
    const existingBadge = button.querySelector('.badge-watched');
    if (existingBadge) {
      existingBadge.remove();
    }
  });

  Object.keys(watched).forEach(key => {
    const [storedSeriesName, seasonIdx, epIdx] = key.split('-');
    if (storedSeriesName !== seriesTitle) return;

    const data = watched[key];
    if (data && data.watched) {
      const seasonIdxNum = parseInt(seasonIdx);
      const epIdxNum = parseInt(epIdx);
      const targetButton = Array.from(episodeButtons).find(btn => {
        return btn.getAttribute('data-season-index') === seasonIdxNum.toString() && btn.getAttribute('data-episode-index') === epIdxNum.toString();
      });
      
      if (targetButton) {
        targetButton.classList.add('watched');
        
        if (!targetButton.querySelector('.badge-watched')) {
          const badge = document.createElement('span');
          badge.className = 'badge-watched';
          badge.textContent = '▶ ASSISTIDO';
          targetButton.appendChild(badge);
        }
        
        if (data.active) {
          targetButton.classList.add('active');
        }
      }
    }
  });
}

function playEpisode(element) {
  const urlsStr = element.getAttribute('data-urls') || '[]';
  const urls = JSON.parse(urlsStr);
  const firstUrl = urls.length > 0 ? urls[0] : '#';
  const seasonIndex = parseInt(element.getAttribute('data-season-index'));
  const episodeIndex = parseInt(element.getAttribute('data-episode-index'));
  const seriesTitle = document.querySelector('.series-title').textContent;

  markEpisodeAsWatched(seriesTitle, seasonIndex, episodeIndex);
  updateSeriesContinueWatching(seriesTitle);

  if (firstUrl && firstUrl !== '#') {
    window.open(firstUrl, '_blank');
  }
}

const thumbnailCache = {};

function loadEpisodeImages() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                const fallback = img.dataset.fallback;

                if (thumbnailCache[src]) {
                    img.src = thumbnailCache[src];
                    img.closest('#episode-button').style.backgroundImage = `url('${thumbnailCache[src]}')`;
                } else {
                    img.style.opacity = '0';
                    img.src = src;
                    img.onload = () => {
                        thumbnailCache[src] = src;
                        img.closest('#episode-button').style.backgroundImage = `url('${src}')`;
                        img.style.transition = 'opacity 0.3s ease-in';
                        img.style.opacity = '1';
                    };
                    img.onerror = () => {
                        img.src = fallback;
                        thumbnailCache[src] = fallback;
                        img.closest('#episode-button').style.backgroundImage = `url('${fallback}')`;
                        img.style.transition = 'opacity 0.3s ease-in';
                        img.style.opacity = '1';
                    };
                }
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('.episode-thumb').forEach(img => {
        if (!img.src || img.src === '') {
            observer.observe(img);
        } else if (thumbnailCache[img.dataset.src]) {
            img.style.opacity = '0';
            img.src = thumbnailCache[img.dataset.src];
            img.style.transition = 'opacity 0.3s ease-in';
            img.style.opacity = '1';
        }
    });
}

//=======================================================================
//CONTINUE ASSISTINDO
//=======================================================================
function updateSeriesContinueWatching(seriesName) {
  const watched = getWatchedEpisodes();
  let activeInThisSeries = [];

  Object.keys(watched).forEach(key => {
    const [storedSeriesName, seasonIdx, epIdx] = key.split('-');
    if (storedSeriesName === seriesName && watched[key] && watched[key].active) {
      activeInThisSeries.push({ seasonIdx: parseInt(seasonIdx), epIdx: parseInt(epIdx) });
    }
  });

  let continueSection = document.getElementById('continue-watching');
  const seriesHeader = document.getElementById('series-header');
  const seriesEpisodes = document.getElementById('series-episodes');

  let html = '';
  if (activeInThisSeries.length > 0) {
    html += `
      <section id="continue-watching">
        <header class="group-title-header">
          <h2>Continue Assistindo</h2>
        </header>
        <div class="continue-episodes-container">
    `;

    activeInThisSeries.forEach((seasonActive) => {
      const series = findSeriesByName(seriesName);
      if (!series || !series.season[seasonActive.seasonIdx]) return;

      const season = series.season[seasonActive.seasonIdx];
      const episode = season.episodes[seasonActive.epIdx];
      const thumb = episode.thumb || season.thumb_season;
      const urls = episode.url || [];
      const seasonNum = seasonActive.seasonIdx + 1;
      const epNum = seasonActive.epIdx + 1;
      const paddedEp = epNum.toString().padStart(3, '0');

      html += `
        <div class="continue-episode-container">
          <div id="continue-episode-button" 
              style="background-image: url('${thumb}');" 
              data-urls='${JSON.stringify(urls)}' 
              data-series-name="${seriesName}" 
              data-season-index="${seasonActive.seasonIdx}" 
              data-episode-index="${seasonActive.epIdx}" 
              onclick="playContinueEpisode(this)">
            <span class="icon-btn">
              <span class="trash-lid"></span>
              <span class="trash-handle"></span>
              <span class="trash-bar bar1"></span>
              <span class="trash-bar bar2"></span>
              <span class="trash-bar bar3"></span>
            </span>
            <span class="badge-duration">${episode.duration}</span>
            <p>T${seasonNum} - EP ${paddedEp}</p>
            <div class="remove-button" 
                data-series-name="${seriesName}" 
                data-season-index="${seasonActive.seasonIdx}" 
                data-episode-index="${seasonActive.epIdx}">✕</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;
  }

  if (activeInThisSeries.length === 0) {
    if (continueSection) {
      continueSection.remove();
    }
    return;
  }

  if (!continueSection) {
    continueSection = document.createElement('div');
    continueSection.id = 'continue-watching';
    if (seriesHeader) {
      seriesHeader.parentNode.insertBefore(continueSection, seriesHeader);
    } else if (seriesEpisodes) {
      seriesEpisodes.parentNode.insertBefore(continueSection, seriesEpisodes);
    } else {
      document.getElementById('page-content').insertAdjacentElement('afterbegin', continueSection);
    }
  }

  continueSection.innerHTML = html;

  const removeBtns = continueSection.querySelectorAll('.remove-button');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const rmSeriesName = this.getAttribute('data-series-name');
      const rmSeasonIdx = parseInt(this.getAttribute('data-season-index'));
      const rmEpIdx = parseInt(this.getAttribute('data-episode-index'));
      removeContinueWatching(rmSeriesName, rmSeasonIdx, rmEpIdx);
      updateSeriesContinueWatching(rmSeriesName);
    });
  });

  const continueButtons = continueSection.querySelectorAll('#continue-episode-button');
  continueButtons.forEach(btn => {
    if (!btn.onclick) {
      btn.onclick = function() {
        playContinueEpisode(this);
      };
    }
  });
}

function renderGlobalContinueWatching() {
  const activeBySeries = getActiveEpisodesBySeries();
  let html = '';
  let totalEpisodes = 0;

  Object.keys(activeBySeries).forEach(seriesName => {
    totalEpisodes += activeBySeries[seriesName].length;
  });

  if (totalEpisodes === 0) return '';

  html += `
    <section id="global-continue-watching">
      <header class="group-title-header">
        <h2>Continue Assistindo (${totalEpisodes} episódio${totalEpisodes > 1 ? 's' : ''})</h2>
      </header>
      <div class="global-continue-container">
  `;

  Object.keys(activeBySeries).forEach(seriesName => {
    const seriesData = findSeriesByName(seriesName);
    if (!seriesData) return;

    const activeEpisodes = activeBySeries[seriesName];
    
    activeEpisodes.forEach(active => {
      const season = seriesData.season[active.seasonIndex];
      const episode = season.episodes[active.episodeIndex];
      const thumb = episode.thumb || season.thumb_season;
      const urls = episode.url || [];
      const seasonNum = active.seasonIndex + 1;
      const epNum = active.episodeIndex + 1;
      const paddedEp = epNum.toString().padStart(3, '0');

      html += `
        <div class="continue-episode-card">
          <div id="continue-episode-button" 
              style="background-image: url('${thumb}');" 
              data-urls='${JSON.stringify(urls)}' 
              data-series-name="${seriesName}" 
              data-season-index="${active.seasonIndex}" 
              data-episode-index="${active.episodeIndex}" 
              onclick="playContinueEpisode(this)">
            <span class="icon-btn">
              <span class="trash-lid"></span>
              <span class="trash-handle"></span>
              <span class="trash-bar bar1"></span>
              <span class="trash-bar bar2"></span>
              <span class="trash-bar bar3"></span>
            </span>
            <span class="badge-duration">${episode.duration}</span>
            <h1 class="series-name">${seriesName}</h1>
            <h3 class="episode-info">T${seasonNum} - EP ${paddedEp}</h3>
            <div class="remove-button" 
                data-series-name="${seriesName}" 
                data-season-index="${active.seasonIndex}" 
                data-episode-index="${active.episodeIndex}">✕</div>
          </div>
        </div>
      `;
    });
  });

  html += `
      </div>
    </section>
  `;

  return html;
}

function playContinueEpisode(element) {
  const urlsStr = element.getAttribute('data-urls');
  const urls = urlsStr ? JSON.parse(urlsStr) : [];
  const firstUrl = urls.length > 0 ? urls[0] : '#';
  const seriesName = element.getAttribute('data-series-name');
  const seasonIdx = parseInt(element.getAttribute('data-season-index'));
  const epIdx = parseInt(element.getAttribute('data-episode-index'));

  markEpisodeAsWatched(seriesName, seasonIdx, epIdx);
  updateSeriesContinueWatching(seriesName);

  if (firstUrl && firstUrl !== '#') {
    window.open(firstUrl, '_blank');
  }
}

function removeContinueWatching(seriesName, seasonIdx, epIdx) {
  const watched = getWatchedEpisodes();
  const key = `${seriesName}-${seasonIdx}-${epIdx}`;
  if (watched[key]) {
    watched[key].active = false;
    saveWatchedEpisodes(watched);
    updateEpisodeUI();
    updateSeriesContinueWatching(seriesName);
  }
}

//=======================================================================
//INÍCIO
//=======================================================================
function generateSlug(name) {
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
}

function activateByPath(path) {
  const firstSegment = path.split('/')[0];
  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  const targetLink = document.querySelector(`a[data-path="${firstSegment}"], a[data-group="${firstSegment}"]`);
  if (targetLink) targetLink.closest('li').classList.add('active');
  else if (firstSegment === generateSlug('Início') || firstSegment === 'inicio')
    document.querySelector('#main-menu-list li:first-child').classList.add('active');
}

function getCurrentPath() {
  let hash = window.location.hash;

  if (hash && hash.length > 1) {
    return hash.substring(1);
  }
    
  return generateSlug('Início');
}

function getCarouselData(path) {
  const segments = path.split('/').filter(s => s);
  if (segments.length === 2) {
    return [];
  }
  
  const isHomePage = segments.length === 1 && segments[0] === generateSlug('Início');
  let data = [];

  if (isHomePage) {
    seriesData.forEach(groupItem => {
      if (groupItem.group) {
        const homepageItems = groupItem.group.filter(item => 
          item.enabled !== false && 
          item.carrousel && 
          item.carrousel.enabled && 
          item.carrousel.homepage
        );
        data.push(...homepageItems);
      }
    });
  } else {
    const groupSlug = segments.length >= 1 ? segments[0] : '';
    const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === groupSlug && groupItem.visible);
    if (matchingGroup && matchingGroup.group) {
      data = matchingGroup.group.filter(item => 
        item.enabled !== false && 
        item.carrousel && 
        item.carrousel.enabled
      );
    }
  }

  return data;
}

function renderCarrousel(path) {
  let currentSlide = 0;
  let totalSlides = 0;
  let isTransitioning = false;

  const slideDuration = speedCarrouselBar * 1000;
  const transitionDuration = 500;
  const transitionTime = slideDuration;

  const carousel = document.getElementById('carousel');
  const slidesContainer = document.getElementById('slides');
  const progress = document.getElementById('progress');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!carousel) return;

  let autoPlayTimer = null;
  let isDragging = false;
  let startX = 0;
  let movedBy = 0;

  const handleTransitionEnd = () => {
    if (isTransitioning) {
      isTransitioning = false;
    }
  };

  slidesContainer.addEventListener('transitionend', handleTransitionEnd);

  function createSlides() {
    const data = getCarouselData(path);
    const originalSlides = [];

    data.forEach(item => {
      const carrousel = item.carrousel;
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');
      let thumbUrl;
      if (randomImagesCarrousel && carrousel.thumb && carrousel.thumb.length > 1) {
        const randomIndex = Math.floor(Math.random() * carrousel.thumb.length);
        thumbUrl = carrousel.thumb[randomIndex];
      } else {
        thumbUrl = carrousel.thumb[0];
      }
      slide.style.backgroundImage = `url(${thumbUrl})`;

      const content = document.createElement('div');
      content.classList.add('carousel-caption');

      let logoHtml = '';
      if (carrousel.logo.enabled && carrousel.logo.url) {
        const minimalistClass = carrousel.logo.minimalist ? 'minimalist-logo' : '';
        logoHtml = `<img class="carousel-logo ${minimalistClass}" src="${carrousel.logo.url}" alt="${carrousel.title}">`;
      } else {
        logoHtml = `<h1>${carrousel.title}</h1>`;
      }

      const currentIsFavorite = typeof isFavorite === 'function' && isFavorite(item.name);
      const serieDataJson = JSON.stringify(item);

      content.innerHTML = `
        ${logoHtml}
        <p>${carrousel.description.trim()}</p>
        <div class="carousel-actions">
          <button class="btn btn-primary"><i class="fas fa-play"></i>Assistir Agora</button>
          <button class="favorite-button-s2 ${currentIsFavorite ? 'active' : ''}" data-serie='${serieDataJson}'></button>
        </div>
      `;

      slide.appendChild(content);
      slidesContainer.appendChild(slide);
      originalSlides.push(slide);
    });

    totalSlides = originalSlides.length;

    if (totalSlides > 1) {
      const lastClone = originalSlides[totalSlides - 1].cloneNode(true);
      slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);
      const firstClone = originalSlides[0].cloneNode(true);
      slidesContainer.appendChild(firstClone);
      currentSlide = 1;
    } else {
      currentSlide = 0;
    }

    if (totalSlides > 0) {
      carousel.style.display = 'block';
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      if (totalSlides > 1) {
        createDots();
        startAutoPlay();
      } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (progress) progress.style.display = 'none';
        const dotsContainer = document.getElementById('dots');
        if (dotsContainer) dotsContainer.style.display = 'none';
      }
    } else {
      carousel.style.display = 'none';
      slidesContainer.innerHTML = '';
    }
  }

  function createDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === getLogicalIndex()) dot.classList.add('active');
      dot.onclick = () => {
        if (!isTransitioning) {
          goToSlide(i);
          pauseAutoPlay();
        }
      };
      dotsContainer.appendChild(dot);
    }

    if (totalSlides > 9) {
      dotsContainer.classList.add('compact-dots');
    } else {
      dotsContainer.classList.remove('compact-dots');
    }
  }

  function getLogicalIndex() {
    if (totalSlides <= 1) return currentSlide;
    return (currentSlide - 1 + totalSlides) % totalSlides;
  }

  function updateDots() {
    const logicalIndex = getLogicalIndex();
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === logicalIndex);
    });
  }

  function goToSlide(logicalIndex) {
    if (totalSlides <= 1 || isTransitioning) return;
    isTransitioning = true;
    const targetPhysical = 1 + logicalIndex;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${targetPhysical * 100}%)`;
    currentSlide = targetPhysical;
    updateDots();
    startAutoPlay();
  }

  function nextSlide() {
    if (totalSlides <= 1 || isTransitioning) return;
    isTransitioning = true;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    currentSlide++;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    let logicalIndex = getLogicalIndex();
    if (currentSlide === totalSlides + 1) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            currentSlide = 1;
            slidesContainer.style.transform = `translateX(-100%)`;
            setTimeout(() => slidesContainer.style.transition = 'transform 0.5s ease-in-out', 20);
        }, transitionDuration);
        logicalIndex = 0;
    }
    updateDots();
    startAutoPlay();
    pauseAutoPlay();
  }

  function prevSlide() {
    if (totalSlides <= 1 || isTransitioning) return;
    isTransitioning = true;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    currentSlide--;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (currentSlide === 0) {
      setTimeout(() => {
        slidesContainer.style.transition = 'none';
        currentSlide = totalSlides;
        slidesContainer.style.transform = `translateX(-${totalSlides * 100}%)`;
        setTimeout(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-in-out';
          isTransitioning = false;
        }, 50);
      }, transitionDuration);
    } else {
      setTimeout(() => {
        isTransitioning = false;
      }, transitionDuration);
    }
    
    updateDots();
    pauseAutoPlay();
  }

  function startAutoPlay() {
    if (totalSlides <= 1) return;
    
    clearTimeout(autoPlayTimer);
    
    if (progress) {
      progress.style.animation = 'none';
      void progress.offsetWidth;
      progress.style.animation = `carouselProgress ${transitionTime}ms linear forwards`;
      progress.style.animationPlayState = 'running';
    }
    
    autoPlayTimer = setTimeout(() => {
      nextSlide();
    }, transitionTime);
  }

  function pauseAutoPlay() {
    if (totalSlides <= 1) return;
    
    clearTimeout(autoPlayTimer);
    
    if (progress) {
      progress.style.animationPlayState = 'paused';
    }
  }

  function resumeAutoPlay() {
    if (totalSlides <= 1) return;
    
    if (progress) {
      const computedStyle = getComputedStyle(progress);
      const barWidth = parseFloat(computedStyle.width) || 0;
      
      const parentElement = progress.parentElement;
      const parentStyle = getComputedStyle(parentElement);
      const parentWidth = parseFloat(parentStyle.width) || 1;
      
      const progressFraction = barWidth / parentWidth;
      const elapsedTime = progressFraction * transitionTime;
      let remainingTime = transitionTime - elapsedTime;
      
      if (remainingTime < 0) {
        remainingTime = 0;
      }
      
      progress.style.animationPlayState = 'running';
      
      autoPlayTimer = setTimeout(() => {
        nextSlide();
      }, remainingTime);
    }
  }

  slidesContainer.addEventListener('mousedown', dragStart);
  slidesContainer.addEventListener('touchstart', dragStart);
  document.addEventListener('mousemove', dragMove);
  document.addEventListener('touchmove', dragMove, { passive: false });
  document.addEventListener('mouseup', dragEnd);
  document.addEventListener('touchend', dragEnd);

  function dragStart(e) {
    if (totalSlides <= 1) return;
    isTransitioning = false;
    isDragging = true;
    startX = getPositionX(e);
    slidesContainer.style.transition = 'none';
    e.preventDefault();
    pauseAutoPlay()
  }

  function dragMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    movedBy = currentX - startX;
    const translateValue = -currentSlide * carousel.offsetWidth + movedBy;
    slidesContainer.style.transform = `translateX(${translateValue}px)`;
    e.preventDefault();
    pauseAutoPlay();
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    const threshold = carousel.offsetWidth * 0.3;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';

    if (movedBy < -threshold) {
      nextSlide();
    } else if (movedBy > threshold) {
      prevSlide();
    } else {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    movedBy = 0;
    pauseAutoPlay();
  }

  function getPositionX(e) {
    return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isTransitioning) {
        prevSlide();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isTransitioning) {
        nextSlide();
      }
    });
  }

  carousel.addEventListener('mouseenter', pauseAutoPlay);
  carousel.addEventListener('mouseleave', resumeAutoPlay);
  slidesContainer.innerHTML = '';

  createSlides();
}

//=======================================================================
//INICIALIZAÇÃO
//=======================================================================
function hideLoader(startTime) {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const loadTime = Date.now() - startTime; 
    const minDisplayTime = 500; 
    const delay = Math.max(0, minDisplayTime - loadTime); 

    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove(); 
        }, 500); 
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('dynamic-content-menu');
  const mainMenuList = document.getElementById('main-menu-list');
  let seriesHtml = '';
  const initialActiveGroup = null;

  let mainMenuItems;
  if (iconsAnimated) {
    mainMenuItems = [
      { name: 'Início',    icon: homeIconImg, path: generateSlug('Início'), active: true },
      { name: 'Histórico', icon: historyIconImg, path: generateSlug('Histórico') },
      { name: 'Favoritos', icon: favoritesIconImg, path: generateSlug('Favoritos') }
    ];
  } else {
    mainMenuItems = [
      { name: 'Início',    icon: homeIconBase64, path: generateSlug('Início'), active: true },
      { name: 'Histórico', icon: historyIconBase64, path: generateSlug('Histórico') },
      { name: 'Favoritos', icon: favoritesIconBase64, path: generateSlug('Favoritos') }
    ];
  }

  let mainMenuHtml = '';
  mainMenuItems.forEach((item, index) => {
    let iconHTML = '';
    if (item.icon) {
      iconHTML = `<img src="${item.icon}" class="custom-icon" alt="${item.name} Icon">`;
    } else {
      const faIcons = {
        'Início': 'fas fa-home',
        'Histórico': 'fas fa-history',
        'Favoritos': 'fas fa-star'
      };
      iconHTML = `<i class="${faIcons[item.name] || 'fas fa-layer-group'}"></i>`;
    }

    const activeClass = index === 0 ? 'active' : '';
    mainMenuHtml += `
      <li class="${activeClass}">
        <a href="#" data-path="${item.path}">${iconHTML} ${item.name}</a>
      </li>
    `;
  });

  if (mainMenuList) {
    mainMenuList.innerHTML = mainMenuHtml;
  }

  seriesData.forEach(item => {
    if (item.visible) {
      const iconData = getIcon(item.group_name);
      let iconHTML = '';
      const isActive = (initialActiveGroup && item.group_name === initialActiveGroup) ? 'active' : '';

      if (iconData.type === 'fa') {
        iconHTML = `<i class="${iconData.value}"></i>`;
      } else if (iconData.type === 'base64') {
        iconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt || item.group_name + ' Icon'}">`;
      } else if (iconData.type === 'svg') {
        iconHTML = iconData.value;
      }

      const slug = generateSlug(item.group_name);
      seriesHtml += `
        <li class="${isActive}">
          <a href="#" data-group="${slug}">
            ${iconHTML} ${item.group_name}
          </a>
        </li>
      `;
    }
  });

  if (menuContainer) menuContainer.innerHTML = seriesHtml;

  const allMenuLinks = document.querySelectorAll('.sidebar nav ul li a');
    allMenuLinks.forEach(link => {
        link.addEventListener('click', async function (event) {
            event.preventDefault();
            let path = this.getAttribute('data-path') || this.getAttribute('data-group');
            if (!path) return;

            const newHash = `#${path}`;

            window.location.hash = newHash;
            activateByPath(path);
            await loadPageContent(path);
            renderCarrousel(path);
            attachFavoriteListeners();
            updateCarouselFavorites();
        });
    });

    window.addEventListener('hashchange', () => {
        const path = getCurrentPath();
        activateByPath(path);
        loadPageContent(path);
        renderCarrousel(path);
        attachFavoriteListeners();
        updateCarouselFavorites();

        const contentContainer = document.getElementById('page-content');
        const filteredItems = getFilteredItems(path);
        const isSeriesPage = filteredItems.length > 0 && filteredItems[0].type === 'series';
        if (!isSeriesPage) {
          attachSeriesNavigationListeners(contentContainer);
        }
    });

    const currentPath = getCurrentPath();
    activateByPath(currentPath);
    loadPageContent(currentPath);
    renderCarrousel(currentPath);

    const streamsLink = document.querySelector('a[data-group="' + generateSlug('Streams') + '"]');
    if (streamsLink) setupStreamIcons(streamsLink);

    setTimeout(() => {
      hideLoader();
      attachFavoriteListeners();
      updateCarouselFavorites();
      
      const filteredItems = getFilteredItems(currentPath);
      const isSeriesPage = filteredItems.length > 0 && filteredItems[0].type === 'series';
      if (!isSeriesPage) {
        attachSeriesNavigationListeners();
      }
    }, 100);
});