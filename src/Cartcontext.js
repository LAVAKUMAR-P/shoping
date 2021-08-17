import React, { useState } from "react";

let CartContext = React.createContext();

export default CartContext;

//provide data to children

export const CartProvider =({children}) =>{
  const [cartItems, setCartItems] = useState([])
  return <CartContext.Provider value={{cartItems,setCartItems}}>
            {children}
           
        </CartContext.Provider>

}