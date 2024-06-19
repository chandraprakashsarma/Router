import React from 'react'
import {useCounter} from './CounterContext'

function Counter(){
    const {state,dispatch} = useCounter()

    return(
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
        </div>
    )
}

export default Counter