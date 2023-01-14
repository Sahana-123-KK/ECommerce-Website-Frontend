import React from "react";
import "./home.css";
import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../data/Data";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [products, setProducts] = useState(data);
  const [featured, setFeatured] = useState([]);
  const [hoodies, setHoodies] = useState([]);
  const [tshirts, setTshirts] = useState([]);

  const [goggles, setGoggles] = useState([]);

  const [frocks, setFrocks] = useState([]);

  const [shirts, setShirts] = useState([]);

  const [sneakers, setSneakers] = useState([]);
  const [jeans, setJeans] = useState([]);

  const getFeatured = () => {
    setFeatured(() => {
      return products.filter((item, ind) => {
        return item?.featured === true;
      });
    });
  };

  const getHoodies = () => {
    setHoodies(() => {
      return products?.filter((item, ind) => {
        return item?.type === "hoodies";
      });
    });
  };
  const getJeans = () => {
    setJeans(() => {
      return products?.filter((item, ind) => {
        return item?.type === "jeans";
      });
    });
  };
  const getGoggles = () => {
    setGoggles(() => {
      return products?.filter((item, ind) => {
        return item?.type === "goggles";
      });
    });
  };
  const getFrocks = () => {
    setFrocks(() => {
      return products?.filter((item, ind) => {
        return item?.type === "frocks";
      });
    });
  };
  const getTshirts = () => {
    setTshirts(() => {
      return products?.filter((item, ind) => {
        return item?.type === "tshirts";
      });
    });
  };
  const getSneakers = () => {
    setSneakers(() => {
      return products?.filter((item, ind) => {
        return item?.type === "sneakers";
      });
    });
  };
  const getShirts = () => {
    setShirts(() => {
      return products?.filter((item, ind) => {
        return item?.type === "shirts";
      });
    });
  };

  useEffect(() => {
    setProducts(data);
    getFeatured();
    getHoodies();
    getFrocks();
    getGoggles();
    getSneakers();
    getShirts();
    getTshirts();
    getJeans();
  }, []);
  return (
    <div className="alignevery">
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={two} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={one} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={three} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="flexxcol">
        <div className="featuredflexxcol">
          <h3 className="headfeatured">Our Featured Products</h3>
          <div className="flexxrowshowprocards">
            {featured?.map((item, ind) => {
              return <ProductCard item={item} />;
            })}
          </div>
        </div>
        <div className="flexxrowdifferentpro">
          <h3 className="headsec1">Our Products</h3>
          <div className="flexxcoltype">
            <h4 className="typename">Hoodies</h4>
            <div className="flexxrowshowprocards">
              {hoodies?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flexxcoltype">
            <h4 className="typename">Frocks</h4>
            <div className="flexxrowshowprocards">
              {frocks?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flexxcoltype">
            <h4 className="typename">T-Shirts</h4>
            <div className="flexxrowshowprocards">
              {tshirts?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flexxcoltype">
            <h4 className="typename">Shirts</h4>
            <div className="flexxrowshowprocards">
              {shirts?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flexxcoltype">
            <h4 className="typename">Goggles</h4>
            <div className="flexxrowshowprocards">
              {goggles?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flexxcoltype">
            <h4 className="typename">Sneakers</h4>
            <div className="flexxrowshowprocards">
              {sneakers?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flexxcoltype">
            <h4 className="typename">Jeans Wear</h4>
            <div className="flexxrowshowprocards">
              {jeans?.map((item, ind) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
