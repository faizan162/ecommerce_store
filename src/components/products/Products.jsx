import React, { useEffect, useState } from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import { toast } from "react-toastify";
import { auth, firestore } from "../../Config/firebaseConfig";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [productsToShow, setProductsToShow] = useState(10);

  const loadMore = () => {
    setProductsToShow((p) => p + 10);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${productsToShow}&skip=0`
    );
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, [productsToShow]);

  const checkProduct = (data) => {
    navigate(`/Product-Page`, {
      state: data,
    });
  };

  return (
    <div className="container">
      <div className="products flex flex-wrap justify-between  gap-8 p-4">
        {products.map((product) => {
          return (
            <SingleProduct
              checkProduct={checkProduct}
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              thumbnail={product.thumbnail}
              images={product.images}
              stock={product.stock}
              category={product.category}
              discountPercentage={product.discountPercentage}
              data={product}
            />
          );
        })}
      </div>
      <div className="flex justify-center mx-auto ">
        {productsToShow !== 100 && (
          <Button
            className="load-more flex justify-center uppercase"
            onClick={loadMore}
          >
            View More
          </Button>
        )}
      </div>
    </div>
  );
}
