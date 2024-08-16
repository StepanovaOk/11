const input = document.querySelector('.input-name');
const btn = document.querySelector('.search-btn');
import fetchAPI from './js/pixabay-ipi';

btn.addEventListener('click', event => {
  event.preventDefault();

  const BASE_URL = 'https://pixabay.com';
  const END_URL = '/api/';
  const PARAMS = new URLSearchParams({
    key: '42310325-d8e2b88bd4f4d7db9639050a5',
    q: input.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}${END_URL}?${PARAMS}`;

  fetchAPI();
  console.log(data);
});
