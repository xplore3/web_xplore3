import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
//const Agent = lazy(() => import('../pages/agent'));
const Privacy = lazy(() => import('../pages/privacy'));

const AppRoutes: React.FC = () => {
  return (
    <div className="w-full h-screen light">
      <Suspense fallback={<div className="frc-center w-full h-screen">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route id="home" path="/home" element={<Home />} />
          <Route id="privacy" path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
