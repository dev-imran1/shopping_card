import React, { useContext } from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext';
const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart,removeFromCart, cart, updateCartItemCount } = useContext(ShopContext);


  return (
    <div className='cartItem'>
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandeler">
          <button onClick={()=>removeFromCart(id)}> - </button>
          <input onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} value={cart[id]} type="text" />
          <button onClick={()=>addToCart(id)}> + </button>
          </div>        
      </div>

    </div>
  )
}

export default CartItem
