// components/dashboard/Header.tsx
'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import { User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface HeaderProps {
  toggleSidebar: () => void;
  user: User;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, user }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Menu
            className="mr-4 cursor-pointer"
            onClick={toggleSidebar}
          />
          <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{user.email}</span>
          <button
            onClick={() => auth.signOut()}
            className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;