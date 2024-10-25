import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../services/authServices';
import { getFCMToken } from '../../utils/helper/firebaseServies';
import { supabase } from '../../utils/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';


// Async thunk to handle login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const loginSuccess = await loginUser(email, password);
      await Keychain.setGenericPassword('user', email);
      if (!loginSuccess.user) {
        throw new Error(loginSuccess.error?.message || 'Login failed');
      }

      const { access_token } = loginSuccess;
      if (!access_token) {
        throw new Error('Access token is missing');
      }

      const fcm_token = await getFCMToken();

      // Store session in AsyncStorage
      await AsyncStorage.setItem('session', JSON.stringify({
        user: loginSuccess.user,
        access_token,
        fcm_token,
        is_logged_in: true, // Optional, for clarity
      }));


      //AsyncStorage.setItem()
      // Update the user's login status in the database
      const { error } = await supabase
        .from('logged_in_user')
        .upsert(
          {
            email: email,
            fcm_token: fcm_token,
            is_logged_in: true,
            updated_at: new Date().toISOString(),
          },
          { onConflict: ['email'] }
        );

      if (error) {
        throw new Error('Failed to save user data');
      }

      return { user: loginSuccess.user, access_token, fcm_token, is_logged_in: true };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);






const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    access_token: null,
    fcm_token: null,
    userEmail: null,  // Store the user's email for future reference
    loading: false,
    error: null,
    isLoggedIn: null,  // Track login status
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle login

      
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.userEmail = action.payload.email;
        
        state.access_token = action.payload.access_token;
        state.fcm_token = action.payload.fcm_token;
        state.isLoggedIn = true;  // Set isLoggedIn to true on successful login
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  },
});

export default authSlice.reducer;
