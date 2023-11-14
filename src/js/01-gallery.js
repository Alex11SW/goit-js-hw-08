
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from 'simplelightbox';

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const list = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>
   `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join("");
list.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
});
