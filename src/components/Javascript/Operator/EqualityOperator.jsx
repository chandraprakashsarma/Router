import React, {useState} from 'react'

function EqualityOperator() {
  
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    let message;

    // Using == (Equality Operator)
    if (userInput == 0) {
        message = 'You entered zero or an empty string!';
    }

    // Using === (Strict Equality Operator)
    if (userInput === '0') {
        message = 'You entered the string "0"!';
    } else if (userInput === 0) {
        message = 'You entered the number 0!';
    }

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
       Hooks Basic Concept
   </h1>

   <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
       Template Literals
   </h1>
   <div className="flex items-center justify-center h-96 bg-gray-100">
   <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <input
                type="text"
                value={userInput}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter something..."
            />
            <div className="mt-4 text-lg text-gray-700">
                {message}
            </div>
           
   </div></div>

   </>
  )
}

export default EqualityOperator