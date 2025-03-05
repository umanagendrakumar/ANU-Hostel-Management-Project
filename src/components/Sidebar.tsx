import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Database, FileInput, FileSpreadsheet, IndianRupee, Menu, X, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: '/admin/data-entry', icon: <FileInput size={20} />, label: 'Data Entry' },
    { to: '/admin/data-modification', icon: <FileSpreadsheet size={20} />, label: 'Data Modification' },
    { to: '/admin/fee-payment', icon: <IndianRupee size={20} />, label: 'Fee Payment' },
    { to: '/admin/data-report', icon: <Database size={20} />, label: 'Data Report' },
  ];

  const handleLogout = () => {
    // Add any logout logic here (clear tokens, etc.)
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 lg:hidden h-16 bg-white shadow-sm z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 left-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`
        fixed inset-y-0 left-0 transform lg:translate-x-0 transition-transform duration-300 ease-in-out z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-screen w-64 bg-white shadow-lg flex flex-col">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          </div>
          <nav className="flex-1 p-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};