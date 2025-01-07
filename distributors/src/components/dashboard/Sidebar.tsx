// components/dashboard/Sidebar.tsx
'use client';

import React from 'react';
import { Home, Users, Settings, BarChart, X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Users, label: 'Users', href: '#' },
    { icon: BarChart, label: 'Analytics', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' }
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className={`font-bold text-xl ${!isOpen && 'hidden'}`}>Dashboard</h2>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isOpen ? <X size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center p-3 mb-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <item.icon size={20} className="text-gray-500" />
            {isOpen && (
              <span className="ml-3 text-gray-700">{item.label}</span>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;