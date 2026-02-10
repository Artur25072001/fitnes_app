import { fetchQuote, fetchMuscles } from './service/fetch.js';
import { updateActiveLink } from './service/transition.js';
document.addEventListener('DOMContentLoaded', () => {
  updateActiveLink();
});
fetchQuote();
fetchMuscles();
