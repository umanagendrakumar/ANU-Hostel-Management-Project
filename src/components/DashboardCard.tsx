import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, DivideIcon as LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  showBackButton?: boolean;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
  showBackButton = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      )}
      <div
        onClick={() => navigate(path)}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};