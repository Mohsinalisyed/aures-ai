'use client'
import Axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

// Create an Axios instance
export const axios = Axios.create({
  baseURL: "https://api.aureusai.ideofuzion.com",
});

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (typeof window !== "undefined") {
    const loginData = localStorage.getItem("loginData");

    if (loginData) {
      try {
        const parsedLoginData = JSON.parse(loginData);
        const token = parsedLoginData.token;
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Error parsing login data:", error);
      }
    }

    // Set additional headers
    config.headers["ngrok-skip-browser-warning"] = "true";
  }
  if (config.url && config.url === `/users/upload-image`) {
    if (config.method === "post" || config.method === "put") {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }
  }
  return config;
};

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    const status = error.response?.status || 200;

    if (status === 401) {
      localStorage.clear();
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);
