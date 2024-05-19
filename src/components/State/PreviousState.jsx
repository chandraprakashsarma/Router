import React, { useState } from 'react';

const PreviousState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Functional update to ensure we work with the latest state
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    // Functional update to ensure we work with the latest state
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
     <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
         Updating State Based On The Previous State 
    </h1>
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <p className="text-3xl mb-4">Count: {count}</p>
      <div className="flex">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={increment}
        >
          Increment
        </button>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>

  </>  
  );
};

export default PreviousState;
