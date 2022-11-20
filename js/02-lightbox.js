import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector('.gallery')



const galleryItemsMarkup = galleryItems.map(({ description, original, preview }) => {
  return `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join('')
  
galleryBox.insertAdjacentHTML('afterbegin', galleryItemsMarkup)


const options = {
      captionsData: 'alt',
      captionDelay: 250,
  }
const lightbox = new SimpleLightbox('.gallery a', options);




