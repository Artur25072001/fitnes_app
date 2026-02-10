const favoriteLink = document.querySelector('.nav-link-favorites');

import { fetchFavorites } from '../service/fetch.js';
import { renderFavoritesPage } from '../renders/renders-favorites.js';
import { getFavorites } from '../service/storage.js';
import { removeFavorite } from '../service/storage.js';
import { handleStartLinkClick } from '../service/modal-utils.js';

let favoritesUpdatedListener = null;
let favoritesContainerListener = null;

/**
 * Handle trash icon click - remove favorite exercise
 */
function handleTrashClick(event) {
  const trashIcon = event.target.closest('.parts-trash_svg');
  if (!trashIcon) return;

  event.stopPropagation();
  event.preventDefault();

  const exerciseId = trashIcon.dataset.trashId;
  console.log('Trash icon clicked for exercise:', exerciseId);

  const favoritesContainer = document.querySelector('.favorites-wrapper');
  const exerciseItem = favoritesContainer.querySelector(
    `[data-exercise-id="${exerciseId}"]`
  );

  if (exerciseItem) {
    exerciseItem.remove();
    removeFavorite({ id: exerciseId });
    document.dispatchEvent(new Event('favoritesUpdated'));
  }
}

/**
 * Load and render all favorites from localStorage
 */
export async function loadFavorites() {
  const favorites = getFavorites();

  const favoritesContainer = document.querySelector('.favorites-wrapper');
  if (favoritesContainer) {
    favoritesContainer.innerHTML = ''; // Clear current content
  }

  if (favorites.length === 0) {
    renderFavoritesPage(0);
    return;
  }

  // Fetch and render each favorite exercise
  for (const fav of favorites) {
    try {
      await fetchFavorites(fav.id);
    } catch (error) {
      console.error('Error fetching favorite:', fav.id, error);
    }
  }
}

export function initFavoritesHandler() {
  const favoritesContainer = document.querySelector('.favorites-wrapper');

  // Remove old event listeners if they exist
  if (favoritesUpdatedListener) {
    document.removeEventListener('favoritesUpdated', favoritesUpdatedListener);
  }
  if (favoritesContainerListener && favoritesContainer) {
    favoritesContainer.removeEventListener('click', favoritesContainerListener);
  }

  // Load favorites when the page initializes
  loadFavorites();

  favoriteLink.addEventListener('click', async () => {
    // Favorites will be loaded by the page initialization
    // This click handler is mainly for navigation
  });

  // Listen for favorites updates to refresh the page
  favoritesUpdatedListener = () => {
    loadFavorites();
  };
  document.addEventListener('favoritesUpdated', favoritesUpdatedListener);

  // Attach event delegation listener for favorites container
  // This handles both trash icon clicks and start link clicks
  favoritesContainerListener = event => {
    handleTrashClick(event);
    handleStartLinkClick(event);
  };

  if (favoritesContainer) {
    favoritesContainer.addEventListener('click', favoritesContainerListener);
  }
}
