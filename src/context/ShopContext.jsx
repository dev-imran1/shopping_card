import { createContext, useState } from "react";
import { PRODUCTS } from "../produts";

export const ShopContext = createContext(null);

const getDeafaultCart =()=>{
    let cart = {};

    for(let i=0; i < PRODUCTS.length; i++){
        cart[i]= 0
    }
    return cart;
}

export const ShopContextProvider = (props)=>{
    const [cart, setCart] = useState(getDeafaultCart());

    const addToCart = (itemId)=>{
        setCart((prev)=>({...prev, [itemId]:prev[itemId] +1 }))
    }

    const removeFromCart = (itemId)=>{
        setCart((prev)=>({...prev, [itemId]:prev[itemId] -1 }))
    }

    const contextValue = {cart, addToCart , removeFromCart};

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}