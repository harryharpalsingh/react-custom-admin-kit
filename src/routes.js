import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Comments from './components/comments';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;