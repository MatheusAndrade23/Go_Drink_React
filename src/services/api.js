import axios from 'axios';

import config from '../config';

export const api = axios.create({
  baseURL: config.baseURL,
});

export const db = axios.create({
  baseURL: config.dbUrl,
});

export const createSession = async (email, password) => {
  return api.post('/sessions', { email, password });
};
