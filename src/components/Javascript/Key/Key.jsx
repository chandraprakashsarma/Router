import React, {useState} from 'react'

export default function Key() {
    const numbers = [1,2,3,4,5,6]

    const [items, setItems] = useState([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ]);
  
    const addItem = () => {
      const newItem = {
        id: Math.floor(Math.random() * 1000), // Generate a random ID
        name: `Item ${items.length + 1}`,
      };
      setItems([...items, newItem]);
    };
  
    const removeItem = (id) => {
      setItems(items.filter(item => item.id !== id));
    };

    

    
    
    return(

      <>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Key
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg ">
            <ul className="divide-y divide-gray-200 ">
                {numbers.map((number)=>(
                    <li key={number.toString()} className="py-4">
                        {number}
                    </li>

                ))}
            </ul>    
                
        </div></div>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            List of products
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Item List</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={addItem}
          >
            Add Item
          </button>
          <ul>
            {items.map(item => (
              <li key={item.id} className="flex justify-between items-center bg-gray-100 rounded p-2 mb-2">
                <span>{item.name}</span>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
                
        </div></div>


        
      </>
    )
}