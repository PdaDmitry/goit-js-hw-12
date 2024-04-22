var M=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)};var f=(t,e,a)=>(M(t,e,"read from private field"),a?a.call(t):e.get(t)),y=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)};import{a as H,S as $,i as E}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();var d;class I{constructor(){y(this,d,15);this.KEY="42263617-81d7156b9f7b88cd7b1016c2a",this.URL="https://pixabay.com",this.resources="/api/"}async getImages(e,a){const i={key:this.KEY,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f(this,d),page:a},s=`${this.URL}${this.resources}`;try{return(await H.get(s,{params:i})).data}catch(r){throw new Error(r.response.status)}}get pageSize(){return f(this,d)}}d=new WeakMap;function T(){return`
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
  </div>`}function g(t){return t.map(a=>{const{webformatURL:i,largeImageURL:s,tags:r,likes:c,views:S,comments:w,downloads:q}=a;return`<li class="gallery-item">
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
        <span class="item-quantity">${c}</span>
      </li>
       <li class="info-item">
        <span class="info-item">Views</span>
        <span class="item-quantity">${S}</span>
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

`)}const z=T(),P=document.querySelector("body");P.insertAdjacentHTML("afterbegin",z);const x=document.querySelector("form"),L=document.querySelector(".loader"),b=document.querySelector("[data-loader]"),o=document.querySelector(".gallery");document.querySelector("input");document.querySelector("button");const n=document.querySelector(".btn-load"),h=new I,v=new $(".gallery a");function u(t){return E.show({message:t,messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",iconUrl:"./img/error.svg"})}let l,p,m;x.addEventListener("submit",async t=>{if(t.preventDefault(),n.classList.add("is-hidden"),o.innerHTML="",l=1,m=t.target.elements.picture.value.trim(),!m){t.target.reset(),u("The form field must be filled in!");return}L.classList.remove("is-hidden");try{const e=await h.getImages(m,l);if(p=Math.ceil(e.totalHits/h.pageSize),e.hits.length===0)u("Sorry, there are no images matching your search query. Please try again!");else if(l>=p){n.classList.add("is-hidden");const a=g(e.hits);o.innerHTML=a,u("We're sorry, but you've reached the end of search results.")}else{const a=g(e.hits);o.innerHTML=a,n.classList.remove("is-hidden")}v.refresh()}catch(e){console.log(e)}finally{L.classList.add("is-hidden"),t.target.reset()}});n.addEventListener("click",A);async function A(t){t.preventDefault(),n.classList.add("is-hidden"),b.classList.remove("is-hidden"),l+=1;try{const e=await h.getImages(m,l);if(p=Math.ceil(e.totalHits/h.pageSize),l>=p){n.classList.add("is-hidden");const i=g(e.hits);o.insertAdjacentHTML("beforeend",i),u("We're sorry, but you've reached the end of search results.")}else{const i=g(e.hits);o.insertAdjacentHTML("beforeend",i),n.classList.remove("is-hidden")}const a=o.firstElementChild.getBoundingClientRect().height;window.scrollBy({behavior:"smooth",top:a*2}),v.refresh()}catch(e){console.log(e)}finally{b.classList.add("is-hidden")}}
//# sourceMappingURL=commonHelpers.js.map
