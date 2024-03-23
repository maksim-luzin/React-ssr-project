import axios from 'axios';
import { Env } from 'enums';
import { getEnv } from 'helpers';

const baseURL = globalThis?.window
  ? window.store?.baseUrl || window.__PRELOADED_STATE__?.baseUrl
  : getEnv(Env.Url)

export const instance = axios.create({
  withCredentials: false,
  baseURL
});
