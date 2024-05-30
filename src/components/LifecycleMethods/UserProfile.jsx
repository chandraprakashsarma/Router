import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchController = new AbortController();
    const signal = fetchController.signal;

    const fetchUserData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchUserData();

    // Cleanup function to abort fetch on unmount
    return () => {
      fetchController.abort();
    };
  }, [userId]); // Runs every time userId changes

  if (loading) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      <h1 className="text-xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserProfile;
