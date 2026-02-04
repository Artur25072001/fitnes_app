const muscles_list = document.querySelector('.exercise-muscles_list');
const parts_list = document.querySelector('.exercise-parts_list');
const equipment_list = document.querySelector('.exercise-equipment_list');
const modal_container = document.querySelector('.exercise-modal_content');
const btn_container = document.querySelector('.exercise-btn-container');
const favoritesContainer = document.querySelector('.favorites-container');
import { getFavorites } from './storage.js';

export function renderFavoritesPage() {
  if (!favoritesContainer) return; // Захист від помилок, якщо ми не на тій сторінці

  const favorites = getFavorites();

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = `
      <div class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet. To get started, go to the exercises catalog and choose the ones you like.</p>
      </div>`;
    return;
  }

  const markup = favorites
    .map(
      part => `
    <li class="exercise-parts_item" id="card-${part._id}">
      <div class="parts-upper_container">
        <div class="parts-rating_container">
          <p class="parts-type">WORKOUT</p>
          <button class="parts-trash_btn" data-id="${part._id}" aria-label="Remove from favorites">
            <svg class="parts-trash_svg" width="16" height="16">
              <use href="../img/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <div class="parts-start_container">
          <button class="start-link" data-id="${part._id}">
            Start
            <img src="../img/arrow-right.png" alt="arrow" class="start-img" />
          </button>
        </div>
      </div>
      <div class="parts-name_container">
        <div class="parts-run_container">
           <svg class="parts-svg_run" width="14" height="14"><use href="../img/sprite.svg#icon-run"></use></svg>
        </div>
        <h3 class="parts-name">${part.name}</h3>
      </div>
      <ul class="parts-information-list">
        <li class="parts-information_item">
          <h3 class="parts-information_header">Burned calories:</h3>
          <p class="parts-information_text">${part.burnedCalories} / 3 min</p>
        </li>
        <li class="parts-information_item">
          <h3 class="parts-information_header">Body part:</h3>
          <p class="parts-information_text">${part.bodyPart}</p>
        </li>
        <li class="parts-information_item">
          <h3 class="parts-information_header">Target:</h3>
          <p class="parts-information_text">${part.target}</p>
        </li>
      </ul>
    </li>`
    )
    .join('');

  favoritesContainer.innerHTML = markup;
}

export function renderEquipment(equipment) {
  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  const markup = equipment
    .map(equipment => {
      return `
        <li class="exercise-equipment_item">
            <img src="${equipment.imgURL}" alt="${equipment.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${equipment.name}</h3>
            <p class="exercise-equipment_text">${equipment.filter}</p></div>
          
        </li>
      `;
    })
    .join('');
  equipment_list.insertAdjacentHTML('beforeend', markup);
}

export function renderParts(parts) {
  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  const markup = parts
    .map(part => {
      return `
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${part.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${part._id}" class="start-link">Start</a>
              <img
                src="../img/arrow-right.png"
                alt="arrow-right"
                class="start-img"
              />
            </div>
          </div>
          <div class="parts-name_container">
            <div class="parts-run_container">
              <svg class="parts-svg_run">
                <use href="../img/sprite.svg#icon-run"></use>
              </svg>
            </div>
            <h3 class="parts-name">${part.name}</h3>
          </div>
          <ul class="parts-information-list">
            <li class="parts-information_item">
              <h3 class="parts-information_header">Burned calories:</h3>
              <p class="parts-information_text">&nbsp;$${part.burnedCalories}/3 min</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Body part:</h3>
              <p class="parts-information_text">&nbsp;${part.bodyPart}</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Target:</h3>
              <p class="parts-information_text">&nbsp;${part.target}</p>
            </li>
          </ul>
        </li>
      `;
    })
    .join('');
  parts_list.innerHTML = markup;
}

export function renderMuscles(muscles) {
  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  const markup = muscles
    .map(muscle => {
      return `
        <li class="exercise-muscles_item">
            <img src="${muscle.imgURL}" alt="${muscle.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${muscle.name}</h3>
            <p class="exercise-muscles_text">${muscle.filter}</p></div>
            
        </li>
      `;
    })
    .join('');
  muscles_list.innerHTML = markup;
}

export function renderModal(modalData) {
  modal_container.innerHTML = '';
  const markup = `
      <span class="exercise-modal_close">&times;</span>
        <div class="modal-image_container">
          <img src="${modalData.gifUrl}" alt="${modalData.name}" /></div>
        <div class="modal-logo_container">
          <h2 class="modal-logo_header">${modalData.name}</h2>
          <div class="modal-rating_container">
            <p class="modal-rating">${modalData.rating}</p>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
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
            <button id="${modalData._id}" class="modal-favorites_btn">
              Add to favorites
              <svg class="modal-favorites_svg">
                <use href="../img/sprite.svg#icon-heart1"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;

  modal_container.innerHTML = markup;
}

export function renderBtn(totalPages, currentPage) {
  if (!btn_container) return;

  const maxButtonsToShow = 3;
  let startPage, endPage;

  if (totalPages <= maxButtonsToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let half = Math.floor(maxButtonsToShow / 2);
    startPage = currentPage - half;
    endPage = currentPage + half;
    if (startPage <= 1) {
      startPage = 1;
      endPage = maxButtonsToShow;
    }
    if (endPage >= totalPages) {
      startPage = totalPages - maxButtonsToShow + 1;
      endPage = totalPages;
    }
  }

  let markup = '';
  if (startPage > 1) {
    markup += `<button class="exercise-button" data-page="1">1</button><span>...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    const activeClass = i === Number(currentPage) ? 'active' : '';
    markup += `<button class="exercise-button ${activeClass}">${i}</button>`;
  }
  if (endPage < totalPages) {
    markup += `<span>...</span><button class="exercise-button" data-page="${totalPages}">${totalPages}</button>`;
  }

  btn_container.innerHTML = markup;
}
