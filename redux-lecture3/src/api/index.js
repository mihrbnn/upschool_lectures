import axios from "axios";

const BASE_AXIOS = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchProducts = () => BASE_AXIOS.get("/products");

export const fetchSingleProduct = (productId) =>
  BASE_AXIOS.get(`/products/${productId}`);
