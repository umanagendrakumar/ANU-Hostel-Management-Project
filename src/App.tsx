import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { DataEntry } from './pages/DataEntry';
import { DataModification } from './pages/DataModification';
import { FeePayment } from './pages/FeePayment';
import { DataReport } from './pages/DataReport';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<Navigate to="/admin/data-entry" replace />} />
            <Route path="data-entry/*" element={<DataEntry />} />
            <Route path="data-modification/*" element={<DataModification />} />
            <Route path="fee-payment/*" element={<FeePayment />} />
            <Route path="data-report/*" element={<DataReport />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;