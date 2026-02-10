const exercise_filter = document.querySelectorAll('.exercise-link');
const btnContainer = document.querySelector('.exercise-btn-container');
const search_form = document.querySelector('.filter-search_wrapper');
const muscles_list = document.querySelector('.exercise-muscles_list');
const equipment_list = document.querySelector('.exercise-equipment_list');
const listContainer = document.querySelector('.exercise-parts_list');
const exerciseModal = document.querySelector('.exercise-modal');

import {
  fetchModal,
  fetchMuscles,
  fetchParts,
  fetchEquipment,
} from '../service/fetch.js';
import { initFavoriteButton } from '../service/favorite-btn.js';

let currentFilter = 'Muscles';
let base_category = 'abs';
let newId = 0;
let filter_parts = 'bodypart';
let CURRENT_page = 1;

muscles_list.addEventListener('click', event => {
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
    document.querySelector('.exercise-link.body_parts').classList.add('active');
  }
});

equipment_list.addEventListener('click', event => {
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
    document.querySelector('.exercise-link.body_parts').classList.add('active');
  }
});

exercise_filter.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('muscles')) {
      search_form.style.display = 'none';
      CURRENT_page = 1;
      currentFilter = 'Muscles';
      fetchMuscles();
    } else if (e.target.classList.contains('body_parts')) {
      console.log(filter_parts);
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

search_form.addEventListener('submit', event => {
  event.preventDefault();
  const searchInput = event.currentTarget.elements.search;
  const query = searchInput.value.trim().toLowerCase();
  if (query === '') return;
  fetchParts(CURRENT_page, `muscles=${base_category}&keyword=${query}`);
  search_form.reset();
  search_form.elements.search.blur();
});

btnContainer.addEventListener('click', event => {
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
});

listContainer?.addEventListener('click', async event => {
  const target = event.target.closest('.start-link');
  if (target) {
    event.preventDefault();
    const startId = target.id;
    exerciseModal.classList.add('is-active');
    fetchModal(startId);
    setTimeout(() => {
      initFavoriteButton({ id: startId });
    }, 1000);
    newId = startId;
  }
});

document.addEventListener('favoritesUpdated', () => {
  setTimeout(() => {
    initFavoriteButton({ id: newId });
  }, 1000);
});
