import { addFavorite, removeFavorite, isFavorite } from '../service/storage.js';
import { fetchModal } from './fetch.js';

export function initFavoriteButton(exercise) {
  const favoriteButtons = document.querySelector('.modal-favorites_btn');
  if (!favoriteButtons) return;
  favoriteButtons.addEventListener('click', () => {
    const favorites = isFavorite(exercise);
    if (favorites) {
      removeFavorite(exercise);
      fetchModal(exercise.id);
    } else {
      addFavorite(exercise);
      fetchModal(exercise.id);
    }

    document.dispatchEvent(new Event('favoritesUpdated'));
    // Update button state or UI as needed
  });
}
