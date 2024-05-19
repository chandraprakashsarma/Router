import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Like Button with Count 
   </h1>
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLike}
      >
        Like {likes}
      </button>
    </div>
    </>
  );
};

export default LikeButton;
