import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
  key: '32406318-95ac449e3889e6de6047565d2',
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  }
});

export async function getImages(q, page = 1) {
  const data = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
    return data;
}