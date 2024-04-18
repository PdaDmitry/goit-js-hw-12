import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

// import { ImageServer } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions'; //renderListGallery

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
