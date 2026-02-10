export function renderFavoritesPage(fav) {
  const favoritesContainer = document.querySelector('.favorites-wrapper');
  if (!favoritesContainer) return;
  if (fav === 0) {
    favoritesContainer.innerHTML = `
      <div class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet. To get started, go to the exercises catalog and choose the ones you like.</p>
      </div>`;
    return;
  }

  const markup = `<li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${fav.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${fav._id}" class="start-link">Start</a>
              <img
                src="../img/arrow-right.png"
                alt="arrow-right"
                class="start-img"
              />
            </div>
          </div>
          <div class="parts-name_container">
            <div class="parts-run_container">
              <svg class="parts-svg_run">
                <use href="../img/sprite.svg#icon-run"></use>
              </svg>
            </div>
            <h3 class="parts-name">${fav.name}</h3>
          </div>
          <ul class="parts-information-list">
            <li class="parts-information_item">
              <h3 class="parts-information_header">Burned calories:</h3>
              <p class="parts-information_text">&nbsp;$${fav.burnedCalories}/3 min</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Body part:</h3>
              <p class="parts-information_text">&nbsp;${fav.bodyPart}</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Target:</h3>
              <p class="parts-information_text">&nbsp;${fav.target}</p>
            </li>
          </ul>
        </li>
      `;

  favoritesContainer.insertAdjacentHTML('beforeend', markup);
}
