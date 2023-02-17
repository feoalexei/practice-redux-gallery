import axios from 'axios';

export const imageService = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '32363221-575cc77647989ad3c866cfeee',
  },
});

export const fetchImages = async () => {
  const { data } = await imageService.get('');
  return data;
};
