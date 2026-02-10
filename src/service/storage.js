const STORAGE_KEY = 'favorites-exercises';

export function getFavorites() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  return data;
}

export function isFavorite(exercise) {
  const favorites = getFavorites();
  const isFav = favorites.some(ex => ex.id === exercise.id);
  return isFav;
}

export function addFavorite(exercise) {
  const favorites = getFavorites();
  const updatedFavorites = JSON.stringify([...favorites, exercise]);
  localStorage.setItem(STORAGE_KEY, updatedFavorites);
}

export function removeFavorite(exercise) {
  const favorites = getFavorites();
  const updatedFavorites = JSON.stringify(
    favorites.filter(ex => ex.id !== exercise.id)
  );
  localStorage.setItem(STORAGE_KEY, updatedFavorites);
}
