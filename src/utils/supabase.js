// supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'
import { anonKey, url } from '../constants/key';

const SUPABASE_URL = url; 
const SUPABASE_ANON_KEY = anonKey;
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
