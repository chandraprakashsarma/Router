import React, { useState } from 'react';

//Functional Component: The Form function defines a functional component named Form.
function Form() {

//State Initialization: The useState hook is used to initialize a state variable named formData, which is an object containing the user's name and email address. Initially, both fields are empty strings.
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });


  //Event Handlers:
  //handleChange: This function is called whenever the value of an input field changes. It updates the corresponding property in the formData state object based on the name attribute of the input field.
  //handleSubmit: This function is called when the form is submitted. It prevents the default form submission behavior, logs the form data to the console (you can replace this with your own form submission logic), and resets the form fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your desired form submission logic
    // Reset the form after submission
    setFormData({
      name: '',
      email: ''
    });
  };


//JSX Rendering:
//The JSX code renders a form with input fields for name and email address, along with a submit button.
//Each input field is associated with an event listener (onChange) that triggers the handleChange function when the input value changes.
//The form is associated with the handleSubmit function, which is called when the form is submitted.
//Tailwind CSS classes are used to style the form elements for a modern and clean appearance.
  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-3xl mb-4">User Information Form</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
