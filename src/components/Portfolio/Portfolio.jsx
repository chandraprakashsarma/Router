import React from 'react'
import myImage from '../../assets/Logo.png';
import { Link } from 'react-router-dom';


const users = [
    {
      name: 'Accordion',
      src:myImage,
      route: '/UIComponent',
      alt: 'Image 1',
      position: 'React',
    },
    {
        name: 'Alerts',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'React',
      },
      {
        name: 'Alerts',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'React',
      },
      {
        name: 'Alerts',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'React',
      },
      {
        name: 'Accordion',
        src:myImage,
        route: '/UIComponent',
        alt: 'Image 1',
        position: 'React',
      },
      {
          name: 'Alerts',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'React',
        },
        {
          name: 'Alerts',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'React',
        },
        {
          name: 'Alerts',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'React',
        },
        {
          name: 'Accordion',
          src:myImage,
          route: '/UIComponent',
          alt: 'Image 1',
          position: 'React',
        },
        {
            name: 'Alerts',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'React',
          },
          {
            name: 'Alerts',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'React',
          },
          {
            name: 'Alerts',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'React',
          },
          {
            name: 'Accordion',
            src:myImage,
            route: '/UIComponent',
            alt: 'Image 1',
            position: 'React',
          },
          {
              name: 'Alerts',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'React',
            },
            {
              name: 'Alerts',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'React',
            },
            {
              name: 'Alerts',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'React',
            },
            {
              name: 'Accordion',
              src:myImage,
              route: '/UIComponent',
              alt: 'Image 1',
              position: 'React',
            },
            {
                name: 'Alerts',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'React',
              },
              {
                name: 'Alerts',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'React',
              },
              {
                name: 'Alerts',
                src:myImage,
                route: '/UIComponent',
                alt: 'Image 1',
                position: 'React',
              },
    
    
  ]

export default function Portfolio() {
    return (

        <>
        
       
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Portfolio
        </h1>

    <div className="grid grid-cols-4 gap-4 ">
    {users.map((user, index) => (
        <Link to={user.route} key={index} className=" p-2 rounded-md rounded-md border border-gray-500">
          <img src={user.src} alt={user.alt} className="h-auto max-w-full rounded-lg" />
          <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
          <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">{user.position}</p>
        </Link>
      ))}


    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border bg-red-200">
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    </Link>


    

    

      </div>


      
        
    
        

        </>
        
    )
}