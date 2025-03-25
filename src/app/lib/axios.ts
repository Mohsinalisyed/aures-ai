'use client'
import Axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

// Create an Axios instance
export const axios = Axios.create({
  baseURL: "http://localhost:3001",
});

// Request interceptor to attach token to headers
const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  // Check if running on the client side
  if (typeof window !== "undefined") {
    // Retrieve login data from localStorage
    const loginData = localStorage.getItem("loginData");

    // Ensure headers are initialized
    config.headers = config.headers || {};

    // Check if loginData exists and if it's valid JSON
    if (loginData) {
      try {
        // Parse the login data and extract the token
        const parsedLoginData = JSON.parse(loginData);
        const token = parsedLoginData.token;
        // If token exists, set it in the Authorization header
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Error parsing login data:", error);
      }
    }

    // Set additional headers
    config.headers["ngrok-skip-browser-warning"] = "true"; // Skip Ngrok warning
    config.headers["Accept"] = "application/json"; // Set Accept header to application/json
  }

  return config;
};

// Set up the request interceptor
axios.interceptors.request.use(authRequestInterceptor);

// Set up the response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // Return only the data from the response
  },
  (error) => {
    const status = error.response?.status || 200;

    if (status === 401) {
      localStorage.clear();
    }

    return Promise.reject(error); // Reject the promise with the error
  }
);
