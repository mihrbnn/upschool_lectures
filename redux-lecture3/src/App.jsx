import React from "react"
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
// import Basket from "./components/Basket";
import Contact from "./components/Contact";
import Home from "./components/Home";
import FooterProducts from "./components/FooterProducts";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import QueryProducts from "./components/QueryProducts";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/query-products" element={<QueryProducts />} />
      </Routes>
      <FooterProducts productsIds={[1,3,5,7,9]} />
    </div>
  );
}

export default App;
