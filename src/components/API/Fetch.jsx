// src/UserTable.js
import React, { useState, useEffect } from 'react';

function FetchApi() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-xl">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 text-xl">Error: {error.message}</div>;
    }

    return (
        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Fetch API Basic
        </h1>
        <div className="flex items-center justify-center  bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg mt-10 mb-10">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Email</th>
                        <th className="py-3 px-6 text-left">Username</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {users.map(user => (
                        <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{user.id}</td>
                            <td className="py-3 px-6 text-left">{user.name}</td>
                            <td className="py-3 px-6 text-left">{user.email}</td>
                            <td className="py-3 px-6 text-left">{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></div></div>



      
        
        </>
    );
}

export default FetchApi;
