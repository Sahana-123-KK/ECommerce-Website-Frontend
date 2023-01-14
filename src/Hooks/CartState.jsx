import React from "react";
import { useState } from "react";
import CartContext from "./CartContext";

const CartState = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [address, setAddress] = useState("");
  const [isPlaced,setIsPlaced] = useState(false)

  return (
    <CartContext.Provider
      value={{ cart, setCart, isCheckout, setIsCheckout, address, setAddress ,isPlaced,setIsPlaced}}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};

export default CartState;
