import"./assets/vendor-9dabe76c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function c(){return`
   <form class="form">
    <input class="input" type="text" name="picture" placeholder="Search images..." />
    <button class="btn-search" type="submit">Search</button>
  </form>
  <span class="loader">Loading images, please wait...</span>
  <ul class="gallery"></ul>
  <button class="btn-load btn-search" type="submit">Load more</button>
  <span class="loader" data-loader>Loading images, please wait...</span>`}const a=c(),l=document.querySelector("body");l.insertAdjacentHTML("afterbegin",a);document.querySelector("form");const i=document.querySelector(".loader");i.classList.add("is-hidden");const u=document.querySelector("[data-loader]");u.classList.add("is-hidden");document.querySelector(".gallery");document.querySelector("input");document.querySelector("button");document.querySelector(".btn-load");
//# sourceMappingURL=commonHelpers.js.map
