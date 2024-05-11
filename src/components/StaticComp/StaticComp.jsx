import React from 'react'
import myImage from '../../assets/myImage.jpg';
import myImage1 from '../../assets/myImage1.jpg';
import { Link } from 'react-router-dom';


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

export default function StaticComp() {
    return (

        <>
        
       
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Portfolio
            </h1>

    <div className="grid grid-cols-4 gap-4">
      
    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>

    <Link to="/uicomponent" className=" p-2 rounded-md rounded-md border">
    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">UI Componenet</p>
    <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500"></p>
    </Link>
    
     
      
    
    </div>
      
        
    
        

        </>
        
    )
}