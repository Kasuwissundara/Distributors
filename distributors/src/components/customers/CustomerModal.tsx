// components/dashboard/DashboardLayout.tsx
'use client';

import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { User } from 'firebase/auth';

interface DashboardLayoutProps {
  user: User;
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={true} toggleSidebar={() => {}} />
      
      <div className="ml-64">
        <Header user={user} toggleSidebar={() => {}} />
        
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;