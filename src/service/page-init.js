import { updateActiveLink } from './transition.js';

/**
 * Page initializers object - maps page names to their initialization functions
 */
export const pageInitializers = {
  /**
   * Initialize the index/home page
   */
  'index.html': async () => {
    // Import and execute fetch functions
    const { fetchQuote, fetchMuscles } = await import('./fetch.js');
    const { initMainHandler } = await import('../handlers/handler-main.js');
    initMainHandler();
    const { initModalHandler } = await import('../handlers/handler-modal.js');
    initModalHandler();
    const { initHandlers } = await import('../handlers/handlers.js');
    initHandlers();
    const { initFooterHandler } = await import('../handlers/handler-footer.js');
    initFooterHandler();

    updateActiveLink();
    fetchQuote();
    fetchMuscles();
  },

  /**
   * Initialize the favorites page
   */
  'favorites.html': async () => {
    const { fetchQuote } = await import('./fetch.js');
    const { initFavoritesHandler } =
      await import('../handlers/handler-favorites.js');
    const { initModalHandler } = await import('../handlers/handler-modal.js');
    initModalHandler();
    const { initHandlers } = await import('../handlers/handlers.js');
    initHandlers();
    const { initFooterHandler } = await import('../handlers/handler-footer.js');
    initFooterHandler();
    updateActiveLink();
    fetchQuote();
    initFavoritesHandler();
  },
};

/**
 * Initialize a page based on the current URL
 * @param {string} url - The URL of the page to initialize
 */
export async function initPage(url) {
  const urlPath = new URL(url, window.location.origin).pathname;
  const pageName = urlPath.split('/').pop() || 'index.html';

  console.log(`Initializing page: ${pageName}`);
  const initializer = pageInitializers[pageName];

  if (initializer) {
    try {
      await initializer();
    } catch (error) {
      console.error(`Error initializing page ${pageName}:`, error);
    }
  } else {
    console.warn(`No initializer found for page: ${pageName}`);
  }
}

/**
 * Get the current page name from the URL
 * @returns {string} The current page name
 */
export function getCurrentPageName() {
  const currentPath = window.location.pathname;
  return currentPath.split('/').pop() || 'index.html';
}
