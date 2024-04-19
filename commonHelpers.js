var L=Object.defineProperty;var S=(s,e,t)=>e in s?L(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var d=(s,e,t)=>(S(s,typeof e!="symbol"?e+"":e,t),t),q=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var u=(s,e,t)=>(q(s,e,"read from private field"),t?t.call(s):e.get(s)),m=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};import{a as w,S as v,i as $}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var l;class z{constructor(){m(this,l,15);d(this,"total_pages",1);this.KEY="42263617-81d7156b9f7b88cd7b1016c2a"}async getImages(e){const t=`https://pixabay.com/api/?key=${this.KEY}&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`;try{return(await w.get(t)).data}catch(i){throw new Error(i.response.status)}}get pageSize(){return u(this,l)}}l=new WeakMap;function E(){return`
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
  </div>`}function I(s){return s.map(t=>{const{webformatURL:i,largeImageURL:a,tags:r,likes:o,views:y,comments:h,downloads:b}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${i}"
      data-source="${a}"
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
        <span class="item-quantity">${y}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${h}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${b}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const M=E(),O=document.querySelector("body");O.insertAdjacentHTML("afterbegin",M);const T=document.querySelector("form"),g=document.querySelector(".loader");g.classList.add("is-hidden");const x=document.querySelector("[data-loader]");x.classList.add("is-hidden");const p=document.querySelector(".gallery");document.querySelector("input");document.querySelector("button");const n=document.querySelector(".btn-load");n.classList.add("is-hidden");const P=new z,H=new v(".gallery a");function f(s){return $.show({message:s,messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"})}let c;T.addEventListener("submit",async s=>{if(s.preventDefault(),p.innerHTML="",c=s.target.elements.picture.value.trim(),!c){s.target.reset(),n.classList.add("is-hidden"),f("The form field must be filled in!");return}P.getImages(c).then(e=>{if(e.hits.length===0)n.classList.add("is-hidden"),f("Sorry, there are no images matching your search query. Please try again!");else{console.log(e.hits);const t=I(e.hits);p.innerHTML=t,n.classList.remove("is-hidden"),H.refresh()}}).catch(e=>{console.log(e)}).finally(()=>{g.classList.add("is-hidden"),s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
