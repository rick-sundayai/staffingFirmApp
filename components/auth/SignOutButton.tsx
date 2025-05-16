'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@/lib/supabase/supabaseClient';

type SignOutButtonProps = {
  className?: string;
  redirectTo?: string;
};

export default function SignOutButton({ 
  className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
  redirectTo = '/' 
}: SignOutButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createBrowserClient();

  const handleSignOut = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Error signing out:', error.message);
        return;
      }
      
      // Refresh the page to update the auth context
      router.refresh();
      router.push(redirectTo);
    } catch (error) {
      console.error('Unexpected error during sign out:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={className}
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? 'Signing out...' : 'Sign Out'}
    </button>
  );
}
