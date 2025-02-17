import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}