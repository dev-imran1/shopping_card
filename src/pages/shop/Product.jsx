import React from 'react'

const Product = (props) => {
    const {id,productName,price,productImage}= props.data;
  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="product__discription">
            <p>{productName}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default Product
