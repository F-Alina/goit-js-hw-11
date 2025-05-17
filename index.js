import{a as m,S as p,i as c}from"./assets/vendor-DqUhfJqr.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(o){const i=new URLSearchParams({key:"50274230-e09cffa3049f5c538182e0b60",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`https://pixabay.com/api/?${i}`).then(r=>r.data).catch(r=>{throw r})}let l;const f=document.querySelector(".loader"),h=document.querySelector(".gallery");function g(o){return o.map(({webformatURL:i,largeImageURL:r,tags:n,likes:e,views:t,comments:a,downloads:d})=>`<li class="gallery-item">
      <a class="gallery-link" href="${r}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${n}"
          width = "360"
        />
      </a>
      <div class="gallery-content">
		<ul class="gallery-content-wrapper">
			<li>Likes<span>${e}</span></li>
			<li>Views<span>${t}</span></li>
			<li>Comments<span>${a}</span></li>
			<li>Downloads<span>${d}</span></li>
		</ul>
	</div>
    </li>`).join("")}function L(){h.innerHTML=""}function b(){f.classList.add("visible")}function s(){f.classList.remove("visible")}function S(){l=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function q(){l&&l.refresh()}const u=document.querySelector(".form"),v=document.querySelector(".gallery"),w=document.querySelector(".form-search-input");document.querySelector(".loader");S();u.addEventListener("submit",async o=>{o.preventDefault(),s();const i=w.value.trim();if(!i){c.warning({title:"Warning",message:"Please fill in the input field!"});return}L(),b(),y(i).then(r=>{s(),r.hits.length||c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),v.innerHTML=g(r.hits),q(),u.reset()}).catch(r=>{s(),console.log(r)})});
//# sourceMappingURL=index.js.map
