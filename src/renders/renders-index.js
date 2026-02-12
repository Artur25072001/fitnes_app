import spriteUrl from '../img/sprite.svg';
import { capitalizeFirstLetter } from '../service/capitalize.js';

export function renderEquipment(equipment) {
  // Query DOM elements each time to ensure we get the current elements
  const muscles_list = document.querySelector('.exercise-muscles_list');
  const parts_list = document.querySelector('.exercise-parts_list');
  const equipment_list = document.querySelector('.exercise-equipment_list');
  const bodyParts_list = document.querySelector('.exercise-bodyparts_list');

  if (!muscles_list || !parts_list || !equipment_list || !bodyParts_list) {
    console.warn(
      '[renders-index.js] Equipment render elements not found in DOM'
    );
    return;
  }

  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  bodyParts_list.innerHTML = '';
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
  // Query DOM elements each time to ensure we get the current elements
  const muscles_list = document.querySelector('.exercise-muscles_list');
  const parts_list = document.querySelector('.exercise-parts_list');
  const equipment_list = document.querySelector('.exercise-equipment_list');
  const bodyParts_list = document.querySelector('.exercise-bodyparts_list');

  if (!muscles_list || !parts_list || !equipment_list || !bodyParts_list) {
    console.warn('[renders-index.js] Parts render elements not found in DOM');
    return;
  }

  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  bodyParts_list.innerHTML = '';
  const markup = parts
    .map(part => {
      return `
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="${spriteUrl}#icon-trash"></use>
              </svg>
              <p class="parts-rating">${part.rating}</p>
              <svg class="parts-star_svg">
                <use href="${spriteUrl}#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${part._id}" class="start-link">Start</a>
              <svg class="parts-arrow-svg">
                <use href="${spriteUrl}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
          <div class="parts-name_container">
            <div class="parts-run_container">
              <svg class="parts-svg_run">
                <use href="${spriteUrl}#icon-run"></use>
              </svg>
            </div>
            <h3 class="parts-name">${capitalizeFirstLetter(part.name)}</h3>
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
  // Query DOM elements each time to ensure we get the current elements
  const muscles_list = document.querySelector('.exercise-muscles_list');
  const parts_list = document.querySelector('.exercise-parts_list');
  const equipment_list = document.querySelector('.exercise-equipment_list');
  const bodyParts_list = document.querySelector('.exercise-bodyparts_list');

  if (!muscles_list || !parts_list || !equipment_list || !bodyParts_list) {
    console.warn('[renders-index.js] Muscles render elements not found in DOM');
    return;
  }

  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  bodyParts_list.innerHTML = '';
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

export function renderBodyParts(bodyParts) {
  // Query DOM elements each time to ensure we get the current elements
  const muscles_list = document.querySelector('.exercise-muscles_list');
  const parts_list = document.querySelector('.exercise-parts_list');
  const equipment_list = document.querySelector('.exercise-equipment_list');
  const bodyParts_list = document.querySelector('.exercise-bodyparts_list');

  if (!muscles_list || !parts_list || !equipment_list || !bodyParts_list) {
    console.warn('[renders-index.js] Muscles render elements not found in DOM');
    return;
  }

  muscles_list.innerHTML = '';
  equipment_list.innerHTML = '';
  parts_list.innerHTML = '';
  bodyParts_list.innerHTML = '';
  const markup = bodyParts
    .map(bodyPart => {
      return `
        <li class="exercise-bodyparts_item">
            <img src="${bodyPart.imgURL}" alt="${bodyPart.name}" class="exercise-bodyparts_img" />
            <div class="exercise-bodyparts_overlay">
            <h3 class="exercise-bodyparts_header">${bodyPart.name}</h3>
            <p class="exercise-bodyparts_text">${bodyPart.filter}</p></div>

        </li>
      `;
    })
    .join('');
  bodyParts_list.innerHTML = markup;
}
