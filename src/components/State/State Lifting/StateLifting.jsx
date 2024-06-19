import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function StateLifting() {
  
  const [data, setData] = useState("")

  
  return (
    <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            State Data Passing
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Parent To Child Data Pass
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Parent Component</h1>
            <div className="space-y-4">
              <ChildA setData={setData} />
              <ChildB data={data} />
            </div>
        </div></div>

    </>
  )
}

export default StateLifting

