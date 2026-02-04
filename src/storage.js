import { renderFavoritesPage } from './render.js';
const STORAGE_KEY = 'favorite-exercises';

export function getFavorites() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addToFavorites(exercise) {
  const favorites = getFavorites();
  if (!favorites.some(fav => fav._id === exercise._id)) {
    favorites.push(exercise);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }
}

export function removeFromFavorites(id) {
  const favorites = getFavorites();
  const filtered = favorites.filter(fav => fav._id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

  // Після видалення відразу перемальовуємо сторінку (як вимагає ТЗ)
  if (document.querySelector('.favorites-section')) {
    renderFavoritesPage();
  }
}
