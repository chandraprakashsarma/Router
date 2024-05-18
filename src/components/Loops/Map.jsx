import React from 'react'


const names = ['Alice', 'Bob', 'Charlie'];



export default function Map() {


    return (

     <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Map Function Basic Concept
        </h1>
        <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
        
        

    
      
        
        
     </>    
    )
}