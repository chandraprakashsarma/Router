import React from 'react'

function YoutubApp(props) {
  console.log(props)
 

  return (
    <div className="flex items-center p-4 border-b">
      
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="text-gray-600">{props.views}</p>
        
      </div>        
    </div>
  )
}

export default YoutubApp