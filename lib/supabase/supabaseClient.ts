// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Use this client for server-side interactions (e.g., in Server Components or API routes)
// For client-side (interactive components, though less recommended for data fetch)
// you might create a different client instance depending on your RLS setup.
// For simplicity now, we'll use this one primarily on the server.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example of how you might create a client for use in Server Components (App Router)
// The key is that it uses the *service role key* or a key with appropriate RLS,
// and it's only used server-side where the key is not exposed.
// For this example, we'll stick to the anon key and assume RLS is set up to allow reads.
// A more secure approach for write operations would involve using the service role key
// exclusively in Server Actions or API routes, or relying entirely on RLS and authenticated users.

// Example for Server Components (consider RLS carefully):
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';
// export const createServerSupabaseClient = () =>
//   createServerComponentClient({ cookies });

// For now, stick with the simple client using anon key:
export const createBrowserClient = () => createClient(supabaseUrl, supabaseAnonKey); // Use if needed on client side, mind RLS