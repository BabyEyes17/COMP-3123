import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request config if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Process response data if needed
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
