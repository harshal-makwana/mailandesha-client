import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthPages/features/AuthSlice'; // Import authReducer

// Define RootState based on the slice reducers
export type RootState = ReturnType<typeof store.getState>;

// Configure the Redux store with the authReducer
const store = configureStore({
  reducer: {
    auth: authReducer, // Add the authReducer to the store
  },
});

// Export AppDispatch and RootState types for use in the application
export type AppDispatch = typeof store.dispatch;

export default store;
