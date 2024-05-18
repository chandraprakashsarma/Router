import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
//import './index.css';

const AuthStatusApp = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10">
        <Navbar />
        <HomePage />
      </div>
    </AuthProvider>
  );
};

export default AuthStatusApp;
