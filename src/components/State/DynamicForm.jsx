import React, { useState } from 'react';

const DynamicForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevFormState => ({
      ...prevFormState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-3xl">
        Form Handling with Multiple Inputs  
   </h1>
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
    </>
  );
};

export default DynamicForm;
