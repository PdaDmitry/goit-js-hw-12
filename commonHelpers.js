var M=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var y=(s,e,t)=>(M(s,e,"read from private field"),t?t.call(s):e.get(s)),L=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)};import{a as H,S as $,i as I}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();var u;class T{constructor(){L(this,u,15);this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL="https://pixabay.com",this.resources="/api/"}async getImages(e,t){const o={key:this.KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y(this,u),page:t},a=`${this.URL}${this.resources}`;try{return(await H.get(a,{params:o})).data}catch(r){throw new Error(r.response.status)}}get pageSize(){return y(this,u)}}u=new WeakMap;function z(){return`
  <div class="container">
   <form class="form">
    <input class="input" type="text" name="picture" placeholder="Search images..." />
    <button class="btn-search" type="submit">Search</button>
  </form>
  <span class="loader is-hidden">Loading images, please wait...</span>
  <ul class="gallery"></ul>
  <div class="cont-load">
  <button class="btn-load btn-search is-hidden" type="button">Load more</button>
  <span class="loader second-load is-hidden" data-loader>Loading images, please wait...</span>
  </div>
  </div>`}function p(s){return s.map(t=>{const{webformatURL:o,largeImageURL:a,tags:r,likes:l,views:v,comments:w,downloads:q}=t;return`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${o}"
      data-source="${a}"
      alt=""
      title="${r}"
    />
    <ul class="image-info">
      <li class="info-item">
        <span class="info-item">Likes</span>
        <span class="item-quantity">${l}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${v}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Comments</span>
        <span class="item-quantity">${w}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Downloads</span>
        <span class="item-quantity">${q}</span>
      </li>
    </ul>
  </a>
  </li>`}).join(`

`)}const E=z(),P=document.querySelector("body");P.insertAdjacentHTML("afterbegin",E);const x=document.querySelector("form"),b=document.querySelector(".loader"),S=document.querySelector("[data-loader]"),c=document.querySelector(".gallery");document.querySelector("input");document.querySelector("button");const i=document.querySelector(".btn-load"),f=new T,h=new $(".gallery a");function m(s){return I.show({message:s,messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"})}let n,d,g;x.addEventListener("submit",async s=>{if(s.preventDefault(),i.classList.add("is-hidden"),c.innerHTML="",g=s.target.elements.picture.value.trim(),!g){s.target.reset(),m("The form field must be filled in!");return}b.classList.remove("is-hidden"),n=1;try{const e=await f.getImages(g,n);if(d=Math.ceil(e.totalHits/f.pageSize),console.log(e),e.hits.length===0)m("Sorry, there are no images matching your search query. Please try again!");else if(n>=d){i.classList.add("is-hidden");const t=p(e.hits);c.innerHTML=t,m("We're sorry, but you've reached the end of search results."),h.refresh()}else{console.log(e.hits);const t=p(e.hits);c.innerHTML=t,i.classList.remove("is-hidden"),h.refresh()}}catch(e){console.log(e)}finally{b.classList.add("is-hidden"),s.target.reset()}});i.addEventListener("click",A);async function A(s){s.preventDefault(),n+=1,i.classList.add("is-hidden"),S.classList.remove("is-hidden");try{const e=await f.getImages(g,n);if(d=Math.ceil(e.totalHits/f.pageSize),console.log(d),n>=d){i.classList.add("is-hidden");const t=p(e.hits);c.insertAdjacentHTML("beforeend",t),m("We're sorry, but you've reached the end of search results."),h.refresh()}else{const t=p(e.hits);c.insertAdjacentHTML("beforeend",t),i.classList.remove("is-hidden"),h.refresh()}}catch(e){console.log(e)}finally{S.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
