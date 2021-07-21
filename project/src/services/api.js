import axios from 'axios';
import { StorageKey } from '../const';
import { setApiTokenHeader } from '../utils';

const BACKEND_URL = 'https://7.react.pages.academy/six-cities';
const TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const token = localStorage.getItem(StorageKey.TOKEN) ?? '';

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
  });
  setApiTokenHeader(api, token);

  const onSuccess = (response) => response;
  const onFail = (err) => {
    const { response } = err;
    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);
  return api;
};

export { createAPI };
