import React, {useState, useEffect} from 'react'

//Basics 
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
//Handling More Complex Data Structures
const usersTwo = [
    { id: 1, name: 'Alice', age: 25, location: 'New York' },
    { id: 2, name: 'Bob', age: 30, location: 'San Francisco' },
    { id: 3, name: 'Charlie', age: 35, location: 'Los Angeles' }
  ];
//Conditonal Styling with Tailwind CSS
const usersThree = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Charlie', active: true }
  ];
//Handling Nested Data Structures
const teams = [
    { 
      id: 1, 
      name: 'Team Alpha', 
      members: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]
    },
    { 
      id: 2, 
      name: 'Team Beta', 
      members: [
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'Dave' }
      ]
    }
  ];


const Map =()=> {
    
    //Dynamic Class Names Based on Props or State
    const [usersState, setStateUsers] = useState([
        { id: 1, name: 'Alice', active: true },
        { id: 2, name: 'Bob', active: false },
        { id: 3, name: 'Charlie', active: true }
      ]);
    
      const toggleActive = (id) => {
        setStateUsers(usersState.map(user => 
          user.id === id ? { ...user, active: !user.active } : user
        ));
      };

    //Handling asynchronous data often involves fetching data from an API
    const [usersAPI, setUsersAPI] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setUsersAPI(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <div className="p-4 text-center">Loading...</div>;
      }
    
      if (error) {
        return <div className="p-4 text-center text-red-600">Error: {error}</div>;
      }
 




    return (

     <>
        
       
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
            Basic Example with map()
        </h1>
        <div className="p-4">
         {users.map(user => (
        <div key={user.id} className="p-2 bg-gray-100 rounded mb-2 shadow-sm ">
          {user.name}
        </div>
        ))}
       </div>



       <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
           Handling More Complex Data Structures
        </h1>
        <div className="p-4 max-w-lg mx-auto bg-gray-100">
              {usersTwo.map(user => (
                <div key={user.id} className="p-4 bg-white rounded shadow-md mb-4 ">
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-gray-700">Age: {user.age}</p>
                  <p className="text-gray-700">Location: {user.location}</p>
                </div>
              ))}
        </div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
            Conditional Styling with Tailwind CSS
        </h1>
        <div className="p-4 max-w-lg mx-auto">
              {usersThree.map(user => (
                <div 
                  key={user.id} 
                          className={`p-4 rounded shadow-md mb-4 ${user.active ? 'bg-green-100' : 'bg-red-100'}`}
                >
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className={`text-${user.active ? 'green' : 'red'}-700`}>
                    {user.active ? 'Active' : 'Inactive'}
                  </p>
                </div>
              ))}
        </div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
            Handling Nested Data Structures
        </h1>
        <div className="p-4 max-w-xl mx-auto bg-gray-100">
             {teams.map(team => (
               <div key={team.id} className="mb-6 bg-white rounded shadow ">
                 <h2 className="text-2xl font-bold mb-2">{team.name}</h2>
                 <ul className="pl-4">
                   {team.members.map(member => (
                     <li key={member.id} className="text-lg text-gray-800 mb-1">
                       {member.name}
                     </li>
                   ))}
                 </ul>       
               </div>
             ))}
        </div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
            Dynamic Class Names Based on Props or State
        </h1>
        <div className="p-4 max-w-lg mx-auto">
             {usersState.map(user => (
               <div 
                 key={user.id} 
                 className={`p-4 rounded shadow-md mb-4 ${user.active ? 'bg-green-100' : 'bg-red-100'}`}
               >
                 <h2 className="text-xl font-bold">{user.name}</h2>
                 <button 
                   onClick={() => toggleActive(user.id)} 
                   className={`mt-2 p-2 rounded ${user.active ? 'bg-green-500' : 'bg-red-500'} text-white`}
                 >
                   {user.active ? 'Deactivate' : 'Activate'}
                 </button>
               </div>
             ))}
        </div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
            Handling asynchronous data often involves fetching data from an API
        </h1>
        <div className="p-4 max-w-lg mx-auto bg-gray-100">
             {usersAPI.map(user => (
               <div key={user.id} className="p-4 bg-white rounded shadow-md mb-4">
                 <h2 className="text-xl font-bold">{user.name}</h2>
                 <p className="text-gray-700">Email: {user.email}</p>
                 <p className="text-gray-700">Address: {user.address.street}, {user.address.city}</p>
               </div>
              ))}
        </div>        
            


    
      
        
        
     </>    
    )
}

export default Map