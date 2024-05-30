import React from 'react'
import { Link } from 'react-router-dom';


const users = [
    
        {
            name: 'useState',
            route: '/UIComponent',
          },
          {
            name: 'useEffect',
            route: '/use_effect_app'
          },
          {
            name: 'useContext',
            route: '/UIComponent',
          },
          {
            name: 'useReducer',
            route: '/UIComponent',
          },
          {
            name: 'useCallback',
            route: '/UIComponent',
          },
          {
            name: 'useMemo',
            route: '/UIComponent',
          },
          {
            name: 'useRef',
            route: '/UIComponent',
          },
          {
            name: 'useImperativeHandle',
            route: '/UIComponent',
          },
          {
            name: 'useLayoutEffect',
            route: '/UIComponent',
          },
          {
            name: 'useDebugValue',
            route: '/UIComponent',
          },
                                
  ]

export default function Hooks() {
    return (

        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Hooks Basic Concept
        </h1>

    <div className="grid grid-cols-4 gap-4 ">
    {users.map((user, index) => (
        <Link to={user.route} key={index} className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200">
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.name}</h1>
        </Link>
      ))}    

      </div>
        </>
        
    )
}