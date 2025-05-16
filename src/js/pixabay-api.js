import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';

function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: '50274230-e09cffa3049f5c538182e0b60',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`https://pixabay.com/api/?${searchParams}`)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}

export { getImagesByQuery };
