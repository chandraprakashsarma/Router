import React, { useState } from 'react';

const InputControll = () => {
  // Initialize state for username
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedRadio, setSelectedRadio] = useState('Not yet seleted');
  const [text, setText] = useState('Please write Yourself');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
    country: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prevState => {
        if (checked) {
          return { ...prevState, hobbies: [...prevState.hobbies, value] };
        } else {
          return { ...prevState, hobbies: prevState.hobbies.filter(hobby => hobby !== value) };
        }
      });
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (formData.hobbies.length === 0) newErrors.hobbies = 'At least one hobby is required';
    if (!formData.country) newErrors.country = 'Country is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Form data submitted:', formData);
    }
  };





  return (
    <>
    
        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Controlled Input Component 
        </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="w-1/3 bg-white p-8 rounded shadow-lg">
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'
        className="border p-2 rounded w-full"
      />
      <p className="mt-2">Current Username: {username}</p>
    </div>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Email Input Field 
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="w-1/3 bg-white p-8 rounded shadow-lg">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 rounded w-full"
      />
      <p className="mt-2">Email: {email}</p>
    </div>
    </div>




    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Select Dropdown 
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="w-1/3 bg-white p-8 rounded shadow-lg">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p className="mt-2">Selected Option: {selectedOption}</p>
    </div>
    </div>


    
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Radio Buttons 
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="w-1/3 bg-white p-8 rounded shadow-lg">
      <div className="mb-2">
        <label className="mr-2">
          <input
            type="radio"
            value="option1"
            checked={selectedRadio === 'option1'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Option 1
        </label>
        <label className="mr-2">
          <input
            type="radio"
            value="option2"
            checked={selectedRadio === 'option2'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Option 2
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedRadio === 'option3'}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          Option 3
        </label>
      </div>
      <p>Selected Option: {selectedRadio}</p>
    </div>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Textarea 
    </h1>
    <div className="flex items-center justify-center h-96 bg-gray-100">
    <div className="w-1/3 bg-white p-8 rounded shadow-lg">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here"
        className="border p-2 rounded w-full h-32"
      />
      <p className="mt-2">Text: {text}</p>
    </div>
    </div>



    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        Registration Form 
    </h1>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit} className="w-1/3 bg-white p-8 rounded shadow-lg">
      <div>
        <label className="block mb-2">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <div>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div>
        <label className="block mb-2">Gender</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
        {errors.gender && <p className="text-red-500">{errors.gender}</p>}
      </div>

      <div>
        <label className="block mb-2">Hobbies</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              checked={formData.hobbies.includes('reading')}
              onChange={handleChange}
              className="mr-2"
            />
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="traveling"
              checked={formData.hobbies.includes('traveling')}
              onChange={handleChange}
              className="mr-2"
            />
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="gaming"
              checked={formData.hobbies.includes('gaming')}
              onChange={handleChange}
              className="mr-2"
            />
            Gaming
          </label>
        </div>
        {errors.hobbies && <p className="text-red-500">{errors.hobbies}</p>}
      </div>

      <div>
        <label className="block mb-2">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        {errors.country && <p className="text-red-500">{errors.country}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
    <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
        {formData} 
    </h1>
    </div>
    
    
    





    
    </>
  );
};

export default InputControll;
