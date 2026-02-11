(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const M="modulepreload",q=function(e){return"/fitnes_app/"+e},x={},l=function(t,s,i){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(s.map(c=>{if(c=q(c),c in x)return;x[c]=!0;const m=c.endsWith(".css"),E=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${E}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":M,m||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),m)return new Promise((b,L)=>{d.addEventListener("load",b),d.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return n.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};function _(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const i=s.closest(".nav-item"),n=s.getAttribute("href").replace("./",""),r=(t==="/"||t.endsWith("index.html"))&&n.includes("index.html"),o=t.endsWith(n)&&n!=="";r||o?i.classList.add("active"):i.classList.remove("active")})}async function Q(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),n=new DOMParser().parseFromString(s,"text/html"),r=n.querySelector("body").innerHTML,o=n.title;document.startViewTransition(()=>{document.body.innerHTML=r,document.title=o,window.history.pushState({},"",e),_(),S(e)})}const T={"index.html":async()=>{const{fetchQuote:e,fetchMuscles:t}=await l(async()=>{const{fetchQuote:o,fetchMuscles:a}=await Promise.resolve().then(()=>$);return{fetchQuote:o,fetchMuscles:a}},void 0),{initMainHandler:s}=await l(async()=>{const{initMainHandler:o}=await import("./handler-main-DOQ-ErkR.js");return{initMainHandler:o}},[]);s();const{initModalHandler:i}=await l(async()=>{const{initModalHandler:o}=await import("./handler-modal-BMSNis-W.js");return{initModalHandler:o}},[]);i();const{initHandlers:n}=await l(async()=>{const{initHandlers:o}=await import("./handlers-DrWLgfLG.js");return{initHandlers:o}},[]);n();const{initFooterHandler:r}=await l(async()=>{const{initFooterHandler:o}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:o}},[]);r(),_(),e(),t()},"favorites.html":async()=>{const{fetchQuote:e}=await l(async()=>{const{fetchQuote:r}=await Promise.resolve().then(()=>$);return{fetchQuote:r}},void 0),{initFavoritesHandler:t}=await l(async()=>{const{initFavoritesHandler:r}=await import("./handler-favorites-BF3faWym.js");return{initFavoritesHandler:r}},[]),{initModalHandler:s}=await l(async()=>{const{initModalHandler:r}=await import("./handler-modal-BMSNis-W.js");return{initModalHandler:r}},[]);s();const{initHandlers:i}=await l(async()=>{const{initHandlers:r}=await import("./handlers-DrWLgfLG.js");return{initHandlers:r}},[]);i();const{initFooterHandler:n}=await l(async()=>{const{initFooterHandler:r}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:r}},[]);n(),_(),e(),t()}};async function S(e){const s=new URL(e,window.location.origin).pathname.split("/").pop()||"index.html";console.log(`Initializing page: ${s}`);const i=T[s];if(i)try{await i()}catch(n){console.error(`Error initializing page ${s}:`,n)}else console.warn(`No initializer found for page: ${s}`)}function H(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list");if(!t||!s||!i){console.warn("[renders-index.js] Equipment render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="";const n=e.map(r=>`
        <li class="exercise-equipment_item">
            <img src="${r.imgURL}" alt="${r.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${r.name}</h3>
            <p class="exercise-equipment_text">${r.filter}</p></div>

        </li>
      `).join("");i.insertAdjacentHTML("beforeend",n)}function P(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list");if(!t||!s||!i){console.warn("[renders-index.js] Parts render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="";const n=e.map(r=>`
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${r.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${r._id}" class="start-link">Start</a>
              <svg class="test-svg">
                <use href="./img/sprite.svg#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
          <div class="parts-name_container">
            <div class="parts-run_container">
              <svg class="parts-svg_run">
                <use href="../img/sprite.svg#icon-run"></use>
              </svg>
            </div>
            <h3 class="parts-name">${r.name}</h3>
          </div>
          <ul class="parts-information-list">
            <li class="parts-information_item">
              <h3 class="parts-information_header">Burned calories:</h3>
              <p class="parts-information_text">&nbsp;$${r.burnedCalories}/3 min</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Body part:</h3>
              <p class="parts-information_text">&nbsp;${r.bodyPart}</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Target:</h3>
              <p class="parts-information_text">&nbsp;${r.target}</p>
            </li>
          </ul>
        </li>
      `).join("");s.innerHTML=n}function O(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list");if(!t||!s||!i){console.warn("[renders-index.js] Muscles render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="";const n=e.map(r=>`
        <li class="exercise-muscles_item">
            <img src="${r.imgURL}" alt="${r.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${r.name}</h3>
            <p class="exercise-muscles_text">${r.filter}</p></div>

        </li>
      `).join("");t.innerHTML=n}function R(e){const t=document.querySelector(".favorites-wrapper");if(!t)return;if(e===0){t.innerHTML=`
      <div class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet. To get started, go to the exercises catalog and choose the ones you like.</p>
      </div>`;return}const s=`<li class="exercise-parts_item" data-exercise-id="${e._id}">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg" data-trash-id="${e._id}">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${e.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="#" id="${e._id}" class="start-link">Start</a>
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
            <h3 class="parts-name">${e.name}</h3>
          </div>
          <ul class="parts-information-list">
            <li class="parts-information_item">
              <h3 class="parts-information_header">Burned calories:</h3>
              <p class="parts-information_text">&nbsp;$${e.burnedCalories}/3 min</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Body part:</h3>
              <p class="parts-information_text">&nbsp;${e.bodyPart}</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Target:</h3>
              <p class="parts-information_text">&nbsp;${e.target}</p>
            </li>
          </ul>
        </li>
      `;t.insertAdjacentHTML("beforeend",s)}const g="favorites-exercises";function v(){return JSON.parse(localStorage.getItem(g)||"[]")}function h(e){return v().some(i=>i.id===e.id)}function j(e){const t=v(),s=JSON.stringify([...t,e]);localStorage.setItem(g,s)}function A(e){const t=v(),s=JSON.stringify(t.filter(i=>i.id!==e.id));localStorage.setItem(g,s)}function F(e){const t=document.querySelector(".modal-favorites_btn");t&&t.addEventListener("click",()=>{h(e)?(A(e),f(e.id)):(j(e),f(e.id)),document.dispatchEvent(new Event("favoritesUpdated"))})}function k(e){const t=document.querySelector(".exercise-modal_content");if(!t){console.warn("[renders-modal.js] Modal container not found in DOM");return}t.innerHTML="";const s=h({id:e._id}),i=`
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
            <button id="${e._id}" class="modal-favorites_btn ${h({id:e._id})?"favorited":""}">
              ${s?"Remove from favorites":"Add to favorites"}
              <svg class="modal-favorites_svg">
                <use href="../img/sprite.svg#icon-heart1"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;t.innerHTML=i,F({id:e._id})}function y(e,t){const s=document.querySelector(".exercise-btn-container");if(!s){console.warn("[renders-btn.js] Button container not found in DOM");return}const i=3;let n,r;if(e<=i)n=1,r=e;else{let a=Math.floor(i/2);n=t-a,r=t+a,n<=1&&(n=1,r=i),r>=e&&(n=e-i+1,r=e)}let o="";n>1&&(o+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let a=n;a<=r;a++){const c=a===Number(t)?"active":"";o+=`<button class="exercise-button ${c}">${a}</button>`}r<e&&(o+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`),s.innerHTML=o}const p="https://your-energy.b.goit.study/api";let I="bodypart",w=1,u=1;async function C(){try{const e=document.querySelector(".article-quote_text"),t=document.querySelector(".article-quote_author");if(!e||!t){console.warn("[fetch.js] Quote elements not found in DOM");return}const i=await(await fetch(`${p}/quote`)).json();e.textContent=i.quote,t.textContent=i.author}catch(e){console.error("Error fetching quote:",e)}}async function B(e=w){try{const s=await(await fetch(`${p}/filters?filter=Muscles&page=${e}&limit=12`)).json();u=s.totalPages,y(u,e),O(s.results)}catch(t){console.error("Error fetching muscles:",t)}}async function V(e=w,t=I){try{const i=await(await fetch(`${p}/exercises?&${t}&page=${e}&limit=10`)).json();u=Math.ceil(i.totalPages/10),y(u,e),P(i.results)}catch(s){console.error("Error fetching parts:",s)}}async function U(e=w){try{const s=await(await fetch(`${p}/filters?filter=Equipment&page=${e}&limit=12`)).json();u=s.totalPages,y(u,e),H(s.results)}catch(t){console.error("Error fetching equipment:",t)}}async function f(e){try{const s=await(await fetch(`${p}/exercises/${e}`)).json();k(s)}catch(t){console.error("Error fetching modal:",t)}}async function N(e=0){try{const s=await(await fetch(`${p}/exercises/${e}`)).json();console.log("Fetched favorite exercise:",s),R(s)}catch(t){console.error("Error fetching modal:",t)}}const $=Object.freeze(Object.defineProperty({__proto__:null,fetchEquipment:U,fetchFavorites:N,fetchModal:f,fetchMuscles:B,fetchParts:V,fetchQuote:C},Symbol.toStringTag,{value:"Module"}));function z(e){const t=document.querySelector(".exercise-modal");console.log("Opening modal for exercise:",e),console.log("Exercise modal found:",!!t),t&&(t.classList.add("is-active"),f(e))}function D(e){const t=e.target.closest(".start-link");if(!t)return!1;e.preventDefault(),e.stopPropagation();const s=t.id;return console.log("Start link clicked for exercise:",s),z(s),!0}export{V as a,U as b,N as c,A as d,B as f,v as g,D as h,S as i,R as r,Q as s};
//# sourceMappingURL=modal-utils-B4MFb0mf.js.map
