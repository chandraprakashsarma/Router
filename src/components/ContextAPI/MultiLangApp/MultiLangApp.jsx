import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Content from './Content';
//import './index.css';

const MultiLangApp = () => {
  return (
    <LanguageProvider>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <Navbar />
        <Content />
      </div>
      </div>
    </LanguageProvider>
  );
};

export default MultiLangApp;
