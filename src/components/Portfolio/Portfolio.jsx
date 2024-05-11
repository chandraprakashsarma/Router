import React from 'react'
import myImage from '../../assets/myImage.jpg';
import myImage1 from '../../assets/myImage1.jpg';
import {Link, NavLink} from 'react-router-dom'


const users = [
    {
      name: 'UI Component',
      image:myImage,
      route: '/UIComponent',
      position: 'React',
    },
    {
      name: 'Application UI components',
      image:myImage1,
      position: 'React',
    },
    {
      name: 'Javascript',
      image:myImage1,
      position: 'Concept',
    },
    {
      name: 'React',
      image:myImage1,
      position: 'Concept',
    },
    {
      name: 'Tailwind CSS',
      image:myImage1,
      position: 'UI Component',
    },
    {
      name: 'Router',
      image:myImage1,
      position: 'With Example',
    },
    {
      name: 'API Data Fatch',
      image:myImage1,
      position: 'Fatch and Showing',
    },
    {
      name: 'Form',
      image:myImage1,
      position: 'Login - Log Out Form ',
    },
  ]

export default function Portfolio() {
    return (

        <>
        
       
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Portfolio
            </h1>
      <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
        
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
        
    
        

        </>
        
    )
}