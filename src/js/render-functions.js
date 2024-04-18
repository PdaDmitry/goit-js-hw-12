export function createGalleryMarkup() {
  return `
   <form class="form">
    <input class="input" type="text" name="picture" placeholder="Search images..." />
    <button class="btn-search" type="submit">Search</button>
  </form>
  <span class="loader">Loading images, please wait...</span>
  <ul class="gallery"></ul>
  <button class="btn-load btn-search" type="submit">Load more</button>
  <span class="loader" data-loader>Loading images, please wait...</span>`;
}
