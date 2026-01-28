document.addEventListener('DOMContentLoaded', () => {
  const exerciseModal = document.querySelector('.exercise-modal');
  const openBtn = document.querySelector('.start-link');
  const closeExerciseBtn = document.querySelector('.exercise-modal_close');
  const giveRatingBtn = document.querySelector('.modal-rating_btn');
  const ratingModal = document.querySelector('.rating-modal');
  const closeRatingBtn = document.querySelector('.rating-modal_close');
  if (openBtn && exerciseModal && closeExerciseBtn) {
    openBtn.addEventListener('click', e => {
      e.preventDefault();
      exerciseModal.classList.add('is-active');
    });

    closeExerciseBtn.addEventListener('click', () => {
      exerciseModal.classList.remove('is-active');
    });
  }
  if (giveRatingBtn && ratingModal) {
    giveRatingBtn.addEventListener('click', () => {
      exerciseModal.classList.remove('is-active');

      setTimeout(() => {
        ratingModal.classList.add('is-active');
      }, 250);
    });
  }

  if (closeRatingBtn) {
    closeRatingBtn.addEventListener('click', () => {
      ratingModal.classList.remove('is-active');
    });
  }
  window.addEventListener('click', e => {
    if (e.target === exerciseModal) exerciseModal.classList.remove('is-active');
    if (e.target === ratingModal) ratingModal.classList.remove('is-active');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      exerciseModal?.classList.remove('is-active');
      ratingModal?.classList.remove('is-active');
    }
  });
});
