import { useEffect, useState } from "react";
import { ErrorComponent, LoadingComponent } from "./helperComponents";
import { useQuery } from "react-query";
import { fetchProducts } from "../api";
import axios from "axios";
import { Link } from "react-router-dom";
const QueryProducts = (props) => {
  const { isLoading, isError, error, data, isFetched, isFetching, ...query } =
    useQuery("products", fetchProducts, { retry: false });

  console.log(data);
  console.log(query);

  if (isError) {
    console.log(error);
    return <ErrorComponent message={error.message} />;
  }

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <h1>Query Products</h1>
      <ul>
        {data?.data?.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>
              {item.title} - {item.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QueryProducts;
