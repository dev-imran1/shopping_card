import React from 'react';
import { PRODUCTS } from '../../produts';
import Product from './Product';


const Shop = () => {
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h1> Pedrotech Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((item)=>(
            <Product  data={item}/>
        ))}
        </div>
    </div>
  )
}

export default Shop
