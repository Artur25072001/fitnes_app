const favoriteLink = document.querySelector('.nav-link-favorites');
// const trashIcon = document.querySelector('.parts-trash_svg');
import { fetchFavorites } from '../service/fetch.js';
import { renderFavoritesPage } from '../renders/renders-favorites.js';
import { getFavorites } from '../service/storage.js';

// trashIcon.addEventListener('click', () => {
//   console.log('Trash icon clicked');
// });

export function initFavoritesHandler() {
  console.log('Initializing favorites handler');
  favoriteLink.addEventListener('click', () => {
    const favorites = getFavorites();
    setTimeout(() => {
      if (favorites.length === 0) {
        renderFavoritesPage(0);
        return;
      }
    }, 1000);

    for (const fav of favorites) {
      fetchFavorites(fav.id);
    }
  });
}
