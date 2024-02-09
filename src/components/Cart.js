import React, { createContext, useEffect, useReducer, useState } from 'react';
import './cart.css'
import {products} from './products'
import ContextCart from './ContextCart';
import {reducer} from './reducer'

//cart is the parent and item is the child here you need to pass data from cart to item via product file 

export const CartContext  = createContext();
const initialState = {
   item : products,
   totalAmount : 0,
   totalItem : 0
}

//we are passing products data globally using context api now , so we don't need useState now

const Cart = () => {
   // const [item, setItem] = useState(products);
   const [state, dispatch] = useReducer(reducer, initialState)
   const removeItem = (id) =>{
      dispatch({
         type : "REMOVE_ITEM",
         payload: id
      })
   }

   const increment = (id) =>{
      dispatch({
         type : "INCREMENT",
         payload : id
      })
   }

   const decrement = (id) =>{
      dispatch({
         type : "DECREMENT",
         payload : id
      })
   }

   const clearCart = () =>{
      dispatch ({
         type : "CLEAR"
      })
   }

   useEffect(() => {
      dispatch({
         type : "GET_TOTAL"
      })
   }, [state.item])
   
   return (
      <>
      <CartContext.Provider value ={{...state, removeItem , increment, decrement , clearCart}}>
        <ContextCart/>
        </CartContext.Provider>
      </>
   )
}

export default Cart