import React from 'react'
import myImage from '../../assets/Logo.png';
import { Link } from 'react-router-dom';


const users = [
    {
      name: 'map()',
      src:myImage,
      route: '/map',
      alt: 'Image 1',
      position: 'React',
    },
    {
        name: 'forEach()',
        src:myImage,
        route: '/todo_list',
        alt: 'Image 1',
        position: 'React',
      },
      {
        name: 'reduce()',
        src:myImage,
        route: '/form_submit',
        alt: 'Image 1',
        position: 'React',
      },  
      {
        name: 'Weather App API Based',
        src:myImage,
        route: '/weather_app',
        alt: 'Image 1',
        position: 'React',
      },                         
  ]

export default function Loops() {
    return (

        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Loops Basic Concept
        </h1>

    <div className="grid grid-cols-3 gap-4 ">
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