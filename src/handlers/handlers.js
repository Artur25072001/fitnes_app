import { smoothNavigate } from '../service/transition.js';

// Store event listener references for cleanup
let menuButtonListener = null;
let documentMenuClickListener = null;
let documentNavClickListener = null;

/**
 * Initialize the common handlers
 * This function attaches all event listeners that are shared across pages
 */
export function initHandlers() {
  // Query DOM elements
  const links = document.querySelectorAll('.exercise-link');
  const menuButton = document.getElementById('menuButton');
  const menuContent = document.getElementById('menuContent');
  const navitems = document.querySelectorAll('.nav-item');

  // Remove old event listeners if they exist
  if (menuButtonListener && menuButton) {
    menuButton.removeEventListener('click', menuButtonListener);
  }
  if (documentMenuClickListener) {
    document.removeEventListener('click', documentMenuClickListener);
  }
  if (documentNavClickListener) {
    document.removeEventListener('click', documentNavClickListener);
  }

  // Attach exercise link listeners
  links.forEach(link => {
    link.addEventListener('click', function () {
      document
        .querySelector('.exercise-link.active')
        ?.classList.remove('active');
      this.classList.add('active');
    });
  });

  // Attach menu button listener
  menuButtonListener = () => {
    const isActive = menuButton.classList.toggle('is-active');
    menuContent.classList.toggle('is-active');
    menuButton.setAttribute('aria-expanded', isActive);
  };
  if (menuButton) {
    menuButton.addEventListener('click', menuButtonListener);
  }

  // Attach document click listener for menu
  documentMenuClickListener = e => {
    if (!menuButton.contains(e.target) && !menuContent.contains(e.target)) {
      menuButton.classList.remove('is-active');
      menuContent.classList.remove('is-active');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  };
  document.addEventListener('click', documentMenuClickListener);

  // Attach document click listener for nav-link navigation
  documentNavClickListener = e => {
    const link = e.target.closest('.nav-link');
    if (link && !e.defaultPrevented) {
      e.preventDefault();
      smoothNavigate(link.getAttribute('href'));
    }
  };
  document.addEventListener('click', documentNavClickListener);
}
