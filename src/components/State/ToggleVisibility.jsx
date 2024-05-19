import React, { useState } from 'react';

const ToggleVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  return (
    
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Toggle Boolean State 
    </h1>
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleVisibility}
      >
        {isVisible ? 'Hide' : 'Show'} Details
      </button>
      {isVisible && <div className="mt-4 p-4 bg-gray-100 rounded">Here are some details...</div>}
    </div>

    </>
  );
};

export default ToggleVisibility;



{/*

Explanation:

State Initialization: useState(false) initializes isVisible to false.
toggleVisibility Function: Uses functional update to toggle isVisible state.
Tailwind CSS Classes:
p-4 for padding.
bg-blue-500, text-white, rounded for button styling.
Conditional rendering (isVisible &&) to show/hide details.

*/}
