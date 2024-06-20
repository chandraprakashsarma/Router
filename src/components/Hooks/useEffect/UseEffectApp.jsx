import React, {useState, useEffect} from 'react'
import EmptyDependencyArray from './EmptyDependencyArray'
import NoDependencyArray from './NoDependencyArray'
import WithDependencyArray from './WithDependencyArray'

function UseEffectApp() {


    

  return (
    <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Use Effect Hook
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Empty Dependency Array ([])
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <EmptyDependencyArray/>
        </div></div>


        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            No Dependency Array
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <NoDependencyArray/>
        </div></div>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            With Dependency Array ([dep1, dep2, ...])
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <WithDependencyArray/>
        </div></div>

        </>
  )
}

export default UseEffectApp