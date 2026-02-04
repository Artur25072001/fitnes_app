import{r as i,a as o}from"./assets/navigate-ecggzRCu.js";const a=document.querySelector(".favorites-container");function s(){a&&(i(),a.addEventListener("click",c))}function c(e){const r=e.target.closest(".parts-trash_btn");if(r){const t=r.dataset.id;o(t),i();return}const n=e.target.closest(".start-link");if(n){const t=n.dataset.id;openExerciseModal(t)}}s();
//# sourceMappingURL=favorites.js.map
