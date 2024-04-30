import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/ShopContext";



const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cart } = useContext(ShopContext);
  const cartitemsAmount = cart[id]
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="product__discription">
        <p className="productname">
          {" "}
          <b>{productName}</b>
        </p>
        <p className="productprice">${price}</p>
      </div>
      <button className="addToCartBttn" onClick={()=>(addToCart(id))}>Add to card {cartitemsAmount > 0 && <>({cartitemsAmount})</>}</button>
    </div>
  );
};

export default Product;
