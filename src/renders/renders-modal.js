import { isFavorite } from '../service/storage.js';
import { initFavoriteButton } from '../service/favorite-btn.js';
import spriteUrl from '../img/sprite.svg';
import { capitalizeFirstLetter } from '../service/capitalize.js';

export function renderModal(modalData) {
  // Query DOM element each time to ensure we get the current element
  const modal_container = document.querySelector('.exercise-modal_content');

  if (!modal_container) {
    console.warn('[renders-modal.js] Modal container not found in DOM');
    return;
  }

  modal_container.innerHTML = '';
  const favorite = isFavorite({ id: modalData._id });
  const markup = `
      <span class="exercise-modal_close">&times;</span>
        <div class="modal-image_container">
          <img src="${modalData.gifUrl}" alt="${modalData.name}" /></div>
        <div class="modal-logo_container">
          <h2 class="modal-logo_header">${capitalizeFirstLetter(modalData.name)}</h2>
          <div class="modal-rating_container">
            <p class="modal-rating">${modalData.rating}</p>
            <svg class="modal-rating_svg">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
          </div>
        </div>
        <ul class="modal-info_list">
          <li class="modal-info_item">
            <h3 class="modal-info_header">Target</h3>
            <p class="modal-info_text">${modalData.target}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Body Part</h3>
            <p class="modal-info_text">${modalData.bodyPart}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Equipment</h3>
            <p class="modal-info_text">${modalData.equipment}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Popular</h3>
            <p class="modal-info_text">${modalData.popularity}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Burned Calories</h3>
            <p class="modal-info_text">${modalData.burnedCalories}/${modalData.time} min</p>
          </li>
        </ul>
        <div class="modal-action_container">
          <p class="modal-description">
            ${modalData.description}
          </p>
          <div class="modal-btn_container">
            <button id="${modalData._id}" class="modal-favorites_btn ${isFavorite({ id: modalData._id }) ? 'favorited' : ''}">
              ${favorite ? 'Remove from favorites' : 'Add to favorites'}
              <svg class="modal-favorites_svg">
                <use href="${spriteUrl}#${favorite ? 'icon-trash' : 'icon-heart1'}"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;

  modal_container.innerHTML = markup;

  // Initialize the favorite button immediately after rendering
  initFavoriteButton({ id: modalData._id });
}
