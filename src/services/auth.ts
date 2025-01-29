// Importing the API instance for making requests
import api from './api';
// Importing the User type for type safety
import { User } from '../types';

// Defining the shape of the login credentials for type safety
interface LoginCredentials {
  email: string;  // User's email address
  password: string;  // User's password
}

// Extending LoginCredentials to include username for the registration data
interface RegisterData extends LoginCredentials {
  username: string;  // User's chosen username for registration
}

// Function to log in a user
export const login = async (credentials: LoginCredentials) => {
  // Making an API POST request to the login endpoint with the provided credentials
  const { data } = await api.post('/users/login', credentials);
  
  // Storing the received authentication token in localStorage
  localStorage.setItem('token', data.token);
  
  // Returning the user data received from the API
  return data;
};

// Function to register a new user
export const register = async (userData: RegisterData) => {
  // Making an API POST request to the register endpoint with the user data
  const { data } = await api.post('/users/register', userData);
  
  // Storing the received authentication token in localStorage
  localStorage.setItem('token', data.token);
  
  // Returning the user data received from the API
  return data;
};

// Function to log out a user
export const logout = () => {
  // Removing the authentication token from localStorage to log the user out
  localStorage.removeItem('token');
};
