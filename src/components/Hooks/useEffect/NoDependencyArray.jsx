import React, {useState, useEffect} from 'react'

function NoDependencyArray() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
     // This will run after every render
     console.log('Component rendered or updated')

     // For demonstration, incrementing count every second
     const interval = setInterval(()=>{
        setCount(prevCount=>prevCount+1)
     },100000)

     // Cleanup on unmount
     return()=>clearInterval(interval)
  })
  
  
  
    return (
    <div>
        <p>Count : {count}</p>
    </div>
  )
}

export default NoDependencyArray