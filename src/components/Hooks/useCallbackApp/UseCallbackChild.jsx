import React, {memo, useCallback, useState} from 'react'

const Test = memo(function({clickme}){
    console.log('This is child')
    return(
        <p>
            Child Component <br/>
            <button onClick={clickme}>Update</button>
        </p>
    )
})

function UseCallbackChild() {
    const [count, setCount] = useState(0)


    const clickme = useCallback(() => {
        console.log('Hello child=>', count);
      }, [count]);
      

  return (
    <>
         <button onClick={()=>setCount(count+1)}>
            Count Update {count}
         </button>
         <Test clickme={clickme}/>

    </>
  )
}

export default UseCallbackChild