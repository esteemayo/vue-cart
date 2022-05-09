import axios from 'axios';
import logger from './logService';

const authFetch = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  Accept: 'application/json',
});

authFetch.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    console.log('An unexpected error occurred');
  }

  return Promise.reject(error);
});

const http = {
  get: authFetch.get,
  post: authFetch.post,
  put: authFetch.put,
  delete: authFetch.delete,
};

export default http;
