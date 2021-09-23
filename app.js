const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]

const gallery = document.querySelector('.gallery')
const modalWindow = document.querySelector('div.lightbox')
const modalImg = document.querySelector('.lightbox__image')
const button = document.querySelector('button[data-action="close-lightbox"]')
const clickWindow = document.querySelector('div.lightbox__overlay')

gallery.addEventListener('click', onModal)
button.addEventListener('click', clossedButton)
clickWindow.addEventListener('click', clossedWindow)
document.addEventListener('keyup', keyEsc)

function galleryPush(element) {
  const imgArray = element
    .map(({ preview, original }) => {
      return `
<li class="gallery__item">
<a
class="gallery__link"

  >
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="Tulips"
  />
</a>
</li>`
    })
    .join('')

  gallery.insertAdjacentHTML('beforeend', imgArray)
}

function onModal(event) {
  const examination = event.target.classList.contains('gallery__image')
  if (examination) {
    modalWindow.classList.add('is-open')

    modalImg.src = event.target.dataset.source
  }
}

function clossedButton() {
  modalWindow.classList.remove('is-open')
  modalImg.src = ''
}

function clossedWindow() {
  modalWindow.classList.remove('is-open')
  modalImg.src = ''
}
function keyEsc(event) {
  if (event.key === 'Escape') {
    modalWindow.classList.remove('is-open')
    modalImg.src = ''
  }

  if (event.key === 'ArrowRight') {
  }
}

galleryPush(galleryItems)
