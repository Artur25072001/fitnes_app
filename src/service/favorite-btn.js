import { addFavorite, removeFavorite, isFavorite } from '../service/storage.js';
import { fetchModal } from './fetch.js';

export function initFavoriteButton(exercise) {
  const favoriteButtons = document.querySelector('.modal-favorites_btn');
  if (!favoriteButtons) return;
  console.log('Initializing favorite button for exercise:', exercise);
  favoriteButtons.addEventListener('click', () => {
    console.log('Favorite button clicked for exercise:', exercise);
    const favorites = isFavorite(exercise);
    if (favorites) {
      console.log('Removing from favorites:', exercise);
      removeFavorite(exercise);
      fetchModal(exercise.id);
    }
    //
    else {
      console.log('Adding to favorites:', exercise);
      addFavorite(exercise);
      fetchModal(exercise.id);
    }

    document.dispatchEvent(new Event('favoritesUpdated'));
    // Update button state or UI as needed
  });
}
