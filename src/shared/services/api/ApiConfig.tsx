import axios from 'axios';

export const ApiConfig = () => {
  return axios.create({
    baseURL: 'http://localhost:3001',
  });
};
