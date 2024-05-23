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
          name: 'Spread Operator',
            
          route: '/spread_operator',
            
            
        },
        {
          name: 'Map Function',
            
          route: '/map_function',
            
            
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

  //Bsic Use of Map Function
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  
  //Creating Dynamic Components
  const products = [
    { id: 1, name: 'Laptop', price: '$1000' },
    { id: 2, name: 'Smartphone', price: '$500' },
    { id: 3, name: 'Tablet', price: '$300' }
  ];

  //Generating Form Inputs
  const options = ['Option 1', 'Option 2', 'Option 3'];

  //Conditional Styling Based on Data
  const tasks = [
    { id: 1, title: 'Do laundry', completed: true },
    { id: 2, title: 'Wash dishes', completed: false },
    { id: 3, title: 'Buy groceries', completed: false }
  ];
  //Grid Layout for Profile Cards
  const usersOne = [
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
    { id: 3, name: 'Alice Johnson', role: 'Moderator' }
  ];
  //Navigation Menu
  const navItems = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About', href: '/about' },
    { id: 3, name: 'Services', href: '/services' },
    { id: 4, name: 'Contact', href: '/contact' }
  ];

  //Dynamic Buttons
  const buttons = [
    { id: 1, label: 'Primary', type: 'primary' },
    { id: 2, label: 'Secondary', type: 'secondary' },
    { id: 3, label: 'Success', type: 'success' }
  ];
  //Generating a Pricing Table
  const pricingPlans = [
    { id: 1, name: 'Basic', price: '$10/month', features: ['Feature 1', 'Feature 2'] },
    { id: 2, name: 'Pro', price: '$20/month', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { id: 3, name: 'Enterprise', price: '$30/month', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] }
  ];
  //Generating Tag Clouds
  const tags = [
    { id: 1, name: 'React', color: 'bg-blue-500' },
    { id: 2, name: 'JavaScript', color: 'bg-yellow-500' },
    { id: 3, name: 'CSS', color: 'bg-green-500' },
    { id: 4, name: 'HTML', color: 'bg-red-500' }
  ];





  

export default function Javascript() {
    return (

        <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Javascript React Basic Concept
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





      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Bsic Use of Map Function - Rendering Lists of Data
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <h1>Item List</h1>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

              
      </div>
      </div>





      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Creating Dynamic Components - Create multiple instances of a component based on data
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          <h1>Item List</h1>
          {products.map(product => (
          <Product key={product.id} id={product.id} name={product.name} price={product.price} />
          ))}

              
      </div>
      </div>



      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Generating Form Inputs
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <form>
          {options.map((option, index) => (
            <label key={index}>
              <input type="checkbox" name="options" value={option} />
              {option}
            </label>
          ))}
            </form>

              
      </div>
      </div>



      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Conditional Styling Based on Data
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
      <ul className="p-4">
        {tasks.map(task => (
          <li key={task.id} className={`p-2 ${task.completed ? 'line-through text-green-500' : 'text-red-500'}`}>
            {task.title}
          </li>
        ))}
      </ul>
              
      </div>
      </div>



      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Grid Layout for Profile Cards
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {usersOne.map(user => (
          <div key={user.id} className="bg-white border rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.role}</p>
          </div>
        ))}
      </div>
              
      </div>
      </div>



      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Navigation Menu
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
      <nav className="bg-gray-800 p-4">
    <ul className="flex space-x-4">
        {navItems.map(item => (
          <li key={item.id}>
            <a href={item.href} className="text-white hover:text-gray-300">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
              
      </div>
      </div>



      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Dynamic Buttons
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
      {buttons.map(button => (
      <button
            key={button.id}
            className={`py-2 px-4 rounded ${
              button.type === 'primary' ? 'bg-blue-500 text-white' :
              button.type === 'secondary' ? 'bg-gray-500 text-white' :
              'bg-green-500 text-white'
            }`}
          >
            {button.label}
          </button>
        ))}
              
      </div>
      </div>



      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Generating a Pricing Table
      </h1>
      <div className="flex items-center justify-center  bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          {pricingPlans.map(plan => (
          <div key={plan.id} className="border rounded-lg shadow-md p-4 w-full md:w-1/3 ">
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="text-gray-600">{plan.price}</p>
            <ul className="mt-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
      </div>


      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Generating Tag Clouds
      </h1>
      <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
          {tags.map(tag => (
          <span key={tag.id} className={`${tag.color} text-white px-3 py-1 rounded`}>
            {tag.name}
          </span>
        ))}
        
      </div>
      </div>











      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
          Building a FAQ Section
      </h1>

      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
      Creating a Responsive Footer
      </h1>
      <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
      Dynamic Testimonial Carousel
      </h1>









        </>
        
        
    )
    

}

const Product = ({ id, name, price }) => (
  <div>
    <h2>{id}</h2>
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
);