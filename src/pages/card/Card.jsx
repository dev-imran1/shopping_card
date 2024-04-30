import React, { useContext } from 'react'
import { PRODUCTS } from '../../produts'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem';
import './cart.css'

const Card = () => {
  const {cart, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount()

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((prouduct)=> {
          if(cart[prouduct.id] !== 0){
            return <CartItem data={prouduct}/>
          }
        })}
      </div>
      <div className="checkout">
        <p> Subtotal : $ {totalAmount}</p>
        <button> Coutinue Shopping</button>
        <button> CheckOut</button>
      </div>
    </div>
  )
}

export default Card
