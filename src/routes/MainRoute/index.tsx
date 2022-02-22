import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from '@/pages/LandingPage';
import NotFound from '@/pages/NotFound';

const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoute;
