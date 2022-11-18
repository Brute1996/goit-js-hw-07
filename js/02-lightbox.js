import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')


const createGalleryItmesMarkup = (options) => {
  const galleryItemsMarkup = options.map(({ description, original, preview }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
  }).join('')
    
  galleryBox.insertAdjacentHTML('afterbegin', galleryItemsMarkup)
  
  joinLightboxLib()
  
}

const joinLightboxLib = () => {
    const options = {
        captionsData: 'alt',
        captionDelay: 250,
    }
    const lightbox = new SimpleLightbox('.gallery a', options);

}

createGalleryItmesMarkup(galleryItems)



