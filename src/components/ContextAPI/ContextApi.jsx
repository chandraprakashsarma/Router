import React from 'react'
import { Link } from 'react-router-dom';


const users = [
  {
    name: 'Basic Setup',
    route: '/context_api_setup_app',
  },
  {
    name: 'Theme Switcher App',
    route: '/theme_switcher_app',
  },
  {
    name: 'Todo Form App',
    route: '/todo_form_app',
  },
  {
    name: 'User Authentication',
    route: '/user_authentication_context_api',
  },
  {
    name: 'Multi-Language Support',
    route: '/multi-language_support',
  },
  {
    name: 'Multiple Contexts',
    route: '/multiple_contexts',
  },
  {
    name: 'E-Commerce Platform',
    route: '/ecommerce_app',
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