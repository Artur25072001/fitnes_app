import {
  renderMuscles,
  renderParts,
  renderEquipment,
} from '../renders/renders-index.js';
import { renderFavoritesPage } from '../renders/renders-favorites.js';
import { renderModal } from '../renders/renders-modal.js';
import { renderBtn } from '../renders/renders-btn.js';

const apiLink = 'https://your-energy.b.goit.study/api';

/**
 * Scroll to the exercises section on mobile devices only
 * Used after pagination to bring user back to top of exercises
 */
function scrollToExercisesOnMobile() {
  // Only scroll on mobile (screen width < 768px)
  if (window.innerWidth < 1440) {
    const exerciseSection = document.querySelector('.exercise');
    if (exerciseSection) {
      exerciseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

let filter_parts = 'bodypart';
let CURRENT_page = 1;
let totalPages = 1;

export async function fetchQuote() {
  try {
    // Query DOM elements each time to ensure we get the current elements
    const quote_text = document.querySelector('.article-quote_text');
    const quote_author = document.querySelector('.article-quote_author');

    if (!quote_text || !quote_author) {
      console.warn('[fetch.js] Quote elements not found in DOM');
      return;
    }

    const response = await fetch(`${apiLink}/quote`);
    const data = await response.json();
    quote_text.textContent = data.quote;
    quote_author.textContent = data.author;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

export async function fetchMuscles(page = CURRENT_page) {
  try {
    const response = await fetch(
      `${apiLink}/filters?filter=Muscles&page=${page}&limit=12`
    );
    const data = await response.json();
    totalPages = data.totalPages;
    renderBtn(totalPages, page);
    renderMuscles(data.results);
    scrollToExercisesOnMobile();
  } catch (error) {
    console.error('Error fetching muscles:', error);
  }
}

export async function fetchParts(page = CURRENT_page, filter = filter_parts) {
  try {
    const response = await fetch(
      `${apiLink}/exercises?&${filter}&page=${page}&limit=10`
    );
    const data = await response.json();
    totalPages = Math.ceil(data.totalPages / 10);
    renderBtn(totalPages, page);
    renderParts(data.results);
    scrollToExercisesOnMobile();
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
    renderBtn(totalPages, page);
    renderEquipment(data.results);
    scrollToExercisesOnMobile();
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

export async function fetchFavorites(id = 0) {
  try {
    const response = await fetch(`${apiLink}/exercises/${id}`);
    const data = await response.json();
    renderFavoritesPage(data);
  } catch (error) {
    console.error('Error fetching modal:', error);
  }
}
