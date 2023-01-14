import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import data from "../../data/Data";
import { useState } from "react";
import { useEffect } from "react";
import shirt1 from "../../images/shirt1.png";
import hoodie1 from "../../images/hoodie1.jpg";
import frock1 from "../../images/frock1.jpg";
import goggle1 from "../../images/gogg1.png";
import jeans1 from "../../images/jeans1.jpg";
import tshirt1 from "../../images/tshirt1.jpg";
import sneakers1 from "../../images/sneakers1.png";
import { useContext } from "react";
import cartContext from "../../Hooks/CartContext";
const Product = () => {
  const { cart, setCart } = useContext(cartContext);
  const [products, setProducts] = useState(data);
  const [product, setProduct] = useState([]);

  const location = useLocation();
  console.log((location?.pathname).split("/")[2]);

  const getProductInfo = () => {
    setProduct(() => {
      return products.filter((item, ind) => {
        return item?.id === (location?.pathname).split("/")[2];
      });
    });
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  const addToCart = () => {
    setCart([...cart, product[0]]);
  };

  return (
    <div className="flexxrowinfoproduct">
      <div className="flexxrow2infopro">
        <img
          src={
            product[0]?.type === "hoodies"
              ? hoodie1
              : product[0]?.type === "shirts"
              ? shirt1
              : product[0]?.type === "frocks"
              ? frock1
              : product[0]?.type === "tshirts"
              ? tshirt1
              : product[0]?.type === "goggles"
              ? goggle1
              : product[0]?.type === "sneakers"
              ? sneakers1
              : product[0]?.type === "jeans" && jeans1
          }
          alt=""
          className="propageimg"
        />

        <div className="flexxcolinfosec">
          <h5 className="typepro">{product[0]?.type}</h5>
          <h4 className="namepro">{product[0]?.name}</h4>
          <h3 className="pricepro">₹ {product[0]?.price} </h3>
          <button onClick={addToCart} className="addcart">
            Add To Cart
          </button>
          <Link to="/cart" >
          Go to Cart
          </Link>
          <h3 className="descprohead">Product Description</h3>
          <p className="descinfo">
            {product[0]?.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
