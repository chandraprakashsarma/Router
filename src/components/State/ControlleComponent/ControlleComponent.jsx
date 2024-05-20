import React from 'react'
import { Link } from 'react-router-dom';


const users = [
    {
      name: 'Control Component',
     route: '/input_controll'
    },
    {
      name: 'Count Increment',
      route: '/count_increment'
    },
    {
        name: 'Todo List',
        route: '/todo_list',
      },
      {
        name: 'Form Submit',
        route: '/form_submit',
      },  
      {
        name: 'Weather App',
        route: '/weather_app',
      },
      {
        name: 'Previous State',
        route: '/previous_state',
      }, 
      {
        name: 'Toggle Boolean State',
        route: '/toggle_visibility',
      },  
      {
        name: 'Nested List App',
        route: '/nested_list_app',
      },   
      {
        name: 'Dynamic Form',
        route: '/dynamic_form',
      },  
      {
        name: 'Undo Redo App',
        route: '/undo_redo_app',
      }, 
      {
        name: 'Accordion Component',
        route: '/accordion_app',
      },   
      {
        name: 'Shopping Cart',
        route: '/shopping_cart',
      }, 
      {
        name: 'Like Button ',
        route: '/like_button',
      },      
      {
        name: 'Modal Open-Close ',
        route: '/modal_example',
      },              
  ]




export default function ControlleComponent() {
    return (

        <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Basic Concept of Controlled Component 
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