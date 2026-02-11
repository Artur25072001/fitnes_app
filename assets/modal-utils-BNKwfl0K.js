(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const T="modulepreload",q=function(e){return"/fitnes_app/"+e},E={},l=function(t,s,o){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(s.map(c=>{if(c=q(c),c in E)return;E[c]=!0;const p=c.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${_}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":T,p||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),p)return new Promise(($,u)=>{d.addEventListener("load",$),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&n(a.reason);return t().catch(n)})};function g(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const o=s.closest(".nav-item"),r=s.getAttribute("href").replace("./",""),n=(t==="/"||t.endsWith("index.html"))&&r.includes("index.html"),i=t.endsWith(r)&&r!=="";n||i?o.classList.add("active"):o.classList.remove("active")})}async function Q(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),r=new DOMParser().parseFromString(s,"text/html"),n=r.querySelector("body").innerHTML,i=r.title;document.startViewTransition(()=>{document.body.innerHTML=n,document.title=i,window.history.pushState({},"",e),g(),S(e)})}const H={"index.html":async()=>{const{fetchQuote:e,fetchMuscles:t}=await l(async()=>{const{fetchQuote:a,fetchMuscles:c}=await Promise.resolve().then(()=>L);return{fetchQuote:a,fetchMuscles:c}},void 0),{initMainHandler:s}=await l(async()=>{const{initMainHandler:a}=await import("./handler-main-BKJ6C9bm.js");return{initMainHandler:a}},[]);s();const{initModalHandler:o}=await l(async()=>{const{initModalHandler:a}=await import("./handler-modal-DkI4qb-Y.js");return{initModalHandler:a}},[]);o();const{initHandlers:r}=await l(async()=>{const{initHandlers:a}=await import("./handlers-hZ6HgKmN.js");return{initHandlers:a}},[]);r();const{initFooterHandler:n}=await l(async()=>{const{initFooterHandler:a}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:a}},[]);n();const{initAnchorHandler:i}=await l(async()=>{const{initAnchorHandler:a}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:a}},[]);i(),g(),e(),t()},"favorites.html":async()=>{const{fetchQuote:e}=await l(async()=>{const{fetchQuote:i}=await Promise.resolve().then(()=>L);return{fetchQuote:i}},void 0),{initFavoritesHandler:t}=await l(async()=>{const{initFavoritesHandler:i}=await import("./handler-favorites-DYJYjz3C.js");return{initFavoritesHandler:i}},[]),{initModalHandler:s}=await l(async()=>{const{initModalHandler:i}=await import("./handler-modal-DkI4qb-Y.js");return{initModalHandler:i}},[]);s();const{initHandlers:o}=await l(async()=>{const{initHandlers:i}=await import("./handlers-hZ6HgKmN.js");return{initHandlers:i}},[]);o();const{initFooterHandler:r}=await l(async()=>{const{initFooterHandler:i}=await import("./handler-footer-gXCxc3Iz.js");return{initFooterHandler:i}},[]);r();const{initAnchorHandler:n}=await l(async()=>{const{initAnchorHandler:i}=await import("./anchor-F9LsAN7P.js");return{initAnchorHandler:i}},[]);n(),g(),e(),t()}};async function S(e){const s=new URL(e,window.location.origin).pathname.split("/").pop()||"index.html";console.log(`Initializing page: ${s}`);const o=H[s];if(o)try{await o()}catch(r){console.error(`Error initializing page ${s}:`,r)}else console.warn(`No initializer found for page: ${s}`)}function O(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),o=document.querySelector(".exercise-equipment_list");if(!t||!s||!o){console.warn("[renders-index.js] Equipment render elements not found in DOM");return}t.innerHTML="",o.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-equipment_item">
            <img src="${n.imgURL}" alt="${n.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${n.name}</h3>
            <p class="exercise-equipment_text">${n.filter}</p></div>

        </li>
      `).join("");o.insertAdjacentHTML("beforeend",r)}function P(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),o=document.querySelector(".exercise-equipment_list");if(!t||!s||!o){console.warn("[renders-index.js] Parts render elements not found in DOM");return}t.innerHTML="",o.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${n.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${n._id}" class="start-link">Start</a>
              <svg class="parts-arrow-svg">
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
      `).join("");s.innerHTML=r}function A(e){const t=document.querySelector(".exercise-muscles_list"),s=document.querySelector(".exercise-parts_list"),o=document.querySelector(".exercise-equipment_list");if(!t||!s||!o){console.warn("[renders-index.js] Muscles render elements not found in DOM");return}t.innerHTML="",o.innerHTML="",s.innerHTML="";const r=e.map(n=>`
        <li class="exercise-muscles_item">
            <img src="${n.imgURL}" alt="${n.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${n.name}</h3>
            <p class="exercise-muscles_text">${n.filter}</p></div>

        </li>
      `).join("");t.innerHTML=r}function R(e){const t=document.querySelector(".favorites-wrapper");if(!t)return;if(e===0){t.innerHTML=`
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
              <svg class="parts-arrow-svg">
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
      `;t.insertAdjacentHTML("beforeend",s)}const y="favorites-exercises";function w(){return JSON.parse(localStorage.getItem(y)||"[]")}function h(e){return w().some(o=>o.id===e.id)}function j(e){const t=w(),s=JSON.stringify([...t,e]);localStorage.setItem(y,s)}function F(e){const t=w(),s=JSON.stringify(t.filter(o=>o.id!==e.id));localStorage.setItem(y,s)}function I(e){const t=document.querySelector(".modal-favorites_btn");t&&t.addEventListener("click",()=>{h(e)?(F(e),v(e.id)):(j(e),v(e.id)),document.dispatchEvent(new Event("favoritesUpdated"))})}function k(e){const t=document.querySelector(".exercise-modal_content");if(!t){console.warn("[renders-modal.js] Modal container not found in DOM");return}t.innerHTML="";const s=h({id:e._id}),o=`
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
                <use href="../img/sprite.svg#${s?"icon-trash":"icon-heart1"}"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;t.innerHTML=o,I({id:e._id})}function b(e,t){const s=document.querySelector(".exercise-btn-container");if(!s){console.warn("[renders-btn.js] Button container not found in DOM");return}const o=3;let r,n;if(e<=o)r=1,n=e;else{let u=Math.floor(o/2);r=t-u,n=t+u,r<=1&&(r=1,n=o),n>=e&&(r=e-o+1,n=e)}let i="";i+=`
    <button class="exercise-button nav-button" data-page="1" ${t===1?"disabled":""}>
      <svg class="test-svg">
        <use href="./img/sprite.svg#icon-two-arrow-left"></use>
      </svg>
    </button>
  `;const c=t===1?"disabled":"",p=Math.max(1,t-1);i+=`
    <button class="exercise-button nav-button" data-page="${p}" ${c}>
      <svg class="test-svg">
        <use href="./img/sprite.svg#icon-one-arrow-left"></use>
      </svg>
    </button>
  `,r>1&&(i+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let u=r;u<=n;u++){const M=u===Number(t)?"active":"";i+=`<button class="exercise-button ${M}">${u}</button>`}n<e&&(i+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`);const _=t===e?"disabled":"",d=Math.min(e,t+1);i+=`
    <button class="exercise-button nav-button" data-page="${d}" ${_}>
      <svg class="test-svg">
        <use href="./img/sprite.svg#icon-one-arrow-right"></use>
      </svg>
    </button>
  `,i+=`
    <button class="exercise-button nav-button" data-page="${e}" ${t===e?"disabled":""}>
      <svg class="test-svg">
        <use href="./img/sprite.svg#icon-two-arrow-right"></use>
      </svg>
    </button>
  `,s.innerHTML=i}const f="https://your-energy.b.goit.study/api";let C="bodypart",x=1,m=1;async function V(){try{const e=document.querySelector(".article-quote_text"),t=document.querySelector(".article-quote_author");if(!e||!t){console.warn("[fetch.js] Quote elements not found in DOM");return}const o=await(await fetch(`${f}/quote`)).json();e.textContent=o.quote,t.textContent=o.author}catch(e){console.error("Error fetching quote:",e)}}async function D(e=x){try{const s=await(await fetch(`${f}/filters?filter=Muscles&page=${e}&limit=12`)).json();m=s.totalPages,b(m,e),A(s.results)}catch(t){console.error("Error fetching muscles:",t)}}async function B(e=x,t=C){try{const o=await(await fetch(`${f}/exercises?&${t}&page=${e}&limit=10`)).json();m=Math.ceil(o.totalPages/10),b(m,e),P(o.results)}catch(s){console.error("Error fetching parts:",s)}}async function U(e=x){try{const s=await(await fetch(`${f}/filters?filter=Equipment&page=${e}&limit=12`)).json();m=s.totalPages,b(m,e),O(s.results)}catch(t){console.error("Error fetching equipment:",t)}}async function v(e){try{const s=await(await fetch(`${f}/exercises/${e}`)).json();k(s)}catch(t){console.error("Error fetching modal:",t)}}async function N(e=0){try{const s=await(await fetch(`${f}/exercises/${e}`)).json();console.log("Fetched favorite exercise:",s),R(s)}catch(t){console.error("Error fetching modal:",t)}}const L=Object.freeze(Object.defineProperty({__proto__:null,fetchEquipment:U,fetchFavorites:N,fetchModal:v,fetchMuscles:D,fetchParts:B,fetchQuote:V},Symbol.toStringTag,{value:"Module"}));function z(e){const t=document.querySelector(".exercise-modal");t&&(t.classList.add("is-active"),v(e))}function W(e){const t=e.target.closest(".start-link");if(!t)return!1;e.preventDefault(),e.stopPropagation();const s=t.id;return z(s),!0}export{B as a,U as b,N as c,F as d,D as f,w as g,W as h,S as i,z as o,R as r,Q as s};
//# sourceMappingURL=modal-utils-BNKwfl0K.js.map
