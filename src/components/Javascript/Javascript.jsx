import React from 'react'
import myImage from '../../assets/Logo.png';
import { Link } from 'react-router-dom';


const users = [
  {
    name: 'Variable',
    route: '/variable',
  },
    {
      name: 'Array',
      route: '/array',
    },
    {
        name: 'Function',
        route: '/function',
    },
    {
        name: 'Iteration',
          
        route: '/UIComponent',
          
          
      },
      {
        name: 'Object',
          
        route: '/UIComponent',
          
          
      },
      {
        name: 'Scope',
          
        route: '/UIComponent',
          
          
      },
      {
          name: 'Data Type',
            
          route: '/UIComponent',
            
            
        },
        {
          name: 'Getter Setter',
            
          route: '/UIComponent',
            
            
        },
        {
          name: 'Parent Child',
            
          route: '/UIComponent',
            
            
        },
        {
          name: 'Promises',
            
          route: '/UIComponent',
            
            
        },
        {
            name: 'Event',
              
            route: '/UIComponent',
              
              
          },
          {
            name: 'Map',
              
            route: '/UIComponent',
              
              
          },
          {
            name: 'JS Async',
              
            route: '/UIComponent',
              
              
          },
          {
            name: 'Scope',
              
            route: '/UIComponent',
              
              
          },
          {
              name: 'Symbol',
                
              route: '/UIComponent',
                
                
            },
            {
              name: 'Type Conversion',
                
              route: '/UIComponent',
                
                
            },
            {
              name: 'Operations',
                
              route: '/UIComponent',
                
                
            },
            {
                name: 'Operator',
                  
                route: '/UIComponent',
                  
                  
              },
              {
                name: 'Comparision',
                  
                route: '/UIComponent',
                  
                  
              },
              {
                name: 'String',
                  
                route: '/UIComponent',
                  
                  
              },
              {
                name: 'Backticks',
                  
                route: '/UIComponent',
                  
                  
              },
              {
                  name: 'Arrow Function',
                    
                  route: '/arrow_function',
                    
                    
                },
                {
                  name: 'Spread Operator',
                    
                  route: '/UIComponent',
                    
                    
                },
                {
                  name: 'Concept Of "this"',
                    
                  route: '/UIComponent',
                    
                    
                },
                {
                  name: 'Event Handling',
                    
                  route: '/event_handling',
                    
                    
                },
                                
  ]

export default function Javascript() {
    return (

        <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Javascript Basic Concept
        </h1>

    <div className="grid grid-cols-4 gap-4 ">
    {users.map((user, index) => (
        <Link to={user.route} key={index} className=" p-2 rounded-md border border-gray-500 hover:bg-gray-200">
          {/*<img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />*/}
          <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">{user.name}</h1>
          {/*<h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">{user.position}</h1>*/}
        </Link>
      ))}    

      </div>
        </>
        
    )
}