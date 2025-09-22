// axios.js
import axios from "axios";

import { STORAGE } from "./storage";
 
const instance = axios.create({
  baseURL: "http://localhost:3011/api",
});

// Request Interceptor: Attach language and token
instance.interceptors.request.use(
  (config) => {
    // Get current language
    // Get token from localStorage
    const token = STORAGE.getToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
 
export default instance;