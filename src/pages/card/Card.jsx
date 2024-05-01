import React, { useContext } from 'react'
import { PRODUCTS } from '../../produts'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem';
import './cart.css'
import { useNavigate } from 'react-router-dom';


const Card = () => {
  const {cart, getTotalCartAmount } = useContext(ShopContext);
  let totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

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
      {totalAmount > 0 ?
      <div className="checkout">
        <p> Subtotal : $ {totalAmount}</p>
        <button onClick={()=>navigate("/shop")}> Coutinue Shopping</button>
        <button> CheckOut</button>
      </div>
      :
      <h1>Your Card is Empty</h1>
      
    }
    </div>
  )
}

export default Card
