import React from 'react'
// import '/shop.css';
import './shop.css'
const Product = (props) => {
    const {id, productName, price, productImage}= props.data;
  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="product__discription">
            <p className='productname'> <b>{productName}</b></p>
            <p className='productprice'>${price}</p>
        </div>
        <button className='addToCartBttn'>Add to card</button>
    </div>
  )
}

export default Product
