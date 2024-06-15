import React, {useState, useRef} from 'react'

export default function RefComponent() {
            // 1. Create a ref using useRef
            const inputRef = useRef(null);

            // 2. Define a function to focus on the input element
            const focusInput = () => {
              inputRef.current.focus();
            };

                        // 1. State to hold the number of clicks
            const [clicks, setClicks] = useState(0);

            // 2. useRef to hold the value of total clicks
            const totalClicksRef = useRef(0);

            // 3. Function to handle button click
            const handleClick = () => {
                setClicks(prevClicks => prevClicks + 1); // Update state
                totalClicksRef.current += 1; // Update ref value
            };

           



    return (

        <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            useRef Hook
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Template Literals
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <input ref={inputRef} type="text" className="border border-gray-400 p-2 mb-2" />
            {/* 4. Button to trigger focus on the input element */}
            <button onClick={focusInput} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Focus Input
            </button>
                
        </div></div>




        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Persist values without causing re-renders
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                    {/* Display the current state value */}
            <h1 className="text-2xl mb-4">Clicks (State): {clicks}</h1>
            {/* Display the current ref value */}
            <h2 className="text-xl mb-4">Total Clicks (Ref): {totalClicksRef.current}</h2>
            {/* Button to handle clicks */}
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click Me
            </button>
                
        </div></div>

        </>
        
    )
}