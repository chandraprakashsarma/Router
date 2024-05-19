import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Content from './Content';
//import './index.css';

const MultiLangApp = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Content />
      </div>
    </LanguageProvider>
  );
};

export default MultiLangApp;
