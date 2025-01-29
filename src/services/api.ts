// Importing the axios library to make HTTP requests
import axios from 'axios';

// Defining the base API URL for the backend
const API_URL = 'http://localhost:5000/api';

// Creating an axios instance with custom configuration
const api = axios.create({
  // Setting the base URL for all requests made through this instance
  baseURL: API_URL,
  
  // Defining default headers for requests
  headers: {
    'Content-Type': 'application/json',  // Telling the server that we are sending/receiving JSON
  },
});

// Adding an interceptor to include the auth token in request headers (if it exists)
api.interceptors.request.use((config) => {
  // Retrieving the auth token from localStorage
  const token = localStorage.getItem('token');
  
  // If a token exists, adding it to the request headers
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;  // Setting the Authorization header with Bearer token
  }
  
  // Returning the updated request configuration
  return config;
});

// Exporting the axios instance for use in other parts of the application
export default api;
