import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  initializeLightbox,
  refreshLightbox,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formSearch = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.form-search-input');
const loader = document.querySelector('.loader');

initializeLightbox();

formSearch.addEventListener('submit', async e => {
  e.preventDefault();
  hideLoader();
  const queryValue = searchInput.value.trim();

  clearGallery();
  showLoader();

  getImagesByQuery(queryValue)
    .then(data => {
      hideLoader();

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      gallery.innerHTML = ('beforeend', createGallery(data.hits));

      refreshLightbox();

      formSearch.reset();
    })
    .catch(err => {
      hideLoader();
      console.log(err);
    });
});
