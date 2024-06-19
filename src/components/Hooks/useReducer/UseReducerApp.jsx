import React, {useReducer} from 'react'
import ShoppingCart from './ShoppingCart'

const initialState = {
    name: '',
    email: '',
    password: ''
  }
  console.log(initialState)

function reducer(state,action){
    switch(action.type){
        case 'SET_NAME': return {...state, name:action.payload}
        case 'SET_EMAIL': return {...state,email:action.payload}
        case 'SET_PASSWORD': return {...state, password:action.payload}
        default : return state

    }

}





export default function UseReducerApp() {
    const [state, dispatch] = useReducer(reducer,initialState)
    console.log(state)


    return (

        <>
         <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl">
             Use Reducer App Basic Concept
        </h1>



        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Multiple Input Fields
        </h1>
        <div className="flex items-center justify-center bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg mt-8 mb-6">
            <form className="max-w-md mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
                        <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        value={state.name}
                        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                    >
                        Submit
                    </button>
            </form>
                
        </div></div>



        

        <h1 className="mt-8 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-2xl">
            Shopping Cart
        </h1>
        <div className="flex items-center justify-center h-96 bg-gray-100">
        <div className="container mx-auto w-1/2 bg-white p-8 rounded shadow-lg">
                <ShoppingCart/>
        </div></div>



        



    

        
        
        
        
        
        
        </>
        
    )
}