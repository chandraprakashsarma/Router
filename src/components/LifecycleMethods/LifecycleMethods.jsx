import React, { useState } from 'react';
import UserProfile from './UserProfile';

const LifecycleMethods = () => {
  const [userId, setUserId] = useState(1);

  const handleNextUser = () => {
    setUserId(prevUserId => (prevUserId < 10 ? prevUserId + 1 : 1)); // Reset to 1 after 10
  };

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
        Lifecycle Methods Basic Concept
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
    
      <button
        onClick={handleNextUser}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        Next User
      </button>
      <UserProfile userId={userId} />
    </div></div>
    </>
  );
};

export default LifecycleMethods;
