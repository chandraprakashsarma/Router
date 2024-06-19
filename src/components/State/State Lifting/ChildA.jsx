import React from 'react'

function ChildA(props) {
    const handleChange = (event)=>{
        props.setData(event.target.value)
    }
  return (
        <input
        type="text"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type something..."
    />
  )
    
  
}

export default ChildA

