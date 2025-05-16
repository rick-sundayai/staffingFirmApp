// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Create a single instance of the Supabase client to be used throughout the app
// This prevents the "Multiple GoTrueClient instances detected" warning
let supabaseInstance: ReturnType<typeof createClient> | null = null;

// Export a function that returns the same instance every time it's called
export const createBrowserClient = () => {
  if (supabaseInstance) return supabaseInstance;
  
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  return supabaseInstance;
};

// For server-side usage (if needed)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example for Server Components (consider RLS carefully):
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// export const createServerSupabaseClient = () =>
//   createServerComponentClient({ cookies });