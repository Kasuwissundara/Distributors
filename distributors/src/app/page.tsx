'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace('/login');
      } else {
        router.replace('/dashboard');
      }
    }
  }, [user, loading, router]);

  // Show a blank page during the auth check
  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading && <p>Loading...</p>}
    </div>
  );
}