import { fetchMuscles, fetchParts, fetchEquipment } from '../service/fetch.js';
import { handleStartLinkClick } from '../service/modal-utils.js';

let currentFilter = 'Muscles';
let base_category = 'abs';
let newId = 0;
let filter_parts = 'bodypart';
let CURRENT_page = 1;

let musclesListListener = null;
let equipmentListListener = null;
let searchFormListener = null;
let btnContainerListener = null;
let listContainerListener = null;
let favoritesUpdatedListener = null;

/**
 * Initialize the main page handlers
 * This function attaches all event listeners for the index page
 */
export function initMainHandler() {
  const exercise_filter = document.querySelectorAll('.exercise-link');
  const btnContainer = document.querySelector('.exercise-btn-container');
  const search_form = document.querySelector('.filter-search_wrapper');
  const muscles_list = document.querySelector('.exercise-muscles_list');
  const equipment_list = document.querySelector('.exercise-equipment_list');
  const listContainer = document.querySelector('.exercise-parts_list');
  const exerciseModal = document.querySelector('.exercise-modal');

  // Remove old event listeners if they exist
  if (musclesListListener && muscles_list) {
    muscles_list.removeEventListener('click', musclesListListener);
  }
  if (equipmentListListener && equipment_list) {
    equipment_list.removeEventListener('click', equipmentListListener);
  }
  if (searchFormListener && search_form) {
    search_form.removeEventListener('submit', searchFormListener);
  }
  if (btnContainerListener && btnContainer) {
    btnContainer.removeEventListener('click', btnContainerListener);
  }
  if (listContainerListener && listContainer) {
    listContainer.removeEventListener('click', listContainerListener);
  }
  if (favoritesUpdatedListener) {
    document.removeEventListener('favoritesUpdated', favoritesUpdatedListener);
  }

  // Attach muscles list listener
  musclesListListener = event => {
    const muscleItem = event.target.closest('.exercise-muscles_item');
    if (muscleItem) {
      let muscle_name = muscleItem
        .querySelector('.exericise-muscles_header')
        .textContent.trim()
        .toLowerCase();
      search_form.style.display = 'block';
      CURRENT_page = 1;
      currentFilter = 'Body Parts';
      base_category = muscle_name;
      filter_parts = `muscles=${muscle_name}`;
      fetchParts(CURRENT_page, filter_parts);
      exercise_filter.forEach(link => link.classList.remove('active'));
      document
        .querySelector('.exercise-link.body_parts')
        .classList.add('active');
    }
  };
  if (muscles_list) {
    muscles_list.addEventListener('click', musclesListListener);
  }

  // Attach equipment list listener
  equipmentListListener = event => {
    const equipmentItem = event.target.closest('.exercise-equipment_item');
    if (equipmentItem) {
      let equipment_name = equipmentItem
        .querySelector('.exercise-equipment_header')
        .textContent.trim()
        .toLowerCase();
      search_form.style.display = 'block';
      CURRENT_page = 1;
      currentFilter = 'Body Parts';
      base_category = equipment_name;
      filter_parts = `equipment=${equipment_name}`;
      fetchParts(CURRENT_page, filter_parts);
      exercise_filter.forEach(link => link.classList.remove('active'));
      document
        .querySelector('.exercise-link.body_parts')
        .classList.add('active');
    }
  };
  if (equipment_list) {
    equipment_list.addEventListener('click', equipmentListListener);
  }

  // Attach exercise filter listeners
  exercise_filter.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (e.target.classList.contains('muscles')) {
        search_form.style.display = 'none';
        CURRENT_page = 1;
        currentFilter = 'Muscles';
        fetchMuscles();
      } else if (e.target.classList.contains('body_parts')) {
        search_form.style.display = 'block';
        CURRENT_page = 1;
        currentFilter = 'Body Parts';
        filter_parts = 'bodypart';
        fetchParts(CURRENT_page, filter_parts);
      } else if (e.target.classList.contains('equipment')) {
        search_form.style.display = 'none';
        CURRENT_page = 1;
        currentFilter = 'Equipment';
        fetchEquipment();
      }
    });
  });

  // Attach search form listener
  searchFormListener = event => {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.search;
    const query = searchInput.value.trim().toLowerCase();
    if (query === '') return;
    fetchParts(CURRENT_page, `muscles=${base_category}&keyword=${query}`);
    search_form.reset();
    search_form.elements.search.blur();
  };
  if (search_form) {
    search_form.addEventListener('submit', searchFormListener);
  }

  // Attach button container listener
  btnContainerListener = event => {
    const button = event.target.closest('.exercise-button');
    if (button) {
      btnContainer
        .querySelector('.exercise-button.active')
        ?.classList.remove('active');
      button.classList.add('active');
      CURRENT_page = parseInt(button.textContent);
      switch (currentFilter) {
        case 'Muscles':
          fetchMuscles(CURRENT_page);
          break;
        case 'Body Parts':
          fetchParts(CURRENT_page, filter_parts);
          break;
        case 'Equipment':
          fetchEquipment(CURRENT_page);
          break;
      }
    }
  };
  if (btnContainer) {
    btnContainer.addEventListener('click', btnContainerListener);
  }

  // Attach list container listener
  listContainerListener = async event => {
    const handled = handleStartLinkClick(event);
    if (handled) {
      newId = event.target.closest('.start-link').id;
    }
  };
  if (listContainer) {
    listContainer.addEventListener('click', listContainerListener);
  }

  // Attach favorites updated listener
  favoritesUpdatedListener = () => {
    // initFavoriteButton is now called immediately inside renderModal
    // No need to re-initialize here
  };
  document.addEventListener('favoritesUpdated', favoritesUpdatedListener);
}
