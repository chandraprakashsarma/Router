import React, {useState} from 'react';
import axios from 'axios';
import SubmitFormButton from '../EventsHandling/SubmitFormButton';

function ButtonComponent() {

  //Button onClick Alert
  const handleClick = () => {
    alert('Button was clicked!');
  };

  //Button with Counter
  const [count, setCount] = useState(0)
  const incrementCounter =()=>{
    setCount(count+1)
  }

  //Toggle Button
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  //Button with Input Field
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    alert(`Input Value: ${inputValue}`);
  };
  
  //Button with Confirmation Dialog
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    // Perform action here
    alert('Action confirmed!');
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  //Button Group with Active State
  const [activeButton, setActiveButton] = useState(null);

  const handleClickActiveButton = (button) => {
    setActiveButton(button);
  };

  //Button with Dynamic Text
  const [buttonText, setButtonText] = useState('Click Me');

  const handleClickDynamicText = () => {
    setButtonText('Button Clicked!');
    // Reset button text after 1 second
    setTimeout(() => {
      setButtonText('Click Me');
    }, 1000);
  };


//Button with Tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  //Button with API Request
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleClickAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  //Modal Button
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //Submit Form Button
  



















  return (
    <>
     <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
         Button onClick Alert Component
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
      >
        Click Me!
      </button>
    </div></div>
    


    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Button with Counter
    </h1>
    <div className="flex flex-col items-center justify-center w-64 h-32  bg-gray-100">
      <button
        onClick={incrementCounter}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 mb-4"
      >
        Increment Counter
      </button>
      <p className="text-lg font-medium">Count: {count}</p>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Toggle Button
    </h1>
    <div className="flex items-center justify-center w-64 h-32 bg-gray-100">
      <button
        onClick={handleToggle}
        className={`px-4 py-2 font-semibold rounded-md transition duration-300 ${
          isOn ? 'bg-red-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>


    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
         Button with Input Field
    </h1>
    <div className="flex flex-col items-center justify-center w-64 h-32 bg-gray-100">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
      <button
        onClick={handleButtonClick}
        className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-300"
      >
        Show Input
      </button>
    </div>




    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Button with Confirmation Dialog
    </h1>
    <div className="flex items-center justify-center w-64 h-32 bg-gray-100">
      {showConfirmation ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="mb-2">Are you sure you want to perform this action?</p>
          <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Confirm</button>
          <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirmation(true)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
          Delete Item
        </button>
      )}
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Button Group with Active State
    </h1>
    <div className="flex items-center justify-center w-64 h-32 bg-gray-100">
      <button
        onClick={() => handleClickActiveButton('button1')}
        className={`px-4 py-2 font-semibold rounded-md mr-2 ${
          activeButton === 'button1' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        Button 1
      </button>
      <button
        onClick={() => handleClickActiveButton('button2')}
        className={`px-4 py-2 font-semibold rounded-md ${
          activeButton === 'button2' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        Button 2
      </button>
    </div>


    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Button with Dynamic Text
    </h1>
    <div className="flex items-center justify-center w-64 h-32 bg-gray-100">
      <button
        onClick={handleClickDynamicText}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
      >
        {buttonText}
      </button>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Button with Tooltip
    </h1>
    <div className="flex items-center justify-center w-64 h-32 bg-gray-100 relative">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
      >
        Hover Me
      </button>
      {showTooltip && (
        <div className="absolute top-10 bg-black text-white text-sm rounded-md px-2 py-1">
          Tooltip text using useState
        </div>
      )}
    </div>

    
    
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Button with API Request
    </h1>
    <div className="flex flex-col items-center justify-center w-100 h-40 bg-gray-100">
      <button
        onClick={handleClickAPI}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 mb-4"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div className="p-4 bg-white shadow-md rounded-md">
          <h3 className="text-lg font-bold mb-2">{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>




    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Modal Button
    </h1>
    <div className="flex items-center justify-center w-100 h-40 bg-gray-100">
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Modal Title - Chandra Prakash Sharma</h2>
            <p className="mb-4">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Submit Form Button
    </h1>
    <SubmitFormButton />














    </>
  );
}

export default ButtonComponent;
