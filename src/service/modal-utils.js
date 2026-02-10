import { fetchModal } from './fetch.js';

export function openExerciseModal(exerciseId) {
  const exerciseModal = document.querySelector('.exercise-modal');
  console.log('Opening modal for exercise:', exerciseId);
  console.log('Exercise modal found:', !!exerciseModal);

  if (exerciseModal) {
    exerciseModal.classList.add('is-active');
    fetchModal(exerciseId);
  }
}

export function handleStartLinkClick(event) {
  const startLink = event.target.closest('.start-link');
  if (!startLink) return false;

  event.preventDefault();
  event.stopPropagation();

  const exerciseId = startLink.id;
  console.log('Start link clicked for exercise:', exerciseId);

  openExerciseModal(exerciseId);
  return true;
}
