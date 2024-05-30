import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import AddTodo from './ReduxTodoComponent/AddTodo'
import Todos from './ReduxTodoComponent/Todos'

export default function ReduxRTK() {
    return (

        <>
        <Provider store={store}>

        
            <AddTodo/>
            <Todos/>
        

        </Provider>

        </>
        
    )
}