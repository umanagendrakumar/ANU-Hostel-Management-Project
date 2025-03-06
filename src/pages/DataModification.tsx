import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { FileText, Upload, ArrowLeft } from 'lucide-react';
import { StudentForm } from '../components/StudentForm';
import { DashboardCard } from '../components/DashboardCard';

const DataModificationHome: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-6 text-gray-800">Data Modification</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardCard
          title="Student-wise Data Modification"
          description="Modify individual student details using their hostel ID or roll number."
          icon={FileText}
          path="student"
        />
        <DashboardCard
          title="Class-wise Data Modification"
          description="Upload an Excel file to modify multiple student records."
          icon={Upload}
          path="class"
        />
      </div>
    </div>
  );
};

const StudentWiseModification: React.FC = () => {
  const [id, setId] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      navigate('form');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Student-wise Data Modification</h2>
        <button
          onClick={() => navigate(-1)}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
        <div className="mb-4">
          <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Student Hostel ID or Roll Number
          </label>
          <input
            type="text"
            id="studentId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search Student
        </button>
      </form>
    </div>
  );
};

const ClassWiseModification: React.FC = () => {
  const navigate = useNavigate();
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Class-wise Data Modification</h2>
        <button
          onClick={() => navigate(-1)}
          className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-4">Upload Excel file containing student details to modify</p>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Choose File
          </label>
        </div>
      </div>
    </div>
  );
};

export const DataModification: React.FC = () => {
  return (
    <Routes>
      <Route index element={<DataModificationHome />} />
      <Route path="student" element={<StudentWiseModification />} />
      <Route path="student/form" element={<StudentForm isEditing />} />
      <Route path="class" element={<ClassWiseModification />} />
    </Routes>
  );
};