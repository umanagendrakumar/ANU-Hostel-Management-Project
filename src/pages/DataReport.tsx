import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AlertCircle, FileSpreadsheet, Users, Calendar, ArrowLeft } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';

const DataReportHome: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-6 text-gray-800">Data Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Student Wise Data Report"
          description="Generate individual student reports"
          icon={FileSpreadsheet}
          path="student"
        />
        <DashboardCard
          title="Class Wise Data Report"
          description="Generate reports by class"
          icon={Users}
          path="class"
        />
        <DashboardCard
          title="Year Wise Data Report"
          description="Generate reports by academic year"
          icon={Calendar}
          path="year"
        />
      </div>
    </div>
  );
};

const UnderConstruction: React.FC<{ title: string }> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          onClick={() => navigate(-1)}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-yellow-400" />
        </div>
        <h2 className="text-2xl font-bold text-yellow-700 mb-2">{title}</h2>
        <p className="text-yellow-600">
          This page is currently under construction by BATCH13. Please check back later.
        </p>
      </div>
    </div>
  );
};

export const DataReport: React.FC = () => {
  return (
    <Routes>
      <Route index element={<DataReportHome />} />
      <Route
        path="student"
        element={<UnderConstruction title="Student Wise Data Report" />}
      />
      <Route
        path="class"
        element={<UnderConstruction title="Class Wise Data Report" />}
      />
      <Route
        path="year"
        element={<UnderConstruction title="Year Wise Data Report" />}
      />
    </Routes>
  );
};