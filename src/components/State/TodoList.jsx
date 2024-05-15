//Import Statements: The code starts with importing the necessary modules from React.
import React, { useState } from 'react';

//Functional Component: The TodoList function defines a functional component named TodoList.
function TodoList() {

//State Initialization: Two state variables are initialized using the useState hook:
//todos: This state variable holds an array of todo items.
//inputValue: This state variable holds the current value of the input field.
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  //Event Handlers:
  //handleInputChange: This function is called whenever the input field's value changes. It updates the inputValue state variable accordingly.
  //handleAddTodo: This function is called when the "Add" button is clicked. It adds the current value of the input field to the todos array and clears the input field.
  //handleDeleteTodo: This function is called when the "Delete" button next to a todo item is clicked. It removes the corresponding todo from the todos array.
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };


  //JSX Rendering:
  //The JSX code defines the structure and appearance of the todo list application.
  //It includes an input field for adding new todos, a button to add todos, and a list of todos with delete buttons.
  //Each todo item in the list is rendered dynamically using the map function on the todos array.
  //Each todo item has a "Delete" button associated with it, which triggers the handleDeleteTodo function when clicked.  
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border-gray-300 border-2 rounded-l px-4 py-2"
          placeholder="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-2">
            <span>{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
