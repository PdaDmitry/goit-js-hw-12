// export class ImageServer {
//   constructor() {
//     // this.q = q;
//     this.KEY = '42263617-81d7156b9f7b88cd7b1016c2a';
//     // this.URL = `https://pixabay.com/api/?key=${this.KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`;
//   }

//   getImages(value) {
//     const url = `https://pixabay.com/api/?key=${this.KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`;
//     return fetch(url).then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
//   }
// }
import axios from 'axios';

export class ImageServer {
  #pageSize = 15;

  constructor() {
    this.KEY = '42263617-81d7156b9f7b88cd7b1016c2a';
    this.URL = 'https://pixabay.com';
    this.resources = '/api/';
  }

  async getImages(value, currentPage) {
    const params = {
      key: this.KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: this.#pageSize,
      page: currentPage,
    };

    const url = `${this.URL}${this.resources}`;

    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  }

  get pageSize() {
    return this.#pageSize;
  }
}