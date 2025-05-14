import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qbqmgwqjvqfmyrlbxhhu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicW1nd3FqdnFmbXlybGJ4aGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NzgyNDAsImV4cCI6MjAyMzQ1NDI0MH0.qDPDUPPPXQZMqoVyQEiXQQBCHxNv_lnS1mx6VQJoYVo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage bucket name
export const STORAGE_BUCKET = 'favorites-images';