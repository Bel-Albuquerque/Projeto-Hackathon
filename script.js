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
  image.classList.add('image');
  image.src = imageSrc;
  image.alt = 'Imagem bonita';
  document.querySelector('#images').appendChild(image);
}

for (index = 0; index <= 19; index += 1) {
  createImage();
} 
