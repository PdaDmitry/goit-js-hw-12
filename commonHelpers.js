var L=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var c=(t,e,a)=>(L(t,e,"read from private field"),a?a.call(t):e.get(t)),m=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)};import{a as b,S,i as w}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();var n;class q{constructor(){m(this,n,15);this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL="https://pixabay.com",this.resources="/api/"}async getImages(e){const a={key:this.KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:c(this,n)},i=`${this.URL}${this.resources}`;try{return(await b.get(i,{params:a})).data}catch(s){throw new Error(s.response.status)}}get pageSize(){return c(this,n)}}n=new WeakMap;function v(){return`
  <div class="container">
   <form class="form">
    <input class="input" type="text" name="picture" placeholder="Search images..." />
    <button class="btn-search" type="submit">Search</button>
  </form>
  <span class="loader">Loading images, please wait...</span>
  <ul class="gallery"></ul>
  <div class="cont-load">
  <button class="btn-load btn-search" type="submit">Load more</button>
  <span class="loader second-load" data-loader>Loading images, please wait...</span>
  </div>
  </div>`}function $(t){return t.map(a=>{const{webformatURL:i,largeImageURL:s,tags:r,likes:o,views:f,comments:h,downloads:y}=a;return`<li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${s}"
      alt=""
      title="${r}"
    />
    <ul class="image-info">
      <li class="info-item">
        <span class="info-item">Likes</span>
        <span class="item-quantity">${o}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${f}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${h}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${y}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const z=v(),E=document.querySelector("body");E.insertAdjacentHTML("afterbegin",z);const I=document.querySelector("form"),u=document.querySelector(".loader");u.classList.add("is-hidden");const M=document.querySelector("[data-loader]");M.classList.add("is-hidden");const p=document.querySelector(".gallery");document.querySelector("input");document.querySelector("button");const l=document.querySelector(".btn-load");l.classList.add("is-hidden");const O=new q,T=new S(".gallery a");function g(t){return w.show({message:t,messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"})}let d;I.addEventListener("submit",async t=>{if(t.preventDefault(),p.innerHTML="",d=t.target.elements.picture.value.trim(),!d){t.target.reset(),l.classList.add("is-hidden"),g("The form field must be filled in!");return}u.classList.remove("is-hidden");try{const e=await O.getImages(d);if(console.log(e),e.hits.length===0)l.classList.add("is-hidden"),g("Sorry, there are no images matching your search query. Please try again!");else{console.log(e.hits);const a=$(e.hits);p.innerHTML=a,l.classList.remove("is-hidden"),T.refresh()}}catch(e){console.log(e)}finally{u.classList.add("is-hidden"),t.target.reset()}});
//# sourceMappingURL=commonHelpers.js.map
