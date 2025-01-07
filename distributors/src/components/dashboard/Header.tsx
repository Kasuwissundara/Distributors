// components/dashboard/Header.tsx
'use client';

import React from 'react';
import { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Bell, User as UserIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  user: User;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const pathname = usePathname();
  
  // Get the current page title based on the pathname
  const getPageTitle = () => {
    const path = pathname.split('/').pop();
    if (!path || path === 'dashboard') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          {getPageTitle()}
        </h1>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-gray-500">
            <Bell size={20} />
          </button>

          {/* User Menu */}
          <div className="relative">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col text-right">
                <span className="text-sm font-medium text-gray-700">
                  {user.email}
                </span>
                <button
                  onClick={() => auth.signOut()}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Sign out
                </button>
              </div>
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;