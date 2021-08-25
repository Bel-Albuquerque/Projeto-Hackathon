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

for (index = 0; index <= 19; index += 1) {
  createImage();
} 


function criarGaleria() {
  document.querySelector('#galery_').style.display='flex'
}

document.querySelector("#idGaleria").addEventListener('click', criarGaleria)

function fechaGaleria() {
  document.querySelector('#galery_').style.display='none'
}

document.querySelector('#close').addEventListener('click', fechaGaleria)

function confirmarEmail(){
  document.querySelector('#emailConfirmation').style.display='inline';
  document.querySelector('#inpuEmail').value=''
  document.querySelector('#inpuEmail').placeholder='Cadastro confirmado'
}

document.querySelector('#inpuEmail').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
     confirmarEmail()

  }
});