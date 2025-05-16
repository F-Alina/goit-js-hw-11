import{a as d,S as m,i as y}from"./assets/vendor-DqUhfJqr.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(a){const o=new URLSearchParams({key:"50274230-e09cffa3049f5c538182e0b60",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`https://pixabay.com/api/?${o}`).then(t=>t.data).catch(t=>{throw t})}let l;const u=document.querySelector(".loader"),h=document.querySelector(".gallery");function g(a){return a.map(({webformatURL:o,largeImageURL:t,tags:s,likes:e,views:r,comments:i,downloads:f})=>`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${o}"
          alt="${s}"
          width = "360"
        />
      </a>
      <div class="gallery-content">
		<ul class="gallery-content-wrapper">
			<li>Likes<span>${e}</span></li>
			<li>Views<span>${r}</span></li>
			<li>Comments<span>${i}</span></li>
			<li>Downloads<span>${f}</span></li>
		</ul>
	</div>
    </li>`).join("")}function L(){h.innerHTML=""}function b(){u.classList.add("visible")}function n(){u.classList.remove("visible")}function S(){l=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function q(){l&&l.refresh()}const c=document.querySelector(".form-search"),v=document.querySelector(".gallery"),w=document.querySelector(".form-search-input");document.querySelector(".loader");S();c.addEventListener("submit",async a=>{a.preventDefault(),n();const o=w.value.trim();L(),b(),p(o).then(t=>{n(),t.hits.length||y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),v.innerHTML=g(t.hits),q(),c.reset()}).catch(t=>{n(),console.log(t)})});
//# sourceMappingURL=index.js.map
