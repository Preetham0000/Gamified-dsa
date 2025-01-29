// Importing necessary functions from Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Importing the User type definition for type safety
import type { User } from '../../types';
// Importing the authentication service functions for login and registration
import * as authService from '../../services/auth';

// Defining the shape of the user state
interface UserState {
  currentUser: User | null; // Represents the currently logged-in user, or null if not authenticated
  isAuthenticated: boolean; // Indicates whether the user is authenticated
  loading: boolean; // Indicates whether a login or registration request is in progress
  error: string | null; // Holds error message in case of failure
}

// Initial state of the user slice
const initialState: UserState = {
  // Retrieving stored user information from localStorage, if available
  currentUser: JSON.parse(localStorage.getItem('user') || 'null'),
  // Checking if the user is authenticated based on a token stored in localStorage
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
};

// Asynchronous action for logging in a user
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials: { email: string; password: string }) => {
    // Calling the login API service and awaiting the response
    const response = await authService.login(credentials);
    // Storing the logged-in user information in localStorage
    localStorage.setItem('user', JSON.stringify(response));
    // Returning the user data for updating the state
    return response;
  }
);

// Asynchronous action for registering a user
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData: { username: string; email: string; password: string }) => {
    // Calling the register API service and awaiting the response
    const response = await authService.register(userData);
    // Storing the registered user information in localStorage
    localStorage.setItem('user', JSON.stringify(response));
    // Returning the user data for updating the state
    return response;
  }
);

// Creating the user slice with actions and reducers
const userSlice = createSlice({
  name: 'user', // Name of the slice
  initialState, // Setting the initial state
  reducers: {
    // Action to log out the user and clear the stored data
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    // Action to clear any error message
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handling different states (pending, fulfilled, rejected) for the loginUser async action
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload; // Setting the user data to the state
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // Setting an error message if the login failed
        state.error = action.error.message || 'Login failed';
      })
      // Handling different states (pending, fulfilled, rejected) for the registerUser async action
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload; // Setting the user data to the state
        state.isAuthenticated = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        // Setting an error message if registration failed
        state.error = action.error.message || 'Registration failed';
      });
  },
});

// Exporting the actions for use in components
export const { logout, clearError } = userSlice.actions;
// Exporting the reducer to be included in the store
export default userSlice.reducer;
