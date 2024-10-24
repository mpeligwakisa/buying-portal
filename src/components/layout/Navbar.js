import React from 'react';
import { Bell, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">Agriculture Management System</div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings size={20} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;