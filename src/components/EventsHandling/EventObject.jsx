import React, {useState} from 'react'

function EventObject() {

    const handleClick = (event) => {
        // Prevent the default behavior of the event
        event.preventDefault();
    
        // Access the event type
        console.log('Event Type:', event.type);
    
        // Access the target element (the button)
        console.log('Event Target:', event.target);
    
        // Access other properties
        console.log('Button Text:', event.target.innerText);
      };


    //Handling Form Events
    const [formData, setFormData] = useState({ name: '', email: '' });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data:', formData);
    };


    //Handling Keyboard Events
    const [key, setKey] = useState('');

    const handleKeyPress = (event) => {
        setKey(event.key);
        console.log(`Key pressed: ${event.key}`);
    };

    //Handling Form Focus and Blur Events
    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    //Handling Drag and Drop Events
    const [dragging, setDragging] = useState(false);
    const [dropped, setDropped] = useState(false);
    const handleDragOver = (event) => {
        event.preventDefault();
      };
    
      const handleDragEnter = () => {
        setDragging(true);
      };
    
      const handleDragLeave = () => {
        setDragging(false);
      };
    
      const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        setDropped(true);
        console.log('Item dropped');
      };


  return (
     <>
     <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
     Event Object
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
            Click Me
        </button>
    </div></div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Handling Form Events
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
            
    </div></div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Handling Keyboard Events
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
    <input
        type="text"
        onKeyPress={handleKeyPress}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Press any key"
      />
      {key && <p className="mt-4 text-lg">You pressed: {key}</p>}
            
    </div></div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Handling Form Focus and Blur Events
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
    <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full px-3 py-2 border rounded-md ${focused ? 'border-blue-500' : 'border-gray-300'}`}
        placeholder="Focus and blur me"
      />
      <p className="mt-4 text-lg">{focused ? 'Input is focused' : 'Input is blurred'}</p>
            
    </div></div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Handling Drag and Drop Events
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
        <div
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-64 h-64 border-2 ${dragging ? 'border-blue-500' : 'border-gray-300'} flex items-center justify-center`}
        >
            {dropped ? <p>Item Dropped</p> : <p>Drag Item Here</p>}
        </div>
            
    </div></div>


 
 </>   
)
}

export default EventObject