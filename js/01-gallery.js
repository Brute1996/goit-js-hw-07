import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')


const createGalleryItmesMarkup = (options) => {
  const galleryItemsMarkup = options.map(({ description, original, preview }) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
    `
  }).join('')
    
  galleryBox.insertAdjacentHTML('afterbegin', galleryItemsMarkup)
  
  createModalWithOriginalImg()
  
}

const createModalWithOriginalImg = () => {

  galleryBox.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (event.target.nodeName !== 'IMG') {
      return
    }

    const originalImgSrc = event.target.dataset.source;
    const imgModalMarkup = `
    <img width="1400" height="900" src="${originalImgSrc}">
    ` 
    const imgModalOptions = {
      onShow: (createdModalImg) => {
        document.addEventListener('keydown', closeModalImgByEsc)
      },
      onClose: (createdModalImg) => {
        document.removeEventListener('keydown', closeModalImgByEsc)
      }
    }

    const closeModalImgByEsc = (e) => {
      if (e.code === 'Escape') {
        createdModalImg.close()
      }
    }

    const createdModalImg = basicLightbox.create(imgModalMarkup,imgModalOptions)

    createdModalImg.show()
  }) 
}



createGalleryItmesMarkup(galleryItems)

