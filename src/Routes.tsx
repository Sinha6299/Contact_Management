import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactDetailPage from './pages/ContactDetailPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact/:id" element={<ContactDetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
