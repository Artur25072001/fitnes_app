import { initPage } from './service/page-init.js';

// Initialize the favorites page on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initPage(window.location.href);
});
