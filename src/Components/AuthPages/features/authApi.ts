import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginUser = createAsyncThunk(
  'https://mailandesha.onrender.com/api/auth/',
  async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`/login`, credentials);
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  'https://mailandesha.onrender.com/api/auth/',
  async (userData: { email: string; password: string }) => {
    await axios.post(`/register`, userData);
  }
);

export const googleAuth = createAsyncThunk(
  'https://mailandesha.onrender.com/api/',
  async (token: string) => {
    const response = await axios.post(`/auth/google`, { token });
    return response.data;
  }
);
