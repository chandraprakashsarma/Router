import React from 'react'
import { Link } from 'react-router-dom';

const users = [
    {
      name: 'Fetch API',
      route: '/fetch_api',
    },
    {
        name: 'Axios',
        route: '/axios_api',
      },
      {
        name: 'Async/Await',
        route: '/async_await',
      },
                                
  ]

function Api() {
  return (
    <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            API Basic Concept
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

export default Api