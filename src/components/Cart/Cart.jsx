import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import cartContext from "../../Hooks/CartContext";
import CartCard from "../CartCard/CartCard";
import OrderPlacedPopup from "../OrderPlacedPopup/OrderPlacedPopup";
import "./cart.css";

const Cart = () => {
  // const [isCheckout, setIsCheckout] = useState(false);
  const {
    cart,
    setCart,
    isCheckout,
    setIsCheckout,
    address,
    setAddress,
    setIsPlaced,
    isPlaced,
  } = useContext(cartContext);
  const [cost, setCost] = useState(0);
  let sum = 0;
  useEffect(() => {
    sum = 0;
    setCost(0);
    cart.forEach((item) => {
      sum = sum + item?.price;
    });

    setCost(sum);
  }, [cart]);

  const emptyCart = () => {
    setCart([]);
  };
  const handleCheckout = () => {
    setIsCheckout(!isCheckout);
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  const placeOrder = () => {
    if (address.length === 0) {
      alert("Fill Address");
    } else {
      setIsPlaced(true);
    }
  };
  return (
    <div className={cart.length===0 ? "cartpageflexxrownothing" : "cartpageflexxrow"}>
      <div className="cartpageinnerflexxcol">
        <h5 className="headcartpage">Products In Your Cart</h5>
        <div className="flexxcolcartitemscontainer">
          {cart.length === 0
            ? "Your Cart Is Emtpy"
            : cart.map((item, ind) => {
                return <CartCard item={item} />;
              })}
        </div>
        <div className="flexxcolsumcart">
          {cart.length !== 0 && (
            <>
              <div className="flexxrowcarttotalsum">
                <h5 className="subhead">SUBTOTAL</h5>
                <h5 className="costcarttotal">₹{cost}.00 </h5>
              </div>
              <button onClick={handleCheckout} className="checkoutbtn">
                {isCheckout ? "Cancel" : "Checkout"}
              </button>

              {!isCheckout && (
                <button onClick={emptyCart} className="emptycart">
                  Empty Cart!
                </button>
              )}
              {isCheckout && (
                <div className="flexxcoladdressdiv">
                  <label htmlFor="address" className="addaddress">
                    Enter Your Address
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={address}
                    name=""
                    placeholder="Enter Address here"
                    id="address"
                    cols="30"
                    rows="3"
                    className="enteraddress"
                  ></textarea>
                  <div className="flexxbtnalign">
                    <button onClick={placeOrder} className="orderplacebtn">
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
          {isPlaced && <OrderPlacedPopup />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
