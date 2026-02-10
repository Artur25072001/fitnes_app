const btn_container = document.querySelector('.exercise-btn-container');
export function renderBtn(totalPages, currentPage) {
  if (!btn_container) return;

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

  btn_container.innerHTML = markup;
}
