import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { supabase } from '../utils/supabase';

// Function to log in a user
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { user: null, access_token: null, error };
  }

  // Store the access token in AsyncStorage after login
  if (data.session) {
    await AsyncStorage.setItem('access_token', data.session.access_token);
  }

  return {
    user: data.user,
    access_token: data.session?.access_token,
    error: null,
  };
};


// Function to register a user
export const registerUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
      email,
      password,
     
  });

  if (error) {
      return { user: null, error }; // Return null user if there's an error
  }

  return { user: data.user, error: null }; // Return user object on success
};

// Function to log out a user
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('session'); // Remove session object on logout
  }
  return { error };
};