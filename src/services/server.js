import axios from "axios";

URL = "http://127.0.0.1:8000/api";

const AXIOS = axios.create({
  baseURL: URL,
});

AXIOS.interceptors.request.use(function (config) {
  config.baseURL = URL;
  return config;
});

export { AXIOS };
