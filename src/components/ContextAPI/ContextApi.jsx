import React from 'react'
import { Link } from 'react-router-dom';


const users = [
  {
    name: 'Setup Context API',
    route: '/setup_context_api',
  },
  {
    name: 'Arrow Functions',
    route: '/event_handling',
  },
  {
    name: 'Function Components',
    route: '/event_handling',
  },
  {
    name: 'Higher-Order Functions',
    route: '/event_handling',
  },
  {
    name: 'Callback Functions',
    route: '/event_handling',
  },
  {
    name: 'Anonymous Functions',
    route: '/event_handling',
  },
  {
    name: 'Function Hoisting',
    route: '/event_handling',
  },
  {
    name: 'Function Composition',
    route: '/event_handling',
  },
  {
    name: 'Closures',
    route: '/event_handling',
  },
  {
    name: 'Currying',
    route: '/event_handling',
  },
  {
    name: 'Memoization',
    route: '/event_handling',
  },
                                
  ]

export default function ContextApi() {
    return (

        <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Context API Basic Concept
        </h1>

    <div className="grid grid-cols-4 gap-4 ">
    {users.map((user, index) => (
        <Link to={user.route} key={index} className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200">
          {/*<img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />*/}
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.name}</h1>
          {/*<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.position}</h1>*/}
        </Link>
      ))}    

      </div>
        </>
        
    )
}