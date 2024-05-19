import React, { createContext, useState, useContext } from 'react';

// Create a Context for language
export const LanguageContext = createContext();

// Create a Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext);
};
