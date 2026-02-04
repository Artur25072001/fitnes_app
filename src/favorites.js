import { removeFromFavorites } from './storage.js';
const favoritesContainer = document.querySelector('.favorites-container');
import { renderFavoritesPage } from './render.js';

function initFavorites() {
  // 1. Перевіряємо, чи ми на сторінці Favorites (чи є контейнер)
  if (!favoritesContainer) return;

  // 2. Рендеримо сторінку вперше
  renderFavoritesPage();

  // 3. Встановлюємо ОДИН слухач на весь контейнер (Делегування)
  favoritesContainer.addEventListener('click', handleContainerClick);
}

function handleContainerClick(event) {
  // Клік по кошику
  const trashBtn = event.target.closest('.parts-trash_btn');
  if (trashBtn) {
    const id = trashBtn.dataset.id;
    removeFromFavorites(id);
    renderFavoritesPage(); // Перемальовуємо, щоб побачити зміни або "Empty" заглушку
    return;
  }

  // Клік по кнопці Start
  const startBtn = event.target.closest('.start-link');
  if (startBtn) {
    const id = startBtn.dataset.id;
    openExerciseModal(id); // Ця функція має відкрити модалку
  }
}

// ЗАПУСК: Викликаємо ініціалізацію при завантаженні файлу
initFavorites();
