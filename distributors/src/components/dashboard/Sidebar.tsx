// components/dashboard/Sidebar.tsx
'use client';

import React from 'react';
import { Home, Users, Settings, BarChart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Customers', href: '/dashboard/customers' },
    { icon: ShoppingBag, label: 'Products', href: '/dashboard/products' },
    { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' }
  ];

  return (
    <div className="fixed top-0 left-0 h-screen bg-white shadow-lg w-64">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-bold text-xl">Dashboard</h2>
      </div>
      
      <nav className="p-4">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center p-3 mb-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              <item.icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-500'} />
              <span className="ml-3">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;