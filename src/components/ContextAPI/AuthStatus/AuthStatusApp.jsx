import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
//import './index.css';
//<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10">
const AuthStatusApp = () => {
  return (
    <AuthProvider>
      
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <Navbar />
        <HomePage />
      </div>
      </div>
    </AuthProvider>
  );
};

export default AuthStatusApp;
