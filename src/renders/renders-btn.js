import spriteUrl from '../img/sprite.svg';

export function renderBtn(totalPages, currentPage) {
  // Query DOM element each time to ensure we get the current element
  const btn_container = document.querySelector('.exercise-btn-container');

  if (!btn_container) {
    console.warn('[renders-btn.js] Button container not found in DOM');
    return;
  }

  const maxButtonsToShow = 3;
  let startPage, endPage;

  if (totalPages <= maxButtonsToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let half = Math.floor(maxButtonsToShow / 2);
    startPage = currentPage - half;
    endPage = currentPage + half;
    if (startPage <= 1) {
      startPage = 1;
      endPage = maxButtonsToShow;
    }
    if (endPage >= totalPages) {
      startPage = totalPages - maxButtonsToShow + 1;
      endPage = totalPages;
    }
  }

  let markup = '';

  // First page button (<<)
  const firstPageDisabled = currentPage === 1 ? 'disabled' : '';
  markup += `
    <button class="exercise-button nav-button" data-page="1" ${firstPageDisabled}>
      <svg class="test-svg">
        <use href="${spriteUrl}#icon-two-arrow-left"></use>
      </svg>
    </button>
  `;

  // Previous page button (<)
  const prevPageDisabled = currentPage === 1 ? 'disabled' : '';
  const prevPage = Math.max(1, currentPage - 1);
  markup += `
    <button class="exercise-button nav-button" data-page="${prevPage}" ${prevPageDisabled}>
      <svg class="test-svg">
        <use href="${spriteUrl}#icon-one-arrow-left"></use>
      </svg>
    </button>
  `;

  // Page numbers
  if (startPage > 1) {
    markup += `<button class="exercise-button" data-page="1">1</button><span>...</span>`;
  }

  for (let i = startPage; i <= endPage; i++) {
    const activeClass = i === Number(currentPage) ? 'active' : '';
    markup += `<button class="exercise-button ${activeClass}">${i}</button>`;
  }
  if (endPage < totalPages) {
    markup += `<span>...</span><button class="exercise-button" data-page="${totalPages}">${totalPages}</button>`;
  }

  // Next page button (>)
  const nextPageDisabled = currentPage === totalPages ? 'disabled' : '';
  const nextPage = Math.min(totalPages, currentPage + 1);
  markup += `
    <button class="exercise-button nav-button" data-page="${nextPage}" ${nextPageDisabled}>
      <svg class="test-svg">
        <use href="${spriteUrl}#icon-one-arrow-right"></use>
      </svg>
    </button>
  `;

  // Last page button (>>)
  const lastPageDisabled = currentPage === totalPages ? 'disabled' : '';
  markup += `
    <button class="exercise-button nav-button" data-page="${totalPages}" ${lastPageDisabled}>
      <svg class="test-svg">
        <use href="${spriteUrl}#icon-two-arrow-right"></use>
      </svg>
    </button>
  `;

  btn_container.innerHTML = markup;
}
