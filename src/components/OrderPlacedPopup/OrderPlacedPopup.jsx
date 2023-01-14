import React from "react";
import { useContext } from "react";
import cartContext from "../../Hooks/CartContext";
import "./orderPlacedPopup.css";
import { useNavigate } from "react-router-dom";
const OrderPlacedPopup = () => {
  const navigate = useNavigate();
  const {
    address,
    setAddress,
    isPlaced,
    setIsPlaced,
    isCheckout,
    setIsCheckout,
    setCart,
  } = useContext(cartContext);

  const continueShop = () => {
    setAddress("");
    setIsPlaced(false);
    setIsCheckout(false);
    setCart([]);
    navigate("/");
  };
  return (
    <div className="flexxcolplaceorderpopup">
      <i class="bi bi-check2 placedordericon"></i>
      <h3 className="headplaced">Your Order Has Been Placed Successfully</h3>
      <h4 className="datedeliver">Delivery Date: Tommorrow</h4>
      <h5 className="addressorderplace2">Delivery Address : {address} </h5>
      <button onClick={continueShop} className="btnorderplacepage">
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderPlacedPopup;
