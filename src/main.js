const exercise_filter = document.querySelectorAll('.exercise-link');
const btnContainer = document.querySelector('.exercise-btn-container');
const search_form = document.querySelector('.filter-search_wrapper');
const muscles_list = document.querySelector('.exercise-muscles_list');
const equipment_list = document.querySelector('.exercise-equipment_list');
const links = document.querySelectorAll('.exercise-link');
const quote_text = document.querySelector('.article-quote_text');
const quote_author = document.querySelector('.article-quote_author');

import {
  renderModal,
  renderMuscles,
  renderParts,
  renderEquipment,
  renderBtn,
} from './render.js';

const apiLink = 'https://your-energy.b.goit.study/api';

let currentFilter = 'Muscles';
let base_category = 'abs';
let filter_parts = 'bodypart';
let CURRENT_page = 1;
let totalPages = 1;

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

links.forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('.exercise-link.active')?.classList.remove('active');
    this.classList.add('active');
  });
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
search_form.addEventListener('submit', event => {
  event.preventDefault();
  const searchInput = event.currentTarget.elements.search;
  const query = searchInput.value.trim().toLowerCase();
  if (query === '') return;
  fetchParts(CURRENT_page, `muscles=${base_category}&keyword=${query}`);
  search_form.reset();
  search_form.elements.search.blur();
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

export async function fetchQuote() {
  try {
    const response = await fetch(`${apiLink}/quote`);
    const data = await response.json();
    quote_text.textContent = data.quote;
    quote_author.textContent = data.author;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
fetchQuote();

export async function fetchMuscles(page = CURRENT_page) {
  try {
    const response = await fetch(
      `${apiLink}/filters?filter=Muscles&page=${page}&limit=12`
    );
    const data = await response.json();
    totalPages = data.totalPages;
    renderBtn(totalPages, CURRENT_page);
    renderMuscles(data.results);
  } catch (error) {
    console.error('Error fetching muscles:', error);
  }
}
fetchMuscles();

export async function fetchParts(page = CURRENT_page, filter = filter_parts) {
  try {
    const response = await fetch(
      `${apiLink}/exercises?&${filter}&page=${page}&limit=10`
    );
    const data = await response.json();
    totalPages = Math.ceil(data.totalPages / 10);
    renderBtn(totalPages, CURRENT_page);
    renderParts(data.results);
  } catch (error) {
    console.error('Error fetching parts:', error);
  }
}

export async function fetchEquipment(page = CURRENT_page) {
  try {
    const response = await fetch(
      `${apiLink}/filters?filter=Equipment&page=${page}&limit=12`
    );
    const data = await response.json();
    totalPages = data.totalPages;
    renderBtn(totalPages, CURRENT_page);
    renderEquipment(data.results);
  } catch (error) {
    console.error('Error fetching equipment:', error);
  }
}

export async function fetchModal(id) {
  try {
    const response = await fetch(`${apiLink}/exercises/${id}`);
    const data = await response.json();
    renderModal(data);
  } catch (error) {
    console.error('Error fetching modal:', error);
  }
}
