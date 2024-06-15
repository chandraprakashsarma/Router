import React from 'react'

function ReactKey() {

  const numbers = ['A','B','C','D']

  
  return (
    <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            React Key
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Add, Remove from List Items 
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <ul className="divide-y divide-gray-200">
            {
            numbers.map((number)=>(
              <li key= {number.toString} className="py-4">
                  {number}
              </li>
            ))
            
            }
          </ul>
                
        </div></div>

        </>
  )
}

export default ReactKey