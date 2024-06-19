import React from 'react'

function ChildB(props) {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-sm bg-white">
    <p className="text-lg">Received data: {props.data}</p>
    </div>
)  
}

export default ChildB

