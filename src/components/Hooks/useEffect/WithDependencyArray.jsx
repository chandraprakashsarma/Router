import React, {useState, useEffect} from 'react'

function WithDependencyArray() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)

    useEffect(()=>{
        console.log('USe Effect run when Count change')
        // This will run after the initial render and whenever `count` changes
        fetch('https://jsonplaceholder.typicode.com/posts/${count}')
        .then(response=>response.json)
        .then(data=>setData(data))
    },[count])


  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <div>{data?<p>Data fatched for post {count}!</p> : <p>Loading....</p>}</div>
    </div>
  )
}

export default WithDependencyArray