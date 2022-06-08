import axios from 'axios';

import { ACCESS_TOKEN, URL } from '../consts/api';

axios.defaults.baseURL = URL;

axios.interceptors.request.use((config) => {
  const configData = { ...config };

  configData.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;

  return configData;
}, (error) => Promise.reject(error));
