(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const p=document.querySelector(".exercise-muscles_list"),d=document.querySelector(".exercise-parts_list"),u=document.querySelector(".exercise-equipment_list");function x(e){p.innerHTML="",u.innerHTML="",d.innerHTML="";const t=e.map(s=>`
        <li class="exercise-equipment_item">
            <img src="${s.imgURL}" alt="${s.name}" class="exercise-equipment_img" />
            <div class="exercise-equipment_overlay">
            <h3 class="exercise-equipment_header">${s.name}</h3>
            <p class="exercise-equipment_text">${s.filter}</p></div>
          
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",t)}function $(e){p.innerHTML="",u.innerHTML="",d.innerHTML="";const t=e.map(s=>`
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
      `).join("");d.innerHTML=t}function b(e){p.innerHTML="",u.innerHTML="",d.innerHTML="";const t=e.map(s=>`
        <li class="exercise-muscles_item">
            <img src="${s.imgURL}" alt="${s.name}" class="exercise-muscles_img" />
            <div class="exercise-muscles_overlay">
            <h3 class="exericise-muscles_header">${s.name}</h3>
            <p class="exercise-muscles_text">${s.filter}</p></div>
            
        </li>
      `).join("");p.innerHTML=t}function w(e){const t=document.querySelector(".favorites-wrapper");if(!t)return;if(e===0){t.innerHTML=`
      <div class="favorites-empty">
        <p>It appears that you haven't added any exercises to your favorites yet. To get started, go to the exercises catalog and choose the ones you like.</p>
      </div>`;return}const s=`<li class="exercise-parts_item">
          <div class="parts-upper_container">
            <div class="parts-rating_container">
              <p class="parts-type">WORKOUT</p>
              <svg class="parts-trash_svg">
                <use href="../img/sprite.svg#icon-trash"></use>
              </svg>
              <p class="parts-rating">${e.rating}</p>
              <svg class="parts-star_svg">
                <use href="../img/sprite.svg#icon-star"></use>
              </svg>
            </div>
            <div class="parts-start_container">
              <a href="" id="${e._id}" class="start-link">Start</a>
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
      `;t.insertAdjacentHTML("beforeend",s)}const m="favorites-exercises";function f(){return JSON.parse(localStorage.getItem(m)||"[]")}function h(e){return f().some(i=>i.id===e.id)}function H(e){const t=f(),s=JSON.stringify([...t,e]);localStorage.setItem(m,s)}function E(e){const t=f(),s=JSON.stringify(t.filter(i=>i.id!==e.id));localStorage.setItem(m,s)}const v=document.querySelector(".exercise-modal_content");function L(e){v.innerHTML="";const t=h({id:e._id}),s=`
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
              ${t?"Remove from favorites":"Add to favorites"}
              <svg class="modal-favorites_svg">
                <use href="../img/sprite.svg#icon-heart1"></use>
              </svg></button
            ><button class="modal-rating_btn">Give a rating</button>
          </div>
        </div>
    `;v.innerHTML=s}const _=document.querySelector(".exercise-btn-container");function g(e,t){if(!_)return;const s=3;let i,r;if(e<=s)i=1,r=e;else{let n=Math.floor(s/2);i=t-n,r=t+n,i<=1&&(i=1,r=s),r>=e&&(i=e-s+1,r=e)}let a="";i>1&&(a+='<button class="exercise-button" data-page="1">1</button><span>...</span>');for(let n=i;n<=r;n++){const y=n===Number(t)?"active":"";a+=`<button class="exercise-button ${y}">${n}</button>`}r<e&&(a+=`<span>...</span><button class="exercise-button" data-page="${e}">${e}</button>`),_.innerHTML=a}const T=document.querySelector(".article-quote_text"),M=document.querySelector(".article-quote_author"),l="https://your-energy.b.goit.study/api";let q="bodypart",o=1,c=1;async function O(){try{const t=await(await fetch(`${l}/quote`)).json();T.textContent=t.quote,M.textContent=t.author}catch(e){console.error("Error fetching quote:",e)}}async function F(e=o){try{const s=await(await fetch(`${l}/filters?filter=Muscles&page=${e}&limit=12`)).json();c=s.totalPages,g(c,o),b(s.results)}catch(t){console.error("Error fetching muscles:",t)}}async function j(e=o,t=q){try{const i=await(await fetch(`${l}/exercises?&${t}&page=${e}&limit=10`)).json();c=Math.ceil(i.totalPages/10),g(c,o),$(i.results)}catch(s){console.error("Error fetching parts:",s)}}async function P(e=o){try{const s=await(await fetch(`${l}/filters?filter=Equipment&page=${e}&limit=12`)).json();c=s.totalPages,g(c,o),x(s.results)}catch(t){console.error("Error fetching equipment:",t)}}async function C(e){try{const s=await(await fetch(`${l}/exercises/${e}`)).json();L(s)}catch(t){console.error("Error fetching modal:",t)}}async function N(e=0){try{const s=await(await fetch(`${l}/exercises/${e}`)).json();console.log("Fetched favorite exercise:",s),w(s)}catch(t){console.error("Error fetching modal:",t)}}function S(){const e=document.querySelectorAll(".nav-link"),t=window.location.pathname;e.forEach(s=>{const i=s.closest(".nav-item"),r=s.getAttribute("href").replace("./",""),a=(t==="/"||t.endsWith("index.html"))&&r.includes("index.html"),n=t.endsWith(r)&&r!=="";a||n?i.classList.add("active"):i.classList.remove("active")})}async function k(e){if(!document.startViewTransition){window.location.href=e;return}const s=await(await fetch(e)).text(),r=new DOMParser().parseFromString(s,"text/html"),a=r.querySelector("body").innerHTML,n=r.title;document.startViewTransition(()=>{document.body.innerHTML=a,document.title=n,window.history.pushState({},"",e),S(),window.dispatchEvent(new Event("DOMContentLoaded"))})}export{F as a,C as b,H as c,j as d,P as e,O as f,f as g,w as h,h as i,N as j,E as r,k as s,S as u};
//# sourceMappingURL=transition-H7k7xtWo.js.map
