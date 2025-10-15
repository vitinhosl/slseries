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
              enabled: false,
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
              movies: false,
              episodes: [
                { title: "Episódio 001", subtitle: "", duration: "1:09:48", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
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
              enabled: false,
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
              movies: false,
              episodes: [
                { title: "Episódio 001", subtitle: "", duration: "1:09:48", thumb: "https://i.imgur.com/wSPSsZz.jpeg", url: [ "https://filemoon.to/e/fohv33go6fjl/2Efu4ZQADExGVxxV",                   "https://mixdrop.sn/e/gjojl1pptpow89",  "https://streamtape.com/get_video?id=kpZO7OpaKbF6l2&expires=1755927970&ip=FRuOExyNRxSNFt&token=j1EN2K21sdWR&stream=1",  "https://www.secvideo1.online/get_file/12/3b370c31cd091769c32c56cc419d14d100d7961945/799000/799756/799756_720p.mp4"] },
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

const homeIconBase64        = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADEUlEQVR4nO2c24tNcRiGn3Em5RQKERnjhguSJCkkpORGrqQ0pST/gn+BK7lxIYm0c+VKkyTJhZRERIxyyjAzTuP4atda0ST2zF57/771re+pp6ZpLt733dP01awWBEEQBEEQBEEQlIMuoAYMZta/XpY6VFXYDLwDNMz69zalDuedfcCXv4yf+w3oTh3SK0eAn/8YP7f+M0eBjtSBvTAOONHA8MM9BYxPHb7sTAUujWL83MvAtNQlyso84FYT4+feARamLlM2VgC9BYyf+xxYlbpUWdgC9Bc4fu57YEfqctbZD3xtwfh/nqkHU5e0SEd2OqpNHosz9TcTgNNtHD/3PDCJijMd6Ekwfm5PlqGSzAduJxw/9y6wiIqxEnhmYPzcF8BqKsJWYMDA6BrmB2AnzjmQnYIy6nfgEA5p95mpAs7UMThhInDGwKgaoReAyZScGcAVA2NqlF4HZlNSFgP3DIyoJn0IdFIy1gAvDYyngnwDrKck7AI+GhhNBfsZ2INxuo2fmSrgTD2MQcp2ZsrTmVo/M88aGEVttmbhTJ0JXDUwhhJ5A5iTavwlwH0DIyixj7JHJdvKWuCVgfIyYh+woV3j7wY+GSgtYw4Be9vxeOAPA2Vl1PyxyMIZCxw3UFAl8WT2SGUh1P9xfc5AKZXMi8CUZsefBVwzUEYl9SYwd7TjLwUeGCihkvsYWD7S8dcBrw2ElxPfAhsbHX97dlKlDi1nDmXb/penBsLKqU8a+QAsPa8jZ/Y2+icoPgRaMv42WoAqbnJUcZOjipscVdzkqOImRxU3Oaq4yVHFTY71gjKez31BGc/nvqCM53NfUMbzuS8o4/ncF5TxfO4Lyng+9wVlPJ/7gjKez31BGc/nvqCM53NfUMbzuS8o4/ncF5TxfO4Lyng+9wVlPJ/7gjKez31BGc/nvqCM53NfUMbzuS8o4/ncF5TxfO4Lyng+9wVlPF/TDLawXH8F8jVNrcWvjvSer2m6sreFFF2ur6C3FVrPVwgLsvfxF/FO6IHsN6uzQvmCIAiCIAiCIAiCIAgC/PMLPuW3uHQ1X/MAAAAASUVORK5CYII=';
const historyIconBase64     = 'data:image/png;base64,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';
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
const kickIconSvg           = `<svg role="img" viewBox="-5 0 30 30" xmlns="http://www.w3.org/2000/svg" id="Kick--Streamline-Simple-Icons" class="custom-icon"><path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" fill="#000000" stroke-width="1"></path></svg>`;

const homeIconImg           = 'https://i.imgur.com/xS20AuN.png';
const historyIconImg        = 'https://i.imgur.com/nxaxTS3.png';
const favoritesIconImg      = 'https://i.imgur.com/LAcxXkU.png'; //'https://i.imgur.com/UmEAJ1G.png';

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

function generateSlug(name) {
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
}

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

function getFilteredItems(path) {
  if (path === generateSlug('Favoritos')) {
    return seriesData.map(groupItem => ({
        ...groupItem,
        group: groupItem.group ? groupItem.group.filter(item => isFavorite(item.name)) : []
    })).filter(groupItem => groupItem.group.length > 0);

  } else if (path === generateSlug('Início')) {
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
      const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === path && groupItem.visible);
      return matchingGroup ? [matchingGroup] : [];
  }
}

async function loadPageContent(path) {
  const contentContainer = document.getElementById('page-content');
  let html = '';
  const filteredGroups = getFilteredItems(path);
  const isFavoritesPage = path === generateSlug('Favoritos');
  const isHomePage = path === generateSlug('Início');

  if (filteredGroups.length > 0) { 
    if (isFavoritesPage) {
      html += '<h1 class="main-favorites-title">Meus Favoritos</h1>'; 
    }

    filteredGroups.forEach(groupItem => {
      const groupSlug = generateSlug(groupItem.group_name);
      html += `<section id="group-${groupSlug}-header">`;
      html += `<header class="group-title-header">`;
      
      let displayGroupName = groupItem.group_name;
      if (isFavoritesPage) {
        displayGroupName = `${groupItem.group_name} favoritos`;
      }
      
      let iconHTML = '';
      if (groupItem.group_name === 'Favoritos' && !isFavoritesPage) {
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
      
      const favoritesClass = isFavoritesPage || (groupItem.group_name === 'Favoritos' && !isFavoritesPage) ? 'favorites-header' : '';
      html += `<h2 class="${favoritesClass}">${iconHTML} ${displayGroupName}</h2>`;
      
      if (isHomePage) {
        html += `<button class="explore-button" data-group="${groupSlug}"><span class="icon-right after"></span></button>`;
      }
      html += `</header>`;
          
      const layoutClass = isHomePage ? 'home-layout' : 'category-layout';
      html += `<div class="group-cards-header ${layoutClass}">`;

      if (isHomePage) {
        html += `<button class="nav-arrow prev hidden" aria-label="Cartões anteriores"><i class="fas fa-chevron-left"></i></button>`;
      }

      html += `<div class="group-cards-container ${layoutClass}">`;

      const sortedGroup = [...groupItem.group].sort((a, b) => {
        if (a.enabled !== false && b.enabled === false) return -1;
        if (b.enabled !== false && a.enabled === false) return 1;
        return a.name.localeCompare(b.name);
      });

      let cardsCount = 0;
      const maxCardsHome = 20;

      sortedGroup.forEach(item => {
        if (item.visible !== false && item.name && (!isHomePage || cardsCount < maxCardsHome)) {
          cardsCount++;
          
          const urls = item.thumb_buttons.url;
          const selectedThumb = randomImagesCards 
            ? urls[Math.floor(Math.random() * urls.length)] 
            : urls[0];
          const isEnabled = item.enabled !== false;
          const watchButtonClass = isEnabled ? 'watch-button' : 'watch-button disabled';
          const watchButtonText = isEnabled ? 'ASSISTIR' : 'INDISPONÍVEL';
          const currentIsFavorite = isFavorite(item.name);
          const containerClass = isEnabled ? '' : 'disabled';

          html += `
            <div class="card-container ${containerClass}">
              <div class="inner-container">
                  <div class="border-outer"></div> 
                  <div class="main-card" style="background-image: url('${selectedThumb}')"></div>
                  <div class="glow-layer-1"></div>
                  <div class="glow-layer-2"></div>
              </div>

              <div class="overlay-1"></div>
              <div class="overlay-2"></div>
              <div class="background-glow"></div>

              <div id="group-series-button">
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
        }
      });
      
      html += `</div>`;

      if (isHomePage) {
        html += `<button class="nav-arrow next" aria-label="Próximos cartões"><i class="fas fa-chevron-right"></i></button>`;
      }
      html += `</div>`;
      html += '</section>';
    });
  } 
  else {
    if (isFavoritesPage) {
      html += '<h1 class="main-favorites-title">Meus Favoritos</h1>';
      html += '<p>Você ainda não adicionou nenhum item aos favoritos.</p>';
    } else {
      html += '<p>Nenhum item encontrado.</p>';
    }
  }

  contentContainer.innerHTML = html;

  if (isHomePage) {
    initializeHomePageFeatures();
  }
  
  const currentPath = path;
  const favoriteButtons = contentContainer.querySelectorAll('.favorite-button');
  
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const serieData = JSON.parse(this.getAttribute('data-serie'));
      const nowFavorite = toggleFavorite(serieData);

      if (currentPath === generateSlug('Favoritos') || currentPath === generateSlug('Início')) {
        loadPageContent(currentPath);
        return;
      }

      this.classList.toggle('favorited', nowFavorite);

      const star = this.querySelector('.rating__star');
      const ring = this.querySelector('.rating__star-ring');
      const stroke = this.querySelector('.rating__star-stroke');
      const fill = this.querySelector('.rating__star-fill');
      const lines = this.querySelectorAll('.rating__star-line');

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

      const tooltip = this.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = nowFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
      }

      this.classList.add('pulse');
      setTimeout(() => {this.classList.remove('pulse');}, 600);
    });
  });
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

  const carouselFavoriteButtons = document.querySelectorAll('.favorite-button-s2');
  carouselFavoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const serieData = JSON.parse(this.getAttribute('data-serie'));
      const nowFavorite = toggleFavorite(serieData);

      this.classList.toggle('active', nowFavorite);
      this.classList.add('heart-pulse');
      this.addEventListener('animationend', () => {
        this.classList.remove('heart-pulse');
      }, { once: true });

      const currentPath = getCurrentPath();
      if (currentPath === generateSlug('Início') || currentPath === generateSlug('Favoritos')) {
        loadPageContent(currentPath);
      }
    });
  });
}

function activateByPath(path) {
  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  const targetLink = document.querySelector(`a[data-path="${path}"], a[data-group="${path}"]`);
  if (targetLink) targetLink.closest('li').classList.add('active');
  else if (path === generateSlug('Início') || path === 'inicio')
    document.querySelector('#main-menu-list li:first-child').classList.add('active');
}

function getCurrentPath() {
  let hash = window.location.hash;

  if (hash && hash.length > 1) {
    const pathPart = hash.substring(1).split('/')[0];
    return pathPart || generateSlug('Início');
  }
    
  return generateSlug('Início');
}

function renderCarrousel() {
  let allCarouselSlides = [];

  seriesData.forEach(groupItem => {
      if (groupItem.group && Array.isArray(groupItem.group)) {
          groupItem.group.forEach(series => {
            const carousel = series.carrousel;
            
            if (carousel && carousel.enabled === true && carousel.thumb && Array.isArray(carousel.thumb) && carousel.thumb.length > 0) {
              let imageUrl = carousel.thumb[0];
              if (randomImagesCarrousel && carousel.thumb.length > 1) {
                const randomIndex = Math.floor(Math.random() * carousel.thumb.length);
                imageUrl = carousel.thumb[randomIndex];
              }
              
              allCarouselSlides.push({
                title: carousel.title || series.name, 
                description: carousel.description || '',
                imageUrl: imageUrl,
                seriesData: series
              });
            }
        });
      }
  });

  const carouselSection = document.querySelector('.content-carousel');
  if (allCarouselSlides.length === 0) {
    if (carouselSection) carouselSection.style.display = 'none';
    return;
  }
  if (carouselSection) carouselSection.style.display = 'block';

  const slidesContainer = document.querySelector('.carousel-slides');
  const dotsContainer = document.querySelector('.carousel-dots');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const progressBar = document.querySelector('.carousel-progress');

  let currentSlide = 0;
  let slidesHTML = '';
  let dotsHTML = '';
  
  const transitionTime = speedCarrouselBar * 1000;

  let autoPlayTimer;
  let progressBarElement;

  allCarouselSlides.forEach((slide, index) => {
    const isActive = index === 0 ? 'active' : '';
    const seriesName = slide.seriesData.name;
    const currentIsFavorite = typeof isFavorite === 'function' && isFavorite(seriesName); 
    const carousel = slide.seriesData.carrousel;
    const logo = carousel.logo;
    let titleHTML = `<h1>${slide.title}</h1>`;
    
    if (logo && logo.enabled === true && logo.url && logo.url.trim() !== '') {
      const logoClass = logo.minimalist ? 'carousel-logo minimalist-logo' : 'carousel-logo';
      titleHTML = `<img src="${logo.url.trim()}" class="${logoClass}" alt="${slide.title}">`;
    }
    
    slidesHTML += `
      <div class="carousel-slide ${isActive}" style="background-image: url('${slide.imageUrl.trim()}');">
        <div class="carousel-caption">
          ${titleHTML}
          <p>${slide.description.trim()}</p>
          
          <div class="carousel-actions">
            <button class="btn btn-primary btn-watch-now">
                <i class="fas fa-play"></i> Assistir Agora
            </button>
            
            <button 
                class="favorite-button-s2 ${currentIsFavorite ? 'active' : ''}" 
                data-serie='${JSON.stringify(slide.seriesData)}'
            ></button>
          </div>
        </div>
      </div>
    `;
    
    if (allCarouselSlides.length > 1) {
      dotsHTML += `<span class="dot ${isActive}" data-slide-index="${index}"></span>`;
    }
  });

  slidesContainer.innerHTML = slidesHTML;
  
  const hasMultipleSlides = allCarouselSlides.length > 1;
  
  if (hasMultipleSlides) {
    dotsContainer.innerHTML = dotsHTML;
    dotsContainer.style.display = 'flex';
    prevButton.style.display = 'flex';
    nextButton.style.display = 'flex';
    
    if (!progressBar) {
      const newProgressBar = document.createElement('div');
      newProgressBar.className = 'carousel-progress';
      newProgressBar.innerHTML = '<div class="carousel-progress-bar"></div>';
      document.querySelector('.carousel-container').appendChild(newProgressBar);
      progressBarElement = newProgressBar.querySelector('.carousel-progress-bar');
    } else {
      progressBar.style.display = 'block';
      progressBar.innerHTML = '<div class="carousel-progress-bar"></div>';
      progressBarElement = progressBar.querySelector('.carousel-progress-bar');
    }
  } else {
    dotsContainer.style.display = 'none';
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';
    if (progressBar) progressBar.style.display = 'none';
  }

  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  function startAutoPlay() {
    if (!hasMultipleSlides) return;
    
    clearInterval(autoPlayTimer);
    
    if (progressBarElement) {
      progressBarElement.style.animation = 'none';
      void progressBarElement.offsetWidth;
      progressBarElement.style.animation = `carouselProgress ${transitionTime}ms linear forwards`;
      progressBarElement.style.animationPlayState = 'running';
    }
    
    autoPlayTimer = setTimeout(() => {
      updateCarousel(currentSlide + 1);
    }, transitionTime);
  }

  function pauseAutoPlay() {
    if (!hasMultipleSlides) return;
    
    clearTimeout(autoPlayTimer);
    
    if (progressBarElement) {
      progressBarElement.style.animationPlayState = 'paused';
    }
  }

  function resumeAutoPlay() {
    if (!hasMultipleSlides) return;
    
    if (progressBarElement) {
      const computedStyle = getComputedStyle(progressBarElement);
      const barWidth = parseFloat(computedStyle.width) || 0;
      
      const parentElement = progressBarElement.parentElement;
      const parentStyle = getComputedStyle(parentElement);
      const parentWidth = parseFloat(parentStyle.width) || 1;
      
      const progressFraction = barWidth / parentWidth;
      const elapsedTime = progressFraction * transitionTime;
      let remainingTime = transitionTime - elapsedTime;
      
      if (remainingTime < 0) {
        remainingTime = 0;
      }
      
      progressBarElement.style.animationPlayState = 'running';
      
      autoPlayTimer = setTimeout(() => {
        updateCarousel(currentSlide + 1);
      }, remainingTime);
    }
  }

  function updateCarousel(newIndex) {
    slides[currentSlide].classList.remove('active');
    if (hasMultipleSlides) {
      dots[currentSlide]?.classList.remove('active');
    }
    
    if (newIndex >= totalSlides) {
        currentSlide = 0;
    } else if (newIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = newIndex;
    }

    slides[currentSlide].classList.add('active');
    if (hasMultipleSlides) {
      dots[currentSlide]?.classList.add('active');
    }
    
    if (hasMultipleSlides) {
      startAutoPlay();
    }
  }

  if (hasMultipleSlides) {
    prevButton.addEventListener('click', () => {
      updateCarousel(currentSlide - 1);
      pauseAutoPlay();
    });
    
    nextButton.addEventListener('click', () => {
      updateCarousel(currentSlide + 1);
      pauseAutoPlay();
    });

    dots.forEach(dot => {
      dot.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-slide-index'));
        pauseAutoPlay();
        updateCarousel(index);
      });
    });
  }

  const carouselContainer = document.getElementById('hero-carousel');
  
  carouselContainer.addEventListener('mouseenter', () => {
    if (hasMultipleSlides) {
      pauseAutoPlay();
    }
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    if (hasMultipleSlides) {
      resumeAutoPlay();
    }
  });

  if (hasMultipleSlides) {
    startAutoPlay();
  }

  const favoriteButtons = document.querySelectorAll('.favorite-button-s2');

  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const serieData = JSON.parse(this.getAttribute('data-serie'));
      const nowFavorite = toggleFavorite(serieData); 

      this.classList.toggle('active', nowFavorite);
      this.classList.add('heart-pulse');
      this.addEventListener('animationend', () => {
          this.classList.remove('heart-pulse');
      }, { once: true });

      const currentPath = getCurrentPath();
      if (currentPath === generateSlug('Início') || currentPath === generateSlug('Favoritos')) {
          loadPageContent(currentPath);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCarrousel();
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
        });
    });

    window.addEventListener('hashchange', () => {
        const path = getCurrentPath();
        activateByPath(path);
        loadPageContent(path);
    });

    const currentPath = getCurrentPath();
    activateByPath(currentPath);
    loadPageContent(currentPath);

    const streamsLink = document.querySelector('a[data-group="' + generateSlug('Streams') + '"]');
    if (streamsLink) setupStreamIcons(streamsLink);

    loadPageContent(currentPath).then(() => {
      hideLoader();
    });
});