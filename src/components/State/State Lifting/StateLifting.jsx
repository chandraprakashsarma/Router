import React, {useState} from 'react'
import YoutubApp from '../YoutubApp/YoutubApp'


function StateLifting() {
  
  
  return (
    <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            State Data Passing
        </h1>


        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            YouTube Video App
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <YoutubApp title ="React JS Tutorial" views = "10K"/>
            <YoutubApp title ="Node JS Tutorial"views = "1M"/>
            
        </div></div>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            YouTube Video App
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <YoutubApp title ="React JS Tutorial" views = "10K"/>
            <YoutubApp title ="Node JS Tutorial"views = "1M"/>
            
        </div></div>
+-
    </>
  )
}

export default StateLifting

