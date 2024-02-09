import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import {products} from './products';
import { useState } from 'react';
import { CartContext } from './Cart';




const ContextCart = () => {
    // const [item, setItem] = useState(products)
    const {item ,clearCart , totalItem, totalAmount }  = useContext(CartContext)
    console.log("totalAmount", totalAmount)
  return (
   <>
    <header>
            <div className='continue-shopping'>
               <img src='./images/arrow.png' alt='arrow' className='arrow-icon' />
               <h3>continue shopping</h3>
            </div>

            <div className='cart-icon'>
               <img src='./images/cart.png' alt='cart' />
               <p>{totalItem}</p>
            </div>
         </header>

         <section className='main-cart-section'>
            <h1>shopping cart</h1>
            <p className='total-items'>you have total<span className='total-items-count'> {totalItem} </span> items </p>


            <div className='cart-items'>
               <div className='cart-items-container'>
                  <Scrollbars>

                     {
                        item.map((currItem)=>{
                          return <Items key={currItem.id} {...currItem}/>
                        })
                     }
                   

                     
                  </Scrollbars>
               </div>
            </div>

            <div className='card-total'>
               <h3>Cart Total :   <span>{totalAmount}</span></h3>
               <button>Checkout</button>
               <button className="clear-cart" onClick={()=>clearCart()}>Clear Cart</button>
            </div>
         </section>
   </>
  )
}

export default ContextCart