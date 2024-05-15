import React from 'react'
import myImage from '../../assets/Logo.png';
import { Link } from 'react-router-dom';


const users = [
    {
      name: 'Count Increment',
      src:myImage,
      route: '/count_increment',
      alt: 'Image 1',
      position: 'React',
    },
    {
        name: 'Todo List',
        src:myImage,
        route: '/todo_list',
        alt: 'Image 1',
        position: 'React',
      },
      {
        name: 'Form Submit',
        src:myImage,
        route: '/form_submit',
        alt: 'Image 1',
        position: 'React',
      },                           
  ]

export default function State() {
    return (

        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            useState State 
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