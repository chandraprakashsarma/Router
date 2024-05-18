import React from 'react';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav className="w-full p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Auth App</h1>
      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.username}</span>
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => login('User')} className="bg-green-500 px-4 py-2 rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
