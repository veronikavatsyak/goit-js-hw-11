import { fetchData } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { text } = event.target.elements;
  if (!text.value.trim()) {
    iziToast.error({
      position: 'topRight',
      message: 'Please, fill the field',
      messageColor: 'white',
      messageSize: '16px',
      messageLineHeight: '1.5',
      backgroundColor: 'red',
      iconColor: 'white',
    });
    return;
  }

  loader.classList.remove('is-hidden');
  gallery.innerHTML = '';

  fetchData(text.value.trim())
    .then(data => {
      loader.classList.add('is-hidden');
      if (data.hits.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          messageSize: '16px',
          messageLineHeight: '1.5',
          backgroundColor: 'red',
          iconColor: 'white',
        });
      } else {
        gallery.innerHTML = createMarkup(data.hits);
        lightbox.refresh();
      }
    })
    .catch(error => {
      loader.classList.add('is-hidden');
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: error.message,
      });
    })
    .finally(() => event.target.reset());
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
