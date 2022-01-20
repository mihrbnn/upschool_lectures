import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Basket from "./components/Basket";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import QueryProducts from "./components/QueryProducts";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:productId" element={<SingleProduct />}></Route>
        <Route path="/query-products" element={<QueryProducts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
