import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import myphoto from '../assets/anu-logo.png';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      
      {/* Hero Section (80% Height) */}
      <div className="h-[90vh] flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <div className="rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={myphoto} alt="ANUCET Logo" className="w-32 h-32 rounded-full object-cover" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight animate-fade-in-up">
            ANUCET
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
            Welcome to the next generation Engineering Hostel Management System. 
            Streamlined operations, enhanced efficiency, and better student experience.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="group inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up delay-200"
          >
            Login
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer (20% Height) */}
      <footer className="h-[10vh] bg-white border-t border-gray-200 flex items-center justify-center text-gray-600 p-4 mt-4 text-center">
        <p>© 2025 Acharya Nagarjuna University. All rights reserved.</p>
      </footer>

    </div>
  );
};
