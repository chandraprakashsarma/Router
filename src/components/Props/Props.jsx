import React from 'react'
import { Link } from 'react-router-dom';




export default function Props({title}) {
    return (
        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Props Basic Concept
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Props Pass
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
              
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            {title}
        </h1>  
        </div></div>

        </>
    )
}