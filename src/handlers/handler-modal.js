import { openExerciseModal } from '../service/modal-utils';

// Store event listener references for cleanup
let formSubmitListener = null;
let exerciseModalClickListener = null;
let ratingModalClickListener = null;
let documentKeydownListener = null;
let ratingChangeListeners = [];

// Store current exercise ID for rating submission
let currentExerciseId = null;

/**
 * Initialize the modal handlers
 * This function attaches all event listeners for modals
 */
export function initModalHandler() {
  // Query DOM elements
  const exerciseModal = document.querySelector('.exercise-modal');
  const ratingModal = document.querySelector('.rating-modal');
  const ratingForm = document.querySelector('.form-rating');
  const ratingCount = document.getElementById('rating-count');

  // Remove old event listeners if they exist
  if (formSubmitListener && ratingForm) {
    ratingForm.removeEventListener('submit', formSubmitListener);
  }
  if (exerciseModalClickListener && exerciseModal) {
    exerciseModal.removeEventListener('click', exerciseModalClickListener);
  }
  if (ratingModalClickListener && ratingModal) {
    ratingModal.removeEventListener('click', ratingModalClickListener);
  }
  if (documentKeydownListener) {
    document.removeEventListener('keydown', documentKeydownListener);
  }
  // Remove old rating change listeners
  ratingChangeListeners.forEach(({ input, listener }) => {
    input.removeEventListener('change', listener);
  });
  ratingChangeListeners = [];

  // Attach form submit listener
  formSubmitListener = async event => {
    event.preventDefault();
    const emailInput = document.querySelector('.form-input');
    const commentInput = document.querySelector('.form-textarea');
    const ratingInput = document.querySelector('input[name="rating"]:checked');

    console.log('[DEBUG] Form submit - ratingCount:', ratingCount);
    console.log('[DEBUG] Form submit - emailInput.value:', emailInput?.value);
    console.log(
      '[DEBUG] Form submit - commentInput.value:',
      commentInput?.value
    );
    console.log('[DEBUG] Form submit - ratingInput.value:', ratingInput?.value);

    const email = emailInput.value.trim();
    const review = commentInput.value.trim();
    const rating = ratingInput ? ratingInput.value : null;
    const rate = Number(rating);
    console.log(typeof rate);

    // Validate rating is selected
    if (!rating) {
      alert('Please select a rating');
      return;
    }

    try {
      // Send POST request to rating API
      const response = await fetch(
        `https://your-energy.b.goit.study/api/exercises/${currentExerciseId}/rating`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ rate, email, review }),
        }
      );

      if (response.ok) {
        console.log('Rating submitted successfully');
        ratingForm.reset();
        alert('Rating submitted successfully');
        // Reset rating count display
        if (ratingCount) {
          ratingCount.textContent = '0.0';
        }
        ratingModal.classList.remove('is-active');
      } else {
        console.error('Failed to submit rating:', response.status);
        alert('Failed to submit rating. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      alert('An error occurred. Please try again.');
    }
  };
  if (ratingForm) {
    ratingForm.addEventListener('submit', formSubmitListener);
  }

  // Attach rating change listeners to update rating count display
  const ratingInputs = document.querySelectorAll('input[name="rating"]');

  ratingInputs.forEach(input => {
    const changeListener = () => {
      if (ratingCount) {
        ratingCount.textContent = `${input.value}.0`;
      }
    };
    input.addEventListener('change', changeListener);
    ratingChangeListeners.push({ input, listener: changeListener });
  });

  // Attach exercise modal click listener
  exerciseModalClickListener = event => {
    if (event.target.closest('.exercise-modal_close')) {
      exerciseModal.classList.remove('is-active');
    }
    if (event.target.closest('.modal-rating_btn')) {
      // Store the exercise ID before opening rating modal
      const modalContent = document.querySelector('.exercise-modal_content');
      const favoriteBtn = modalContent.querySelector('.modal-favorites_btn');
      currentExerciseId = favoriteBtn ? favoriteBtn.id : null;

      console.log(
        '[DEBUG] Opening rating modal - currentExerciseId:',
        currentExerciseId
      );

      // Reset form and rating count when modal opens
      ratingForm.reset();
      if (ratingCount) {
        ratingCount.textContent = '0.0';
      }

      // Check form state before opening rating modal
      const emailInput = document.querySelector('.form-input');
      const commentInput = document.querySelector('.form-textarea');
      const ratingInput = document.querySelector(
        'input[name="rating"]:checked'
      );
      console.log(
        '[DEBUG] Before opening rating modal - email:',
        emailInput?.value,
        'comment:',
        commentInput?.value,
        'rating:',
        ratingInput?.value
      );

      exerciseModal.classList.remove('is-active');
      setTimeout(() => {
        ratingModal.classList.add('is-active');
        // Check form state after opening rating modal
        console.log(
          '[DEBUG] After opening rating modal - email:',
          emailInput?.value,
          'comment:',
          commentInput?.value,
          'rating:',
          ratingInput?.value
        );
      }, 250);
    }
    if (event.target === exerciseModal) {
      exerciseModal.classList.remove('is-active');
    }
  };
  if (exerciseModal) {
    exerciseModal.addEventListener('click', exerciseModalClickListener);
  }

  // Attach rating modal click listener
  ratingModalClickListener = event => {
    if (
      event.target.closest('.rating-modal_close') ||
      event.target === ratingModal
    ) {
      console.log(
        '[DEBUG] Closing rating modal - currentExerciseId:',
        currentExerciseId
      );

      // Check form state before closing
      const emailInput = document.querySelector('.form-input');
      const commentInput = document.querySelector('.form-textarea');
      const ratingInput = document.querySelector(
        'input[name="rating"]:checked'
      );
      console.log(
        '[DEBUG] Before closing rating modal - email:',
        emailInput?.value,
        'comment:',
        commentInput?.value,
        'rating:',
        ratingInput?.value
      );

      // Reset form and rating count when modal closes
      ratingForm.reset();
      ratingModal.classList.remove('is-active');
      if (ratingCount) {
        ratingCount.textContent = '0.0';
      }
      let modal_Id = currentExerciseId;
      currentExerciseId = null; // Reset exercise ID
      // Reset rating count display
      setTimeout(() => {
        openExerciseModal(modal_Id);
        // Check form state after closing
        console.log(
          '[DEBUG] After closing rating modal - email:',
          emailInput?.value,
          'comment:',
          commentInput?.value,
          'rating:',
          ratingInput?.value
        );
      }, 250);
    }
  };
  if (ratingModal) {
    ratingModal.addEventListener('click', ratingModalClickListener);
  }

  // Attach document keydown listener
  documentKeydownListener = e => {
    if (e.key === 'Escape') {
      console.log('[DEBUG] Escape key pressed');

      // Check form state before closing
      const emailInput = document.querySelector('.form-input');
      const commentInput = document.querySelector('.form-textarea');
      const ratingInput = document.querySelector(
        'input[name="rating"]:checked'
      );
      console.log(
        '[DEBUG] Escape - email:',
        emailInput?.value,
        'comment:',
        commentInput?.value,
        'rating:',
        ratingInput?.value
      );

      // Reset form and rating count when Escape is pressed
      ratingForm.reset();
      exerciseModal?.classList.remove('is-active');
      ratingModal?.classList.remove('is-active');
      currentExerciseId = null;
      // Reset rating count display
      if (ratingCount) {
        ratingCount.textContent = '0.0';
      }

      // Check form state after closing
      console.log(
        '[DEBUG] Escape after - email:',
        emailInput?.value,
        'comment:',
        commentInput?.value,
        'rating:',
        ratingInput?.value
      );
    }
  };
  document.addEventListener('keydown', documentKeydownListener);
}
