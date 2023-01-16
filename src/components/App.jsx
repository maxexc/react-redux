import { LoginPage } from 'page/LoginPage';
import React from 'react'
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from './Layout';


const App = () => { 

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace/>} />  
          
      </Route>
           
    </Routes>    
  );
};

export default App