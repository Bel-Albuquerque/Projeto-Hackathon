async function fetchVideos() {
  const url = `https://pixabay.com/api/videos/?key=23087821-3450a383a50615a4f36bb612f&q=photography`;
  const result = await fetch(url);
  const obj = await result.json();
  for (index = 1; index <= 24; index += 1) {
    const videoSrc = obj.hits[index].videos.tiny.url
    const video = createVideo(videoSrc)
  }
  
  
  return obj.hits
}

async function createVideo(videoSrc) {
  const video = document.createElement('video');
  video.controls = false;
  video.autoplay = false;
  video.classList.add('video_galery');
  video.src = videoSrc;
  video.alt = 'Video';
  video.addEventListener("mouseover", autoplay)
  video.addEventListener("mouseleave", voltarAoNormal)
  video.addEventListener('click', criarPlayer)
  document.querySelector('#videos').appendChild(video);
  
}

fetchVideos()

function criaElementoDiv(nomeId) {
  const div = document.createElement('div')
  div.id = nomeId
  return div
}


function fecharPlayer() {
  player.innerHTML = ''
  player.style.display = 'none'
 }

 const player = document.querySelector('#player');


function criaBotaoFechar(id, src, alt) {
  const close = document.createElement('img');
  close.id = id
  close.src = src
  close.alt = alt
  close.addEventListener('click', fecharPlayer)
  return close
  }
  
  async function criarPlayer(event) {
    const caixaButton = criaElementoDiv('caixaBotaoFechar')
    const divDeEspaço = criaElementoDiv('espacoBotaoFechar')
    const buttonCose = criaBotaoFechar('close', 'close_111152.png', 'Fechar')
    const playerView = criaElementoDiv('player_view')
    const video = document.createElement('video')
    player.style.display = 'flex'
    caixaButton.appendChild(divDeEspaço);
    caixaButton.appendChild(buttonCose);
    player.appendChild(caixaButton)
    player.appendChild(playerView)

    const src = event.target.src
    video.controls = true;
    video.autoplay = true;
    video.classList.add('videoExibido');
    video.src = await src;
    video.alt = 'Video';
    video.style.width = '700px'
    playerView.appendChild(video)
  }


// display: flex;
// flex-direction: column;
// background-color: rgba(0, 0, 0, 0.712);
// width: 100%;
// position: absolute;

function carregaGrande(event) {


}

function autoplay(event) {
  event.target.autoplay =true
  event.target.preload = 'auto'
  event.target.controls = true
}

function voltarAoNormal(event) {
  event.target.autoplay =false
  event.target.preload = 'none'
  event.target.controls = false
}

