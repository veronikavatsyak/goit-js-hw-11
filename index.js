import{i as a,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="47439400-a7b90577fcfc36b5c66ee25ec",h="https://pixabay.com/api/";function d(r){const o=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})}function p(r){return r.map(({webformatURL:o,largeImageURL:i,tags:n,likes:e,views:t,comments:s,downloads:f})=>`
    <li class="gallery-item">
    <a href="${i}"><img src="${o}" alt="${n}" width="360">
    <ul class="info-list">
    <li class="info-item">
    <h2 class="info-title">Likes</h2>
    <p class="info-text">${e}</p>
    </li>
    <li class="info-item">
     <h2 class="info-title">Views</h2>
    <p class="info-text">${t}</p>
    </li>
    <li class="info-item">
     <h2 class="info-title">Comments</h2>
    <p class="info-text">${s}</p>
    </li>
    <li class="info-item">
     <h2 class="info-title">Dowloads</h2>
    <p class="info-text">${f}</p>
    </li>
    </ul>
    </a>
    </li>`).join("")}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=document.querySelector(".form");g.addEventListener("submit",y);function y(r){r.preventDefault();const{text:o}=r.target.elements;if(!o.value.trim()){a.error({position:"topRight",message:"Please, fill the field",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"red",iconColor:"white"});return}l.classList.remove("is-hidden"),c.innerHTML="",d(o.value.trim()).then(i=>{l.classList.add("is-hidden"),i.hits.length===0?a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"red",iconColor:"white"}):(c.innerHTML=p(i.hits),L.refresh())}).catch(i=>{l.classList.add("is-hidden"),a.error({position:"topRight",title:"Error",message:i.message})}).finally(()=>r.target.reset())}const L=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=index.js.map
