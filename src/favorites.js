import { fetchQuote } from './service/fetch.js';
import { updateActiveLink } from './service/transition.js';
import { initFavoritesHandler } from './handlers/handler-favorites.js';

initFavoritesHandler();
fetchQuote();
document.addEventListener('DOMContentLoaded', () => {
  updateActiveLink();
  console.log('DOM fully loaded and parsed');
});
