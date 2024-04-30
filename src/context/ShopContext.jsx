import { createContext, useState } from "react";
import { PRODUCTS } from "../produts";
import CartItem from "../pages/card/CartItem";
// import Product from "../pages/shop/Product";

export const ShopContext = createContext(null);

const getDeafaultCart = () => {
  let cart = {};

  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDeafaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cart[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = { cart, addToCart, removeFromCart, updateCartItemCount , getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
