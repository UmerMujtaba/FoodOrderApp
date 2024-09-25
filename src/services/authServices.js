import { supabase } from '../utils/supabase';

// Function to register a user
export const registerUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { user: data?.user, error };
};

// Function to log in a user
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { user: data?.user, error };
};

// Function to log out a user
export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
