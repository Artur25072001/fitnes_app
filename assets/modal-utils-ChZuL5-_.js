(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const S="modulepreload",H=function(e){return"/fitnes_app/"+e},M={},d=function(t,s,o){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(s.map(l=>{if(l=H(l),l in M)return;M[l]=!0;const f=l.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${v}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":S,f||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),f)return new Promise((L,p)=>{u.addEventListener("load",L),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&n(a.reason);return t().catch(n)})};function g(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const o=s.closest(".nav-item"),r=s.getAttribute("href").replace("./",""),n=(t==="/"||t.endsWith("index.html"))&&r.includes("index.html"),i=t.endsWith(r)&&r!=="";n||i?o.classList.add("active"):o.classList.remove("active")})}async function K(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),r=new DOMParser().parseFromString(s,"text/html"),n=r.querySelector("body").innerHTML,i=r.title;document.startViewTransition(()=>{document.body.innerHTML=n,document.title=i,window.history.pushState({},"",e),g(),P(e)})}const O={"index.html":async()=>{const{fetchQuote:e,fetchMuscles:t}=await d(async()=>{const{fetchQuote:a,fetchMuscles:l}=await Promise.resolve().then(()=>T);return{fetchQuote:a,fetchMuscles:l}},void 0),{initMainHandler:s}=await d(async()=>{const{initMainHandler:a}=await import("./handler-main-BX2TfjZS.js");return{initMainHandler:a}},[]);s();const{initModalHandler:o}=await d(async()=>{const{initModalHandler:a}=await import("./handler-modal-BZAR6Sn_.js");return{initModalHandler:a}},[]);o();const{initHandlers:r}=await d(async()=>{const{initHandlers:a}=await import("./handlers-v1rpnLlr.js");return{initHandlers:a}},[]);r();const{initFooterHandler:n}=await d(async()=>{const{initFooterHandler:a}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:a}},[]);n();const{initAnchorHandler:i}=await d(async()=>{const{initAnchorHandler:a}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:a}},[]);i(),g(),e(),t()},"favorites.html":async()=>{const{fetchQuote:e}=await d(async()=>{const{fetchQuote:i}=await Promise.resolve().then(()=>T);return{fetchQuote:i}},void 0),{initFavoritesHandler:t}=await d(async()=>{const{initFavoritesHandler:i}=await import("./handler-favorites-c6iPj6Cg.js");return{initFavoritesHandler:i}},[]),{initModalHandler:s}=await d(async()=>{const{initModalHandler:i}=await import("./handler-modal-BZAR6Sn_.js");return{initModalHandler:i}},[]);s();const{initHandlers:o}=await d(async()=>{const{initHandlers:i}=await import("./handlers-v1rpnLlr.js");return{initHandlers:i}},[]);o();const{initFooterHandler:r}=await d(async()=>{const{initFooterHandler:i}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:i}},[]);r();const{initAnchorHandler:n}=await d(async()=>{const{initAnchorHandler:i}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:i}},[]);n(),g(),e(),t()}};async function P(e){const s=new URL(e,window.location.origin).pathname.split("/").pop()||"index.html",o=O[s];if(o)try{await o()}catch(r){console.error(`Error initializing page ${s}:`,r)}else console.warn(`No initializer found for page: ${s}`)}const c="/fitnes_app/assets/sprite-mYoisd9W.svg";function A(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),o=document.querySelector(".exercise-equipment_list");if(!t||!s||!o){console.warn("[renders-index.js] Equipment render elements not found in DOM");return}t.innerHTML="",o.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-equipment_item">
            <img src="${n.imgURL}" alt="${n.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${n.name}</h3>
            <p class="exercise-equipment_text">${n.filter}</p></div>

        </li>
      `).join("");o.insertAdjacentHTML("beforeend",r)}function R(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),o=document.querySelector(".exercise-equipment_list");if(!t||!s||!o){console.warn("[renders-index.js] Parts render elements not found in DOM");return}t.innerHTML="",o.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="${c}#icon-trash"></use>
              </svg>
              <p class="parts-rating">${n.rating}</p>
              <svg class="parts-star_svg">
                <use href="${c}#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${n._id}" class="start-link">Start</a>
              <svg class="parts-arrow-svg">
                <use href="${c}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
          <div class="parts-name_container">
            <div class="parts-run_container">
              <svg class="parts-svg_run">
                <use href="${c}#icon-run"></use>
              </svg>
            </div>
            <h3 class="parts-name">${n.name}</h3>
          </div>
          <ul class="parts-information-list">
            <li class="parts-information_item">
              <h3 class="parts-information_header">Burned calories:</h3>
              <p class="parts-information_text">&nbsp;$${n.burnedCalories}/3 min</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Body part:</h3>
              <p class="parts-information_text">&nbsp;${n.bodyPart}</p>
            </li>
            <li class="parts-information_item">
              <h3 class="parts-information_header">Target:</h3>
              <p class="parts-information_text">&nbsp;${n.target}</p>
            </li>
          </ul>
        </li>
      `).join("");s.innerHTML=r}function j(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),o=document.querySelector(".exercise-equipment_list");if(!t||!s||!o){console.warn("[renders-index.js] Muscles render elements not found in DOM");return}t.innerHTML="",o.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-muscles_item">
            <img src="${n.imgURL}" alt="${n.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${n.name}</h3>
            <p class="exercise-muscles_text">${n.filter}</p></div>

        </li>
      `).join("");t.innerHTML=r}function F(e){const t=document.querySelector(".favorites-wrapper");if(!t)return;if(e===0){t.innerHTML=`
      <div class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet. To get started, go to the exercises catalog and choose the ones you like.</p>
      </div>`;return}const s=`<li class="exercise-parts_item" data-exercise-id="${e._id}">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg" data-trash-id="${e._id}">
                <use href="${c}#icon-trash"></use>
              </svg>
              <p class="parts-rating">${e.rating}</p>
              <svg class="parts-star_svg">
                <use href="${c}#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="#" id="${e._id}" class="start-link">Start</a>
              <svg class="parts-arrow-svg">
                <use href="${c}#icon-arrow-right"></use>
              </svg>
            </div>
          </div>
          <div class="parts-name_container">
            <div class="parts-run_container">
              <svg class="parts-svg_run">
                <use href="${c}#icon-run"></use>
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
      `;t.insertAdjacentHTML("beforeend",s)}const $="favorites-exercises";function b(){return JSON.parse(localStorage.getItem($)||"[]")}function y(e){return b().some(o=>o.id===e.id)}function I(e){const t=b(),s=JSON.stringify([...t,e]);localStorage.setItem($,s)}function k(e){const t=b(),s=JSON.stringify(t.filter(o=>o.id!==e.id));localStorage.setItem($,s)}function V(e){const t=document.querySelector(".modal-favorites_btn");t&&t.addEventListener("click",()=>{y(e)?(k(e),h(e.id)):(I(e),h(e.id)),document.dispatchEvent(new Event("favoritesUpdated"))})}function C(e){const t=document.querySelector(".exercise-modal_content");if(!t){console.warn("[renders-modal.js] Modal container not found in DOM");return}t.innerHTML="";const s=y({id:e._id}),o=`
      <span class="exercise-modal_close">&times;</span>
        <div class="modal-image_container">
          <img src="${e.gifUrl}" alt="${e.name}" /></div>
        <div class="modal-logo_container">
          <h2 class="modal-logo_header">${e.name}</h2>
          <div class="modal-rating_container">
            <p class="modal-rating">${e.rating}</p>
            <svg class="modal-rating_svg">
              <use href="${c}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${c}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${c}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${c}#icon-star"></use>
            </svg>
            <svg class="modal-rating_svg">
              <use href="${c}#icon-star"></use>
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
            <button id="${e._id}" class="modal-favorites_btn ${y({id:e._id})?"favorited":""}">
              ${s?"Remove from favorites":"Add to favorites"}
              <svg class="modal-favorites_svg">
                <use href="${c}#${s?"icon-trash":"icon-heart1"}"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;t.innerHTML=o,V({id:e._id})}function w(e,t){const s=document.querySelector(".exercise-btn-container");if(!s){console.warn("[renders-btn.js] Button container not found in DOM");return}const o=3;let r,n;if(e<=o)r=1,n=e;else{let p=Math.floor(o/2);r=t-p,n=t+p,r<=1&&(r=1,n=o),n>=e&&(r=e-o+1,n=e)}let i="";i+=`
    <button class="exercise-button nav-button" data-page="1" aria-label="First page" ${t===1?"disabled":""}>
      <svg class="test-svg">
        <use href="${c}#icon-two-arrow-left"></use>
      </svg>
    </button>
  `;const l=t===1?"disabled":"",f=Math.max(1,t-1);i+=`
    <button class="exercise-button nav-button" aria-label="Previous page" data-page="${f}" ${l}>
      <svg class="test-svg">
        <use href="${c}#icon-one-arrow-left"></use>
      </svg>
    </button>
  `,r>1&&(i+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let p=r;p<=n;p++){const q=p===Number(t)?"active":"";i+=`<button class="exercise-button ${q}">${p}</button>`}n<e&&(i+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`);const v=t===e?"disabled":"",u=Math.min(e,t+1);i+=`
    <button class="exercise-button nav-button" aria-label="Next page" data-page="${u}" ${v}>
      <svg class="test-svg">
        <use href="${c}#icon-one-arrow-right"></use>
      </svg>
    </button>
  `,i+=`
    <button class="exercise-button nav-button" aria-label="Last page" data-page="${e}" ${t===e?"disabled":""}>
      <svg class="test-svg">
        <use href="${c}#icon-two-arrow-right"></use>
      </svg>
    </button>
  `,s.innerHTML=i}const _="https://your-energy.b.goit.study/api";function x(){if(window.innerWidth<1440){const e=document.querySelector(".exercise");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}let D="bodypart",E=1,m=1;async function B(){try{const e=document.querySelector(".article-quote_text"),t=document.querySelector(".article-quote_author");if(!e||!t){console.warn("[fetch.js] Quote elements not found in DOM");return}const o=await(await fetch(`${_}/quote`)).json();e.textContent=o.quote,t.textContent=o.author}catch(e){console.error("Error fetching quote:",e)}}async function U(e=E){try{const s=await(await fetch(`${_}/filters?filter=Muscles&page=${e}&limit=12`)).json();m=s.totalPages,w(m,e),j(s.results),x()}catch(t){console.error("Error fetching muscles:",t)}}async function N(e=E,t=D){try{const o=await(await fetch(`${_}/exercises?&${t}&page=${e}&limit=10`)).json();m=Math.ceil(o.totalPages/10),w(m,e),R(o.results),x()}catch(s){console.error("Error fetching parts:",s)}}async function W(e=E){try{const s=await(await fetch(`${_}/filters?filter=Equipment&page=${e}&limit=12`)).json();m=s.totalPages,w(m,e),A(s.results),x()}catch(t){console.error("Error fetching equipment:",t)}}async function h(e){try{const s=await(await fetch(`${_}/exercises/${e}`)).json();C(s)}catch(t){console.error("Error fetching modal:",t)}}async function Q(e=0){try{const s=await(await fetch(`${_}/exercises/${e}`)).json();F(s)}catch(t){console.error("Error fetching modal:",t)}}const T=Object.freeze(Object.defineProperty({__proto__:null,fetchEquipment:W,fetchFavorites:Q,fetchModal:h,fetchMuscles:U,fetchParts:N,fetchQuote:B},Symbol.toStringTag,{value:"Module"}));function z(e){const t=document.querySelector(".exercise-modal");t&&(t.classList.add("is-active"),h(e))}function J(e){const t=e.target.closest(".start-link");if(!t)return!1;e.preventDefault(),e.stopPropagation();const s=t.id;return z(s),!0}export{N as a,W as b,Q as c,k as d,U as f,b as g,J as h,P as i,z as o,F as r,K as s};
//# sourceMappingURL=modal-utils-ChZuL5-_.js.map
