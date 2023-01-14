import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Redirection from "./components/Redirection/Redirection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Redirection />} />{" "}
        {/*-->This is to navigate to home if any other route is entered in URL }
        {/* <Route  path="/product"  /> */}
      </Routes>
    </Router>
  );
};

export default App;
