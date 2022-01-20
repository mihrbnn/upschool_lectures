import { useEffect, useState } from "react";
import { ErrorComponent } from "./helperComponents";
import { LoadingComponent } from "./helperComponents";
import axios from "axios";
const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // fetch(URL)
  // .then((res) => res.json())
  // .then((data) => {
  //   setProducts(data);
  //   setLoading(false);
  // })
  // .catch((err) => {
  //   console.log(err.message);
  //   setError(err.message);
  // });

  useEffect(() => {
    // const URL = "/products";
    const BASE_URL = "https://fakestoreapi.com";
    axios.get(`${BASE_URL}/products`);
    const BASE_AXIOS = axios.create({ baseURL: "https://fakestoreapi.com" });
    BASE_AXIOS.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  console.log("isLoading::", isLoading);
  console.log("products::", products);
  console.log("error::", error);

  if (error) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <ul>
      {products.map((item, id) => (
        <li key={id}>
          {item.title}-{item.price}
        </li>
      ))}
    </ul>
  );
};

export default Products;
