import React, { useState, useEffect } from 'react';


function AsyncAwait() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchPosts();
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
            Async/Await
        </h1>
        <div className="flex items-center justify-center bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        
            <h1 className="text-2xl font-bold mb-4">Posts</h1>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {posts.map(post => (
                    <li key={post.id} className="p-4 bg-white shadow-md rounded-md">
                        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                        <p className="text-gray-600">{post.body}</p>
                    </li>
                ))}
            </ul>
        
                
        </div></div>
    
    
    
    </>
  )
}

export default AsyncAwait