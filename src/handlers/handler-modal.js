const exerciseModal = document.querySelector('.exercise-modal');
const ratingModal = document.querySelector('.rating-modal');
const form = document.querySelector('.form-rating');

form?.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.querySelector('.form-input');
  const commentInput = document.querySelector('.form-textarea');
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();
  ratingForm.reset();
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
