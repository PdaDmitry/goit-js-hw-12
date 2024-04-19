import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// import axios from 'axios';

import { ImageServer } from './js/pixabay-api';
import { createGalleryMarkup, renderListGallery } from './js/render-functions'; //renderListGallery

const galleryMarkup = createGalleryMarkup();

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', galleryMarkup);

const formEl = document.querySelector('form');

const loader = document.querySelector('.loader');
loader.classList.add('is-hidden');

const loaderSecond = document.querySelector('[data-loader]');
loaderSecond.classList.add('is-hidden');

const gallery = document.querySelector('.gallery');

const input = document.querySelector('input');

const button = document.querySelector('button');

const btnLoad = document.querySelector('.btn-load');
btnLoad.classList.add('is-hidden');

const images = new ImageServer();
const show = new SimpleLightbox('.gallery a');

function showIziToast(text) {
  return iziToast.show({
    message: text,
    messageSize: '16px',
    messageWeight: '400',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    position: 'topRight',
    iconUrl: './img/error.svg',
  });
}

let page = 1;
let total_pages;
let q;

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  gallery.innerHTML = '';

  q = e.target.elements.picture.value.trim();
  if (!q) {
    e.target.reset();
    btnLoad.classList.add('is-hidden');
    showIziToast('The form field must be filled in!');
    return;
  }
  // console.log(images.pageSize);
  // loader.classList.remove('is-hidden');
  try {
    const data = await images.getImages(q);
    console.log(data);
    if (data.hits.length === 0) {
      btnLoad.classList.add('is-hidden');
      showIziToast(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      console.log(data.hits);
      const galleryHtml = renderListGallery(data.hits);
      gallery.innerHTML = galleryHtml;
      btnLoad.classList.remove('is-hidden');

      show.refresh();
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add('is-hidden');
    e.target.reset();
  }
});

// btnLoad.addEventListener();
