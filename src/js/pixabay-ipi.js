import url from './main.js';
import { renderPhoto } from './render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchAPI() {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
      renderPhoto(data);
    })
    .then(data => {
      if (data.length === 0) {
        iziToast.show({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      return data;
    })
    .catch(error => {
      iziToast.show({
        title: 'Oops, something wrong',
      });
    });
}

export default fetchAPI;
