(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const q="modulepreload",H=function(e){return"/fitnes_app/"+e},L={},d=function(t,s,a){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(s.map(l=>{if(l=H(l),l in L)return;L[l]=!0;const f=l.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${v}`))return;const u=document.createElement("link");if(u.rel=f?"stylesheet":q,f||(u.as="script"),u.crossOrigin="",u.href=l,o&&u.setAttribute("nonce",o),document.head.appendChild(u),f)return new Promise((E,p)=>{u.addEventListener("load",E),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return r.then(i=>{for(const o of i||[])o.status==="rejected"&&n(o.reason);return t().catch(n)})};function g(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const a=s.closest(".nav-item"),r=s.getAttribute("href").replace("./",""),n=(t==="/"||t.endsWith("index.html"))&&r.includes("index.html"),i=t.endsWith(r)&&r!=="";n||i?a.classList.add("active"):a.classList.remove("active")})}async function W(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),r=new DOMParser().parseFromString(s,"text/html"),n=r.querySelector("body").innerHTML,i=r.title;document.startViewTransition(()=>{document.body.innerHTML=n,document.title=i,window.history.pushState({},"",e),g(),P(e)})}const S={"index.html":async()=>{const{fetchQuote:e,fetchMuscles:t}=await d(async()=>{const{fetchQuote:o,fetchMuscles:l}=await Promise.resolve().then(()=>M);return{fetchQuote:o,fetchMuscles:l}},void 0),{initMainHandler:s}=await d(async()=>{const{initMainHandler:o}=await import("./handler-main-XxmYo78P.js");return{initMainHandler:o}},[]);s();const{initModalHandler:a}=await d(async()=>{const{initModalHandler:o}=await import("./handler-modal-DPUfmqEh.js");return{initModalHandler:o}},[]);a();const{initHandlers:r}=await d(async()=>{const{initHandlers:o}=await import("./handlers-DaQpbC5M.js");return{initHandlers:o}},[]);r();const{initFooterHandler:n}=await d(async()=>{const{initFooterHandler:o}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:o}},[]);n();const{initAnchorHandler:i}=await d(async()=>{const{initAnchorHandler:o}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:o}},[]);i(),g(),e(),t()},"favorites.html":async()=>{const{fetchQuote:e}=await d(async()=>{const{fetchQuote:i}=await Promise.resolve().then(()=>M);return{fetchQuote:i}},void 0),{initFavoritesHandler:t}=await d(async()=>{const{initFavoritesHandler:i}=await import("./handler-favorites-Ct_5U5Yx.js");return{initFavoritesHandler:i}},[]),{initModalHandler:s}=await d(async()=>{const{initModalHandler:i}=await import("./handler-modal-DPUfmqEh.js");return{initModalHandler:i}},[]);s();const{initHandlers:a}=await d(async()=>{const{initHandlers:i}=await import("./handlers-DaQpbC5M.js");return{initHandlers:i}},[]);a();const{initFooterHandler:r}=await d(async()=>{const{initFooterHandler:i}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:i}},[]);r();const{initAnchorHandler:n}=await d(async()=>{const{initAnchorHandler:i}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:i}},[]);n(),g(),e(),t()}};async function P(e){const s=new URL(e,window.location.origin).pathname.split("/").pop()||"index.html";console.log(`Initializing page: ${s}`);const a=S[s];if(a)try{await a()}catch(r){console.error(`Error initializing page ${s}:`,r)}else console.warn(`No initializer found for page: ${s}`)}const c="/fitnes_app/assets/sprite-mYoisd9W.svg";function O(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),a=document.querySelector(".exercise-equipment_list");if(!t||!s||!a){console.warn("[renders-index.js] Equipment render elements not found in DOM");return}t.innerHTML="",a.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-equipment_item">
            <img src="${n.imgURL}" alt="${n.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${n.name}</h3>
            <p class="exercise-equipment_text">${n.filter}</p></div>

        </li>
      `).join("");a.insertAdjacentHTML("beforeend",r)}function A(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),a=document.querySelector(".exercise-equipment_list");if(!t||!s||!a){console.warn("[renders-index.js] Parts render elements not found in DOM");return}t.innerHTML="",a.innerHTML="",s.innerHTML="";const r=e.map(n=>`
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
      `).join("");s.innerHTML=r}function R(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),a=document.querySelector(".exercise-equipment_list");if(!t||!s||!a){console.warn("[renders-index.js] Muscles render elements not found in DOM");return}t.innerHTML="",a.innerHTML="",s.innerHTML="";const r=e.map(n=>`
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
      `;t.insertAdjacentHTML("beforeend",s)}const $="favorites-exercises";function b(){return JSON.parse(localStorage.getItem($)||"[]")}function y(e){return b().some(a=>a.id===e.id)}function j(e){const t=b(),s=JSON.stringify([...t,e]);localStorage.setItem($,s)}function I(e){const t=b(),s=JSON.stringify(t.filter(a=>a.id!==e.id));localStorage.setItem($,s)}function k(e){const t=document.querySelector(".modal-favorites_btn");t&&t.addEventListener("click",()=>{y(e)?(I(e),h(e.id)):(j(e),h(e.id)),document.dispatchEvent(new Event("favoritesUpdated"))})}function C(e){const t=document.querySelector(".exercise-modal_content");if(!t){console.warn("[renders-modal.js] Modal container not found in DOM");return}t.innerHTML="";const s=y({id:e._id}),a=`
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
    `;t.innerHTML=a,k({id:e._id})}function w(e,t){const s=document.querySelector(".exercise-btn-container");if(!s){console.warn("[renders-btn.js] Button container not found in DOM");return}const a=3;let r,n;if(e<=a)r=1,n=e;else{let p=Math.floor(a/2);r=t-p,n=t+p,r<=1&&(r=1,n=a),n>=e&&(r=e-a+1,n=e)}let i="";i+=`
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
  `,r>1&&(i+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let p=r;p<=n;p++){const T=p===Number(t)?"active":"";i+=`<button class="exercise-button ${T}">${p}</button>`}n<e&&(i+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`);const v=t===e?"disabled":"",u=Math.min(e,t+1);i+=`
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
  `,s.innerHTML=i}const _="https://your-energy.b.goit.study/api";let V="bodypart",x=1,m=1;async function D(){try{const e=document.querySelector(".article-quote_text"),t=document.querySelector(".article-quote_author");if(!e||!t){console.warn("[fetch.js] Quote elements not found in DOM");return}const a=await(await fetch(`${_}/quote`)).json();e.textContent=a.quote,t.textContent=a.author}catch(e){console.error("Error fetching quote:",e)}}async function B(e=x){try{const s=await(await fetch(`${_}/filters?filter=Muscles&page=${e}&limit=12`)).json();m=s.totalPages,w(m,e),R(s.results)}catch(t){console.error("Error fetching muscles:",t)}}async function U(e=x,t=V){try{const a=await(await fetch(`${_}/exercises?&${t}&page=${e}&limit=10`)).json();m=Math.ceil(a.totalPages/10),w(m,e),A(a.results)}catch(s){console.error("Error fetching parts:",s)}}async function N(e=x){try{const s=await(await fetch(`${_}/filters?filter=Equipment&page=${e}&limit=12`)).json();m=s.totalPages,w(m,e),O(s.results)}catch(t){console.error("Error fetching equipment:",t)}}async function h(e){try{const s=await(await fetch(`${_}/exercises/${e}`)).json();C(s)}catch(t){console.error("Error fetching modal:",t)}}async function z(e=0){try{const s=await(await fetch(`${_}/exercises/${e}`)).json();console.log("Fetched favorite exercise:",s),F(s)}catch(t){console.error("Error fetching modal:",t)}}const M=Object.freeze(Object.defineProperty({__proto__:null,fetchEquipment:N,fetchFavorites:z,fetchModal:h,fetchMuscles:B,fetchParts:U,fetchQuote:D},Symbol.toStringTag,{value:"Module"}));function Q(e){const t=document.querySelector(".exercise-modal");t&&(t.classList.add("is-active"),h(e))}function K(e){const t=e.target.closest(".start-link");if(!t)return!1;e.preventDefault(),e.stopPropagation();const s=t.id;return Q(s),!0}export{U as a,N as b,z as c,I as d,B as f,b as g,K as h,P as i,Q as o,F as r,W as s};
//# sourceMappingURL=modal-utils-DXDv482n.js.map
