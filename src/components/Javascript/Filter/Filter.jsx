import React, {useState} from 'react'

export default function FilterMethod() {
    const data = [
        { id: 1, name: 'Item 1', category: 'A' },
        { id: 2, name: 'Item 2', category: 'B' },
        { id: 3, name: 'Item 3', category: 'A' },
        { id: 4, name: 'Item 4', category: 'C' },
      ];
    // Filtering the data array to get items with category 'A'
  const filteredData = data.filter(item => item.category === 'A');
  

  // State for managing the search query entered by the user
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for managing the list of items
  const [items, setItems] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
  ]);

  // Filter items based on search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Filter Method Basic
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
    <h1>Items with Category A</h1>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    
      
    </div>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Filtered List
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        {/* Input field for searching items */}
      <input
        type="text"
        placeholder="Search items..."
        className="border border-gray-400 rounded-md p-2 mb-4"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      
      {/* Displaying filtered items in a grid */}
      <ul className="grid grid-cols-2 gap-4">
        {filteredItems.map(item => (
          <li key={item.id} className="border border-gray-300 p-2 rounded-md">
            {item.name}
          </li>
        ))}
      </ul>
            
    </div>
    </div>



</>

)
}
