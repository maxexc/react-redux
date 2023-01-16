import { LoginPage } from 'pages/LoginPage';
import { DashboardPage } from 'pages/DashboardPage';
// import { LoginPage, DashboardPage } from 'page/LoginPage';
import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from './Layout';


const App = () => { 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />           
      </Route>           
    </Routes>    
  );
};

export default App