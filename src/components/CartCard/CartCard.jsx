import React from "react";
import "./cartcard.css";
import shirt1 from "../../images/shirt1.png";
import hoodie1 from "../../images/hoodie1.jpg";
import frock1 from "../../images/frock1.jpg";
import goggle1 from "../../images/gogg1.png";
import jeans1 from "../../images/jeans1.jpg";
import tshirt1 from "../../images/tshirt1.jpg";
import sneakers1 from "../../images/sneakers1.png";
import { useContext } from "react";
import cartContext from "../../Hooks/CartContext";
import { Link } from "react-router-dom";
const CartCard = ({ item }) => {
  const { cart, setCart } = useContext(cartContext);

  const deleteFromCart = (id) => {
    setCart(() => {
      return cart.filter((product, ind) => {
        return item?.id !== product?.id;
      });

      // let index = cart.findIndex((pro) => pro?.id === item?.id);

      // setCart(() => {
      //   return cart.splice(index, 1);
      // });
    });
  };

  return (
    <div className="flexxrowcartcard">
      <img
        src={
          item?.type === "hoodies"
            ? hoodie1
            : item?.type === "shirts"
            ? shirt1
            : item?.type === "frocks"
            ? frock1
            : item?.type === "tshirts"
            ? tshirt1
            : item?.type === "goggles"
            ? goggle1
            : item?.type === "sneakers"
            ? sneakers1
            : item?.type === "jeans" && jeans1
        }
        alt=""
        className="cartcardimg"
      />
      <div className="flexxcolcartcardinfo">
        <h5 className="cartproname"><Link to={"/product/" + item?.id} >
        
         {item?.name} 
        </Link>
         </h5>
        <p className="desccartinfo">{item?.desc} </p>
        <p className="cartproprice">₹{item?.price} </p>
      </div>

      <i onClick={deleteFromCart} class="bi bi-trash3-fill"></i>
    </div>
  );
};

export default CartCard;
