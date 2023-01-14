import React from "react";
import "./productcard.css";
import shirt1 from "../../images/shirt1.png";
import hoodie1 from "../../images/hoodie1.jpg";
import frock1 from "../../images/frock1.jpg";
import goggle1 from "../../images/gogg1.png";
import jeans1 from "../../images/jeans1.jpg";
import tshirt1 from "../../images/tshirt1.jpg";
import sneakers1 from "../../images/sneakers1.png";
import { Link } from "react-router-dom";
// import CartState from "../../Hooks/CartState";
import cartContext from "../../Hooks/CartContext";
import { useContext } from "react";

const ProductCard = ({ item }) => {
  const { cart, setCart } = useContext(cartContext);
  //  const some = require(item?.img)
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="flexxcolproductcard">
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
        className="productsmimg"
      />
      <h5 className="productname">
        <Link to={"/product/" + item?.id}>{item?.name}</Link>{" "}
      </h5>
      <div className="flexxrowproductdetails">
        <p className="costpro1">₹{item?.price} </p>
        <p className="costpro2">₹{item?.beforePrice} </p>
        <p className="offerpro">{item?.offer} % Off</p>
      </div>
      <div className="flexxrowstarsrat">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <span className="noratings">(50)</span>
      </div>
      <button
        onClick={() => {
          addToCart(item);
        }}
        className="addcartbtn"
      >
        <span className="headbtn">Add To Cart </span>
        <i class="bi bi-cart3"></i>
      </button>
    </div>
  );
};

export default ProductCard;
