import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">E-commerce Platform</h1>
      <div>
        <button
          onClick={toggleTheme}
          className="bg-yellow-500 px-4 py-2 rounded mr-4"
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.username} ({user.role})</span>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => login('User', 'customer')} className="bg-green-500 px-4 py-2 rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
