import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rdjdlxfxeuatnebxngtv.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkamRseGZ4ZXVhdG5lYnhuZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNDgwNjIsImV4cCI6MjA1ODcyNDA2Mn0.6jRL9-L-ZYOZJrgSOTEEYqZnSPZhSbaW85Lbsz2RP2g';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anonymous Key. Please check your environment variables.');
}

// Create Supabase client with auth configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Storage bucket name
export const STORAGE_BUCKET = 'favorites-images';