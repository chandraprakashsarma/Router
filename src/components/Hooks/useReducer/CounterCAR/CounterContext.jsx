import React, {createContext, useContext, useReducer} from 'react'
import {counterReducer, initialState} from './counterReducer'

const CounterContext = createContext()

export function CounterProvider(children) {
    const [state, dispatch] = useContext(counterReducer,initialState)

    return (
        <CounterContext.Provider value={{state,dispatch}}>
           {children}
        </CounterContext.Provider>
    )

}

export function useCounter () {
    const context = useContext(CounterContext)
    if(!context){
        throw new Error('useCounter must be used within a CounterProvider')
    }
    return context
}