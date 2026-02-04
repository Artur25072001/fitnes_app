const exerciseModal = document.querySelector('.exercise-modal');
const ratingModal = document.querySelector('.rating-modal');
const listContainer = document.querySelector('.exercise-parts_list');
const form = document.querySelector('.form-rating');

import { fetchModal } from './main.js';
import { addToFavorites } from './storage.js';

form?.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.querySelector('.form-input');
  const commentInput = document.querySelector('.form-textarea');
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  ratingForm.reset();
});

listContainer?.addEventListener('click', event => {
  const target = event.target.closest('.start-link');
  if (target) {
    event.preventDefault();
    const startId = target.id;
    exerciseModal.classList.add('is-active');
    fetchModal(startId);
  }
});

exerciseModal?.addEventListener('click', event => {
  if (event.target.closest('.exercise-modal_close')) {
    exerciseModal.classList.remove('is-active');
  }
  if (event.target.closest('.modal-rating_btn')) {
    exerciseModal.classList.remove('is-active');
    setTimeout(() => {
      ratingModal.classList.add('is-active');
    }, 250);
  }
  if (event.target === exerciseModal) {
    exerciseModal.classList.remove('is-active');
  }
  const favBtn = event.target.closest('.modal-favorites_btn');
  console.log('Favorite button clicked:', favBtn);
  if (favBtn) {
    addToFavorites(currentOpenedExercise);
    console.log('Success adding!');
  }
});

ratingModal?.addEventListener('click', event => {
  if (
    event.target.closest('.rating-modal_close') ||
    event.target === ratingModal
  ) {
    ratingModal.classList.remove('is-active');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    exerciseModal?.classList.remove('is-active');
    ratingModal?.classList.remove('is-active');
  }
});
