(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const H="modulepreload",P=function(e){return"/fitnes_app/"+e},E={},d=function(t,s,i){let n=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.allSettled(s.map(l=>{if(l=P(l),l in E)return;E[l]=!0;const _=l.endsWith(".css"),b=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":H,_||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),_)return new Promise((M,p)=>{u.addEventListener("load",M),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function o(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return n.then(r=>{for(const a of r||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};function $(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const i=s.closest(".nav-item"),n=s.getAttribute("href").replace("./",""),o=(t==="/"||t.endsWith("index.html"))&&n.includes("index.html"),r=t.endsWith(n)&&n!=="";o||r?i.classList.add("active"):i.classList.remove("active")})}async function Y(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),n=new DOMParser().parseFromString(s,"text/html"),o=n.querySelector("body").innerHTML,r=n.title;document.startViewTransition(()=>{document.body.innerHTML=o,document.title=r,window.history.pushState({},"",e),$(),A(e)})}const O={"index.html":async()=>{const{fetchQuote:e,fetchMuscles:t}=await d(async()=>{const{fetchQuote:a,fetchMuscles:l}=await Promise.resolve().then(()=>T);return{fetchQuote:a,fetchMuscles:l}},void 0),{initMainHandler:s}=await d(async()=>{const{initMainHandler:a}=await import("./handler-main-BQlh4gs2.js");return{initMainHandler:a}},[]);s();const{initModalHandler:i}=await d(async()=>{const{initModalHandler:a}=await import("./handler-modal-CDhVDQgn.js");return{initModalHandler:a}},[]);i();const{initHandlers:n}=await d(async()=>{const{initHandlers:a}=await import("./handlers-CszXgg65.js");return{initHandlers:a}},[]);n();const{initFooterHandler:o}=await d(async()=>{const{initFooterHandler:a}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:a}},[]);o();const{initAnchorHandler:r}=await d(async()=>{const{initAnchorHandler:a}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:a}},[]);r(),$(),e(),t()},"favorites.html":async()=>{const{fetchQuote:e}=await d(async()=>{const{fetchQuote:r}=await Promise.resolve().then(()=>T);return{fetchQuote:r}},void 0),{initFavoritesHandler:t}=await d(async()=>{const{initFavoritesHandler:r}=await import("./handler-favorites-C65F9Li9.js");return{initFavoritesHandler:r}},[]),{initModalHandler:s}=await d(async()=>{const{initModalHandler:r}=await import("./handler-modal-CDhVDQgn.js");return{initModalHandler:r}},[]);s();const{initHandlers:i}=await d(async()=>{const{initHandlers:r}=await import("./handlers-CszXgg65.js");return{initHandlers:r}},[]);i();const{initFooterHandler:n}=await d(async()=>{const{initFooterHandler:r}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:r}},[]);n();const{initAnchorHandler:o}=await d(async()=>{const{initAnchorHandler:r}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:r}},[]);o(),$(),e(),t()}};async function A(e){const s=new URL(e,window.location.origin).pathname.split("/").pop()||"index.html",i=O[s];if(i)try{await i()}catch(n){console.error(`Error initializing page ${s}:`,n)}else console.warn(`No initializer found for page: ${s}`)}const c="/fitnes_app/assets/sprite-mYoisd9W.svg";function q(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}function R(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list"),n=document.querySelector(".exercise-bodyparts_list");if(!t||!s||!i||!n){console.warn("[renders-index.js] Equipment render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="",n.innerHTML="";const o=e.map(r=>`
        <li class="exercise-equipment_item">
            <img src="${r.imgURL}" alt="${r.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${r.name}</h3>
            <p class="exercise-equipment_text">${r.filter}</p></div>

        </li>
      `).join("");i.insertAdjacentHTML("beforeend",o)}function j(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list"),n=document.querySelector(".exercise-bodyparts_list");if(!t||!s||!i||!n){console.warn("[renders-index.js] Parts render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="",n.innerHTML="";const o=e.map(r=>`
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="${c}#icon-trash"></use>
              </svg>
              <p class="parts-rating">${r.rating}</p>
              <svg class="parts-star_svg">
                <use href="${c}#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${r._id}" class="start-link">Start</a>
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
            <h3 class="parts-name">${q(r.name)}</h3>
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
      `).join("");s.innerHTML=o}function F(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list"),n=document.querySelector(".exercise-bodyparts_list");if(!t||!s||!i||!n){console.warn("[renders-index.js] Muscles render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="",n.innerHTML="";const o=e.map(r=>`
        <li class="exercise-muscles_item">
            <img src="${r.imgURL}" alt="${r.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${r.name}</h3>
            <p class="exercise-muscles_text">${r.filter}</p></div>

        </li>
      `).join("");t.innerHTML=o}function I(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),i=document.querySelector(".exercise-equipment_list"),n=document.querySelector(".exercise-bodyparts_list");if(!t||!s||!i||!n){console.warn("[renders-index.js] Muscles render elements not found in DOM");return}t.innerHTML="",i.innerHTML="",s.innerHTML="",n.innerHTML="";const o=e.map(r=>`
        <li class="exercise-bodyparts_item">
            <img src="${r.imgURL}" alt="${r.name}" class="exercise-bodyparts_img" />
            <div class="exercise-bodyparts_overlay">
            <h3 class="exercise-bodyparts_header">${r.name}</h3>
            <p class="exercise-bodyparts_text">${r.filter}</p></div>

        </li>
      `).join("");n.innerHTML=o}function k(e){const t=document.querySelector(".favorites-wrapper");if(!t)return;if(e===0){t.innerHTML=`
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
      `;t.insertAdjacentHTML("beforeend",s)}const w="favorites-exercises";function L(){return JSON.parse(localStorage.getItem(w)||"[]")}function x(e){return L().some(i=>i.id===e.id)}function B(e){const t=L(),s=JSON.stringify([...t,e]);localStorage.setItem(w,s)}function C(e){const t=L(),s=JSON.stringify(t.filter(i=>i.id!==e.id));localStorage.setItem(w,s)}function V(e){const t=document.querySelector(".modal-favorites_btn");t&&t.addEventListener("click",()=>{x(e)?(C(e),h(e.id)):(B(e),h(e.id)),document.dispatchEvent(new Event("favoritesUpdated"))})}function D(e){const t=document.querySelector(".exercise-modal_content");if(!t){console.warn("[renders-modal.js] Modal container not found in DOM");return}t.innerHTML="";const s=x({id:e._id}),i=`
      <span class="exercise-modal_close">&times;</span>
        <div class="modal-image_container">
          <img src="${e.gifUrl}" alt="${e.name}" /></div>
        <div class="modal-logo_container">
          <h2 class="modal-logo_header">${q(e.name)}</h2>
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
            <button id="${e._id}" class="modal-favorites_btn ${x({id:e._id})?"favorited":""}">
              ${s?"Remove from favorites":"Add to favorites"}
              <svg class="modal-favorites_svg">
                <use href="${c}#${s?"icon-trash":"icon-heart1"}"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;t.innerHTML=i,V({id:e._id})}function v(e,t){const s=document.querySelector(".exercise-btn-container");if(!s){console.warn("[renders-btn.js] Button container not found in DOM");return}const i=3;let n,o;if(e<=i)n=1,o=e;else{let p=Math.floor(i/2);n=t-p,o=t+p,n<=1&&(n=1,o=i),o>=e&&(n=e-i+1,o=e)}let r="";r+=`
    <button class="exercise-button nav-button" data-page="1" aria-label="First page" ${t===1?"disabled":""}>
      <svg class="test-svg">
        <use href="${c}#icon-two-arrow-left"></use>
      </svg>
    </button>
  `;const l=t===1?"disabled":"",_=Math.max(1,t-1);r+=`
    <button class="exercise-button nav-button" aria-label="Previous page" data-page="${_}" ${l}>
      <svg class="test-svg">
        <use href="${c}#icon-one-arrow-left"></use>
      </svg>
    </button>
  `,n>1&&(r+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let p=n;p<=o;p++){const S=p===Number(t)?"active":"";r+=`<button class="exercise-button ${S}">${p}</button>`}o<e&&(r+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`);const b=t===e?"disabled":"",u=Math.min(e,t+1);r+=`
    <button class="exercise-button nav-button" aria-label="Next page" data-page="${u}" ${b}>
      <svg class="test-svg">
        <use href="${c}#icon-one-arrow-right"></use>
      </svg>
    </button>
  `,r+=`
    <button class="exercise-button nav-button" aria-label="Last page" data-page="${e}" ${t===e?"disabled":""}>
      <svg class="test-svg">
        <use href="${c}#icon-two-arrow-right"></use>
      </svg>
    </button>
  `,s.innerHTML=r}const f="https://your-energy.b.goit.study/api";function g(){if(window.innerWidth<1440){const e=document.querySelector(".exercise");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}}let U="bodypart",y=1,m=1;async function N(){try{const e=document.querySelector(".article-quote_text"),t=document.querySelector(".article-quote_author");if(!e||!t){console.warn("[fetch.js] Quote elements not found in DOM");return}const i=await(await fetch(`${f}/quote`)).json();e.textContent=i.quote,t.textContent=i.author}catch(e){console.error("Error fetching quote:",e)}}async function W(e=y){try{const s=await(await fetch(`${f}/filters?filter=Muscles&page=${e}&limit=12`)).json();m=s.totalPages,v(m,e),F(s.results),g()}catch(t){console.error("Error fetching muscles:",t)}}async function z(e=y){try{const s=await(await fetch(`${f}/filters?filter=Body%20parts&page=${e}&limit=12`)).json();m=s.totalPages,v(m,e),I(s.results),g()}catch(t){console.error("Error fetching muscles:",t)}}async function Q(e=y,t=U){try{const i=await(await fetch(`${f}/exercises?&${t}&page=${e}&limit=10`)).json();m=Math.ceil(i.totalPages/10),v(m,e),j(i.results),g()}catch(s){console.error("Error fetching parts:",s)}}async function K(e=y){try{const s=await(await fetch(`${f}/filters?filter=Equipment&page=${e}&limit=12`)).json();m=s.totalPages,v(m,e),R(s.results),g()}catch(t){console.error("Error fetching equipment:",t)}}async function h(e){try{const s=await(await fetch(`${f}/exercises/${e}`)).json();D(s)}catch(t){console.error("Error fetching modal:",t)}}async function J(e=0){try{const s=await(await fetch(`${f}/exercises/${e}`)).json();k(s)}catch(t){console.error("Error fetching modal:",t)}}const T=Object.freeze(Object.defineProperty({__proto__:null,fetchBodyParts:z,fetchEquipment:K,fetchFavorites:J,fetchModal:h,fetchMuscles:W,fetchParts:Q,fetchQuote:N},Symbol.toStringTag,{value:"Module"}));function G(e){const t=document.querySelector(".exercise-modal");t&&(t.classList.add("is-active"),h(e))}function X(e){const t=e.target.closest(".start-link");if(!t)return!1;e.preventDefault(),e.stopPropagation();const s=t.id;return G(s),!0}export{z as a,K as b,Q as c,J as d,C as e,W as f,L as g,X as h,A as i,G as o,k as r,Y as s};
//# sourceMappingURL=modal-utils-Bx-Stgcn.js.map
