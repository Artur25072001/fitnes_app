import { initPage } from './service/page-init.js';

// Initialize the index page on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initPage(window.location.href);
});
