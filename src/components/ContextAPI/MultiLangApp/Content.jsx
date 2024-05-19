import React from 'react';
import { useLanguage } from './LanguageContext';

const content = {
  en: {
    welcome: "Welcome to the Multi-Language App!",
    description: "This is an example of a multi-language support using React Context API and Tailwind CSS."
  },
  es: {
    welcome: "¡Bienvenido a la aplicación multi-idioma!",
    description: "Este es un ejemplo de soporte multilingüe utilizando React Context API y Tailwind CSS."
  }
};

const Content = () => {
  const { language } = useLanguage();
  const { welcome, description } = content[language];

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">{welcome}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Content;
