// Importing necessary functions from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing the user reducer from the userSlice file
import userReducer from './slices/userSlice';

// Creating the Redux store with the configureStore function
export const store = configureStore({
  // Defining the root reducer and adding the user reducer
  reducer: {
    user: userReducer, // 'user' is the key, and userReducer handles actions related to the user state
  },
});

// Defining a type for the entire Redux state using the store's state
export type RootState = ReturnType<typeof store.getState>;
// Defining a type for the AppDispatch based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;
