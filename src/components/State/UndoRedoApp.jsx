import React, { useState } from 'react';

const UndoRedoApp = () => {
  const [history, setHistory] = useState([0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    const newValue = history[currentIndex] + 1;
    const newHistory = history.slice(0, currentIndex + 1).concat(newValue);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const decrement = () => {
    const newValue = history[currentIndex] - 1;
    const newHistory = history.slice(0, currentIndex + 1).concat(newValue);
    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Undo/Redo Functionality  
   </h1>
    <div className="p-4">
      <p className="text-xl mb-4">Value: {history[currentIndex]}</p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded mr-2"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
        onClick={undo}
        disabled={currentIndex === 0}
      >
        Undo
      </button>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded"
        onClick={redo}
        disabled={currentIndex === history.length - 1}
      >
        Redo
      </button>
    </div>
    </>
  );
};

export default UndoRedoApp;
