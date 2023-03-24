import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

const myApiCall = async () => {
  try {
    const response = await api.get('/emailjs');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default myApiCall;