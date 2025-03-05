import React from 'react';
import { useNavigate } from 'react-router-dom';
import { School, ArrowRight, Users, BookOpen, Building2 } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // const features = [
  //   {
  //     icon: <Users className="w-6 h-6 text-blue-500" />,
  //     title: "Student Management",
  //     description: "Efficiently manage student records and admissions"
  //   },
  //   {
  //     icon: <BookOpen className="w-6 h-6 text-blue-500" />,
  //     title: "Fee Management",
  //     description: "Streamlined fee collection and payment tracking"
  //   },
  //   {
  //     icon: <Building2 className="w-6 h-6 text-blue-500" />,
  //     title: "Hostel Administration",
  //     description: "Complete hostel management and room allocation"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="text-center">
              <div className="flex items-center justify-center mb-8 animate-fade-in">
                <div className="bg-blue-600 rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <School className="w-16 h-16 text-white" />
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
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in-up delay-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-50 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2025 Acharya Nagarjuna University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};