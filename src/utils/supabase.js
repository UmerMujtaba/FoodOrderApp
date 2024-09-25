// supabaseClient.js
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'

const SUPABASE_URL = 'https://ypaznvsmysiuhdwhlkux.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYXpudnNteXNpdWhkd2hsa3V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNjI3NDEsImV4cCI6MjA0MjgzODc0MX0.YXCXe7JtSBTLMbS1gJiOlGHtVUjiGDXPsT6guLMhjz0'; // Replace with your Supabase Anon Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
