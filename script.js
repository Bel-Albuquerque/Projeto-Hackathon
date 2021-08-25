async function fetchImage() {
  const number = Math.round(Math.random() * 9);
  const index = Math.floor(Math.random() * 99);
  const url = `https://picsum.photos/v2/list?page=${number}&limit=100`;
  const result = await fetch(url);
  const foto = await result.json();
  return foto[index].download_url;
}


async function createImage() {
  const imageSrc = await fetchImage();
  const image = document.createElement('img');
  image.classList.add('image_galery');
  image.src = imageSrc;
  image.alt = 'Imagem bonita';
  document.querySelector('#galery_view').appendChild(image);
}

function criaElementoDiv(nomeId) {
  const div = document.createElement('div')
  div.id = nomeId
  return div
}

function fecharGaleria() {
  galery.innerHTML = ''
 }

function criaBotaoFechar(id, src, alt) {
const close = document.createElement('img');
close.id = id
close.src = src
close.alt = alt
close.addEventListener('click', fecharGaleria)
return close
}

const galery = document.querySelector('#galery_');

function criarGaleria() {
  const caixaButton = criaElementoDiv('caixaBotaoFechar')
  const divDeEspaço = criaElementoDiv('espacoBotaoFechar')
  const buttonCose = criaBotaoFechar('close', 'close_111152.png', 'Fechar')
  const galeryView = criaElementoDiv('galery_view')

  caixaButton.appendChild(divDeEspaço);
  caixaButton.appendChild(buttonCose);
  galery.appendChild(caixaButton)
  galery.appendChild(galeryView)
  
  for (index = 0; index <= 19; index += 1) {
    createImage();
  } 
}

document.querySelector('#idGaleria').addEventListener('click', criarGaleria)

const inputEmail = document.querySelector('#inpuEmail')
const confirmacaoCadastro =document.querySelector('#emailConfirmation')
const userEmail = document.querySelector('#UserEmail')
const check = document.querySelector('#checkEmail')

function confirmarEmail(){
  const email = inputEmail.value
  inputEmail.style.display ='none'
  check.style.display='inline';
  confirmacaoCadastro.style.display='inline';
  userEmail.innerText = email
}

document.querySelector('#inpuEmail').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
     confirmarEmail()
  }
});

