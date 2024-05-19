import React, { useState } from 'react';

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Modal with Open/Close Functionality 
   </h1>
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleModal}
      >
        {isOpen ? 'Close' : 'Open'} Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl mb-4">Modal Title</h2>
            <p className="mb-4">This is a modal.</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default ModalExample;
