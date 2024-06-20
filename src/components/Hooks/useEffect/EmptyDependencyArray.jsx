import React, {useState, useEffect} from 'react'

function EmptyDependencyArray() {
    const [data, setData] = useState(null)

    useEffect(()=>{
        console.log('Use Effect Run - Empty Dependency Array')
    // This will only run once, after the initial render
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>setData(data))

    },[])

  return (
    <div>
        {data?<div>Data fetched!</div>:<div>Loading....</div>}
    </div>
  )
}

export default EmptyDependencyArray