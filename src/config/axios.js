import axios from 'axios';

import { ACCESS_TOKEN } from '../consts/api';

axios.defaults.baseURL = 'https://eshop-deve.herokuapp.com';

axios.interceptors.request.use((config) => {
  const configData = { ...config };

  configData.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;

  return configData;
}, (error) => Promise.reject(error));
