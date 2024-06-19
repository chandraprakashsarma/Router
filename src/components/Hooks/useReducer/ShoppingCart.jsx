import React, {useReducer} from 'react'

const cartItem = {
    items: [],
    totalAmount: 0,
  }
  console.log(cartItem)

  function reducer(state, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        const updatedItems = [...state.items, action.payload];
        const updatedAmount = state.totalAmount + action.payload.price;
        return { items: updatedItems, totalAmount: updatedAmount };
      case 'REMOVE_ITEM':
        const filteredItems = state.items.filter(item => item.id !== action.payload.id);
        const reducedAmount = state.totalAmount - action.payload.price;
        return { items: filteredItems, totalAmount: reducedAmount };
      default:
        return state;
    }
  }

export default function ShoppingCart() {
    const [state,dispatch] = useReducer(reducer,cartItem)

    const addItemToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      };
    
      const removeItemFromCart = (item) => {
        dispatch({ type: 'REMOVE_ITEM', payload: item });
      }




    return (

        <>
         <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <ul className="mb-6">
        {state.items.map((item) => (
          <li key={item.id} className="flex justify-between mb-2">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button
              onClick={() => removeItemFromCart(item)}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold">Total: ${state.totalAmount.toFixed(2)}</div>
      <button
        onClick={() => addItemToCart({ id: 3, name: 'Sample Item', price: 19.99 })}
        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md"
      >
        Add Sample Item
      </button>
    </div>

        </>
        
    )
}
