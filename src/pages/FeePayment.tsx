import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AlertCircle, Building2, IndianRupee, Wallet, ArrowLeft } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';

const FeePaymentHome: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-6 text-gray-800">Fee Payment</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Hostel Admission Fee"
          description="Manage hostel admission fee payments"
          icon={Building2}
          path="admission"
        />
        <DashboardCard
          title="Mess Due Fee"
          description="Handle mess fee dues and payments"
          icon={IndianRupee}
          path="mess"
        />
        <DashboardCard
          title="Other Fees"
          description="Manage miscellaneous fee payments"
          icon={Wallet}
          path="other"
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

export const FeePayment: React.FC = () => {
  return (
    <Routes>
      <Route index element={<FeePaymentHome />} />
      <Route
        path="admission"
        element={<UnderConstruction title="Hostel Admission Fee" />}
      />
      <Route
        path="mess"
        element={<UnderConstruction title="Mess Due Fee" />}
      />
      <Route
        path="other"
        element={<UnderConstruction title="Other Fees" />}
      />
    </Routes>
  );
};