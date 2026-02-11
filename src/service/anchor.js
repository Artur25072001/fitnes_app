// src/service/anchor.js

let observer = null;

/**
 * Initialize the anchor visibility handler
 * Shows anchor button when navigation is out of view, hides when visible
 */
export function initAnchorHandler() {
  const headerNav = document.querySelector('#headerNav');
  const anchorContainer = document.querySelector('.nav-anchor_container');

  // Disconnect previous observer if it exists
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  // If elements don't exist, exit early
  if (!headerNav || !anchorContainer) {
    console.warn('Anchor elements not found');
    return;
  }

  // Initially hide the anchor
  anchorContainer.style.opacity = '0';
  anchorContainer.style.pointerEvents = 'none';

  const observerOptions = {
    root: null, // viewport
    threshold: 0, // trigger when even 1px is visible
    rootMargin: '-80px 0px 0px 0px', // account for header height
  };

  const observerCallback = entries => {
    entries.forEach(entry => {
      // If headerNav is NOT visible, show anchor
      if (!entry.isIntersecting) {
        anchorContainer.style.opacity = '1';
        anchorContainer.style.pointerEvents = 'auto';
      } else {
        // If headerNav IS visible, hide anchor
        anchorContainer.style.opacity = '0';
        anchorContainer.style.pointerEvents = 'none';
      }
    });
  };

  observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(headerNav);
}
