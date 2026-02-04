(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();const $="favorite-exercises";function S(){const e=localStorage.getItem($);return e?JSON.parse(e):[]}function I(e){const t=S();t.some(s=>s._id===e._id)||(t.push(e),localStorage.setItem($,JSON.stringify(t)))}function z(e){const s=S().filter(r=>r._id!==e);localStorage.setItem($,JSON.stringify(s)),document.querySelector(".favorites-section")&&A()}const h=document.querySelector(".exercise-muscles_list"),_=document.querySelector(".exercise-parts_list"),y=document.querySelector(".exercise-equipment_list"),M=document.querySelector(".exercise-modal_content"),C=document.querySelector(".exercise-btn-container"),L=document.querySelector(".favorites-container");function A(){if(!L)return;const e=S();if(e.length===0){L.innerHTML=`
      <div class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet. To get started, go to the exercises catalog and choose the ones you like.</p>
      </div>`;return}const t=e.map(s=>`
    <li class="exercise-parts_item" id="card-${s._id}">
      <div class="parts-upper_container">
        <div class="parts-rating_container">
          <p class="parts-type">WORKOUT</p>
          <button class="parts-trash_btn" data-id="${s._id}" aria-label="Remove from favorites">
            <svg class="parts-trash_svg" width="16" height="16">
              <use href="../img/sprite.svg#icon-trash"></use>
            </svg>
          </button>
        </div>
        <div class="parts-start_container">
          <button class="start-link" data-id="${s._id}">
            Start
            <img src="../img/arrow-right.png" alt="arrow" class="start-img" />
          </button>
        </div>
      </div>
      <div class="parts-name_container">
        <div class="parts-run_container">
           <svg class="parts-svg_run" width="14" height="14"><use href="../img/sprite.svg#icon-run"></use></svg>
        </div>
        <h3 class="parts-name">${s.name}</h3>
      </div>
      <ul class="parts-information-list">
        <li class="parts-information_item">
          <h3 class="parts-information_header">Burned calories:</h3>
          <p class="parts-information_text">${s.burnedCalories} / 3 min</p>
        </li>
        <li class="parts-information_item">
          <h3 class="parts-information_header">Body part:</h3>
          <p class="parts-information_text">${s.bodyPart}</p>
        </li>
        <li class="parts-information_item">
          <h3 class="parts-information_header">Target:</h3>
          <p class="parts-information_text">${s.target}</p>
        </li>
      </ul>
    </li>`).join("");L.innerHTML=t}function j(e){h.innerHTML="",y.innerHTML="",_.innerHTML="";const t=e.map(s=>`
        <li class="exercise-equipment_item">
            <img src="${s.imgURL}" alt="${s.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${s.name}</h3>
            <p class="exercise-equipment_text">${s.filter}</p></div>
          
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",t)}function F(e){h.innerHTML="",y.innerHTML="",_.innerHTML="";const t=e.map(s=>`
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${s.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${s._id}" class="start-link">Start</a>
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
            <h3 class="parts-name">${s.name}</h3>
          </div>
          <ul class="parts-information-list">
            <li class="parts-information_item">
              <h3 class="parts-information_header">Burned calories:</h3>
              <p class="parts-information_text">&nbsp;$${s.burnedCalories}/3 min</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Body part:</h3>
              <p class="parts-information_text">&nbsp;${s.bodyPart}</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Target:</h3>
              <p class="parts-information_text">&nbsp;${s.target}</p>
            </li>
          </ul>
        </li>
      `).join("");_.innerHTML=t}function N(e){h.innerHTML="",y.innerHTML="",_.innerHTML="";const t=e.map(s=>`
        <li class="exercise-muscles_item">
            <img src="${s.imgURL}" alt="${s.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${s.name}</h3>
            <p class="exercise-muscles_text">${s.filter}</p></div>
            
        </li>
      `).join("");h.innerHTML=t}function R(e){M.innerHTML="";const t=`
      <span class="exercise-modal_close">&times;</span>
        <div class="modal-image_container">
          <img src="${e.gifUrl}" alt="${e.name}" /></div>
        <div class="modal-logo_container">
          <h2 class="modal-logo_header">${e.name}</h2>
          <div class="modal-rating_container">
            <p class="modal-rating">${e.rating}</p>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="../img/sprite.svg#icon-star"></use>
            </svg>
          </div>
        </div>
        <ul class="modal-info_list">
          <li class="modal-info_item">
            <h3 class="modal-info_header">Target</h3>
            <p class="modal-info_text">${e.target}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Body Part</h3>
            <p class="modal-info_text">${e.bodyPart}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Equipment</h3>
            <p class="modal-info_text">${e.equipment}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Popular</h3>
            <p class="modal-info_text">${e.popularity}</p>
          </li>
          <li class="modal-info_item">
            <h3 class="modal-info_header">Burned Calories</h3>
            <p class="modal-info_text">${e.burnedCalories}/${e.time} min</p>
          </li>
        </ul>
        <div class="modal-action_container">
          <p class="modal-description">
            ${e.description}
          </p>
          <div class="modal-btn_container">
            <button id="${e._id}" class="modal-favorites_btn">
              Add to favorites
              <svg class="modal-favorites_svg">
                <use href="../img/sprite.svg#icon-heart1"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;M.innerHTML=t}function w(e,t){if(!C)return;const s=3;let r,i;if(e<=s)r=1,i=e;else{let o=Math.floor(s/2);r=t-o,i=t+o,r<=1&&(r=1,i=s),i>=e&&(r=e-s+1,i=e)}let n="";r>1&&(n+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let o=r;o<=i;o++){const P=o===Number(t)?"active":"";n+=`<button class="exercise-button ${P}">${o}</button>`}i<e&&(n+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`),C.innerHTML=n}const E=document.querySelectorAll(".exercise-link"),H=document.querySelector(".exercise-btn-container"),u=document.querySelector(".filter-search_wrapper"),U=document.querySelector(".exercise-muscles_list"),K=document.querySelector(".exercise-equipment_list"),W=document.querySelectorAll(".exercise-link"),J=document.querySelector(".article-quote_text"),G=document.querySelector(".article-quote_author"),v="https://your-energy.b.goit.study/api";let m="Muscles",k="abs",d="bodypart",a=1,f=1;U.addEventListener("click",e=>{const t=e.target.closest(".exercise-muscles_item");if(t){let s=t.querySelector(".exericise-muscles_header").textContent.trim().toLowerCase();u.style.display="block",a=1,m="Body Parts",k=s,d=`muscles=${s}`,g(a,d),E.forEach(r=>r.classList.remove("active")),document.querySelector(".exercise-link.body_parts").classList.add("active")}});W.forEach(e=>{e.addEventListener("click",function(){var t;(t=document.querySelector(".exercise-link.active"))==null||t.classList.remove("active"),this.classList.add("active")})});K.addEventListener("click",e=>{const t=e.target.closest(".exercise-equipment_item");if(t){let s=t.querySelector(".exercise-equipment_header").textContent.trim().toLowerCase();u.style.display="block",a=1,m="Body Parts",k=s,d=`equipment=${s}`,g(a,d),E.forEach(r=>r.classList.remove("active")),document.querySelector(".exercise-link.body_parts").classList.add("active")}});H.addEventListener("click",e=>{var s;const t=e.target.closest(".exercise-button");if(t)switch((s=H.querySelector(".exercise-button.active"))==null||s.classList.remove("active"),t.classList.add("active"),a=parseInt(t.textContent),m){case"Muscles":T(a);break;case"Body Parts":g(a,d);break;case"Equipment":O(a);break}});u.addEventListener("submit",e=>{e.preventDefault();const s=e.currentTarget.elements.search.value.trim().toLowerCase();s!==""&&(g(a,`muscles=${k}&keyword=${s}`),u.reset(),u.elements.search.blur())});E.forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),t.target.classList.contains("muscles")?(u.style.display="none",a=1,m="Muscles",T()):t.target.classList.contains("body_parts")?(console.log(d),u.style.display="block",a=1,m="Body Parts",d="bodypart",g(a,d)):t.target.classList.contains("equipment")&&(u.style.display="none",a=1,m="Equipment",O())})});async function V(){try{const t=await(await fetch(`${v}/quote`)).json();J.textContent=t.quote,G.textContent=t.author}catch(e){console.error("Error fetching quote:",e)}}V();async function T(e=a){try{const s=await(await fetch(`${v}/filters?filter=Muscles&page=${e}&limit=12`)).json();f=s.totalPages,w(f,a),N(s.results)}catch(t){console.error("Error fetching muscles:",t)}}T();async function g(e=a,t=d){try{const r=await(await fetch(`${v}/exercises?&${t}&page=${e}&limit=10`)).json();f=Math.ceil(r.totalPages/10),w(f,a),F(r.results)}catch(s){console.error("Error fetching parts:",s)}}async function O(e=a){try{const s=await(await fetch(`${v}/filters?filter=Equipment&page=${e}&limit=12`)).json();f=s.totalPages,w(f,a),j(s.results)}catch(t){console.error("Error fetching equipment:",t)}}async function Q(e){try{const s=await(await fetch(`${v}/exercises/${e}`)).json();R(s)}catch(t){console.error("Error fetching modal:",t)}}const p=document.getElementById("menuButton"),q=document.getElementById("menuContent");p.addEventListener("click",()=>{const e=p.classList.toggle("is-active");q.classList.toggle("is-active"),p.setAttribute("aria-expanded",e)});document.addEventListener("click",e=>{!p.contains(e.target)&&!q.contains(e.target)&&(p.classList.remove("is-active"),q.classList.remove("is-active"),p.setAttribute("aria-expanded","false"))});const c=document.querySelector(".exercise-modal"),l=document.querySelector(".rating-modal"),x=document.querySelector(".exercise-parts_list"),b=document.querySelector(".form-rating");b==null||b.addEventListener("submit",e=>{e.preventDefault();const t=document.querySelector(".form-input"),s=document.querySelector(".form-textarea");t.value.trim(),s.value.trim(),ratingForm.reset()});x==null||x.addEventListener("click",e=>{const t=e.target.closest(".start-link");if(t){e.preventDefault();const s=t.id;c.classList.add("is-active"),Q(s)}});c==null||c.addEventListener("click",e=>{e.target.closest(".exercise-modal_close")&&c.classList.remove("is-active"),e.target.closest(".modal-rating_btn")&&(c.classList.remove("is-active"),setTimeout(()=>{l.classList.add("is-active")},250)),e.target===c&&c.classList.remove("is-active");const t=e.target.closest(".modal-favorites_btn");console.log("Favorite button clicked:",t),t&&(I(currentOpenedExercise),console.log("Success adding!"))});l==null||l.addEventListener("click",e=>{(e.target.closest(".rating-modal_close")||e.target===l)&&l.classList.remove("is-active")});document.addEventListener("keydown",e=>{e.key==="Escape"&&(c==null||c.classList.remove("is-active"),l==null||l.classList.remove("is-active"))});document.querySelectorAll(".nav-item");function B(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const r=s.closest(".nav-item"),i=s.getAttribute("href").replace("./",""),n=(t==="/"||t.endsWith("index.html"))&&i.includes("index.html"),o=t.endsWith(i)&&i!=="";n||o?r.classList.add("active"):r.classList.remove("active")})}document.addEventListener("DOMContentLoaded",()=>{B()});async function Y(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),i=new DOMParser().parseFromString(s,"text/html"),n=i.querySelector("body").innerHTML,o=i.title;document.startViewTransition(()=>{document.body.innerHTML=n,document.title=o,window.history.pushState({},"",e),B(),window.dispatchEvent(new Event("DOMContentLoaded"))})}document.addEventListener("click",e=>{const t=e.target.closest(".nav-link");t&&!e.defaultPrevented&&(e.preventDefault(),Y(t.getAttribute("href")))});export{z as a,A as r};
//# sourceMappingURL=navigate-ecggzRCu.js.map
