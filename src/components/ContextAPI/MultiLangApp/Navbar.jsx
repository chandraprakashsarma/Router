import React from 'react';
import { useLanguage } from './LanguageContext';

const Navbar = () => {
  const { switchLanguage } = useLanguage();

  return (
    <nav className="w-full p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Multi-Language App</h1>
      <div>
        <button
          onClick={() => switchLanguage('en')}
          className="bg-gray-800 px-4 py-2 rounded mr-2"
        >
          English
        </button>
        <button
          onClick={() => switchLanguage('es')}
          className="bg-gray-800 px-4 py-2 rounded"
        >
          Español
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
