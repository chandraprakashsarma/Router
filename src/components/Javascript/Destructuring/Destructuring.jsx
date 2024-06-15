import React, {useState} from 'react'

export default function Destructuring() {
    //Destructuring Props and State
    const user = { name: 'Alice', email: 'alice@example.com', age: 25 };
    // Destructuring state
  const [age, setAge] = useState(user.age);
   // Destructuring props
   const { name, email } = user;
  

   const userOne = {
    name: 'Alice Wonderland',
    email: 'alice@example.com',
    address: {
      city: 'Wonderland',
      postalCode: '12345'
    }
  };
  const { nameOne, emailOne, address } = userOne;
  const { city, postalCode } = address;

    
    
    return(

        <>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Destructuring Props and State

        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        
                
        </div></div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Destructuring Arrays
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                
        </div></div>


        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Destructuring Arrays
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                
        </div></div>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Object Destructuring
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                
        </div></div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            User Profile
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        
        <h2 className="text-xl font-semibold text-gray-800">{nameOne}</h2>
        <p className="text-gray-600">{emailOne}</p>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Address</h3>
          <p className="text-gray-600">{city}</p>
          <p className="text-gray-600">{postalCode}</p>
        </div>
      </div>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
     D
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            
    </div></div>
            



        
        </>
    )
}