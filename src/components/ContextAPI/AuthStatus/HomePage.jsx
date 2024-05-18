import React from 'react';
import { useAuth } from './AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="w-full max-w-md text-center mt-10">
      {user ? (
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Welcome, {user.username}!</h2>
          <p className="text-gray-700 dark:text-gray-300">You are logged in.</p>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Please log in.</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You need to log in to access the content.
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
