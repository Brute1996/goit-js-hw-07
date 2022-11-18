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

  galleryBox.onclick = (event) => {
    event.preventDefault()
    

    const originalImgSrc = event.target.dataset.source;
    
    const createdModalImg = basicLightbox.create(`
    <img width="1400" height="900" src="${originalImgSrc}">
    `)

    if (event.target.nodeName !== 'IMG') {
      return
    }
    createdModalImg.show()
    

    // closed modal by esc

    const closeModalImgByEsc = (e) => {
      if (e.code === 'Escape') {
        createdModalImg.close()
        window.removeEventListener('keydown', closeModalImgByEsc)
      }
    }
    
    if (createdModalImg.visible()) {
      window.addEventListener('keydown', closeModalImgByEsc)
    } 
    
    
  }
  
}



createGalleryItmesMarkup(galleryItems)

