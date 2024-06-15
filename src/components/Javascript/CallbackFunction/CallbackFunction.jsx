import React, {useState} from 'react'

export default function CallbackFunction() {

    const [message, setMessage]= useState('Click the button to see a message')
    //Define Callback function
    const handleClick =()=>{
        setMessage('Button was clicked')
    }

    //Counter button with Increment/Decrement
    const[count,setcount]=useState(0)

    const handleIncrement = ()=>{
        setcount(prevCount=>prevCount+1)
    }

    const handleDecrement =  ()=>{
        setcount(prevCount=>prevCount-1)
    }

    //Input Handling and Button Click
    const[inputValue,setInputValue]=useState('')
    const[messageOne,setMessageOne]=useState('')

    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const handleButtonClick =()=>{
        setMessageOne(`You entered: ${inputValue}`)
    }

    //ToDo List Add and Remove Task
    const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if(newTask.trim()){
        setTasks([...tasks,newTask])
        setNewTask('')
        
    }
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };





    return (

    <>
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
            Callback Function Basic Concept
        </h1>

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Handling Events
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <div className="text-center">
            <p className="mb-4 text-xl font-semibold">{message}</p>
            <button 
            onClick={handleClick} 
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
            Click Me
            </button>
            </div>
                
        </div></div>




        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Counter button with Increment/Decrement
        </h1>
            <div className="flex items-center justify-center h-96 bg-gray-100">
            <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <div className="flex items-center justify-center 96 bg-gray-100">
        <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold">Counter: {count}</h1>
            <div className="space-x-4">
            <button 
                onClick={handleIncrement} 
                className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
            >
                Increment
            </button>
            <button 
                onClick={handleDecrement} 
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            >
                Decrement
            </button>
            </div>
        </div>
        </div> </div></div>
                
        

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Input Handling and Button Click
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <div className="text-center">
                <div className="mb-4">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type something..."
                />
                </div>
                <button 
                onClick={handleButtonClick} 
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                Submit
                </button>
                <p className="mt-4 text-xl">{messageOne}</p>
            </div>
                
        </div></div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Create the ToDo List Component
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
            <div className="mb-4">
            <input
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Add a new task"
                value={newTask}
                onChange={(e)=>setNewTask(e.target.value)}
            />
            <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={addTask}
            >
                Add Task
            </button>
            </div>
            <ul className="space-y-2">
            {tasks.map((task, index) => (
                <li
                key={index}
                className="flex justify-between items-center p-2 border rounded"
                >
                {task}
                <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => removeTask(index)}
                >
                    Remove
                </button>
                </li>
            ))}
            </ul>
                
        </div></div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Passing Callbacks to Child Components
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                
        </div></div>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Fetching Data with useEffect and Callbacks
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                
        </div></div>

    </>
        
    )
}