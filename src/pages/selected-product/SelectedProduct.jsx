import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Footer from "../../components/footer/Footer";
import PeakyBlinders from "../../components/peaky-blinders/PeakyBlinders";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../Config/firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import ProductPageLeft from "../../components/Product-Page-Left/ProductPageLeft";
import ProductPageRight from "../../components/Product-Page-Right/ProductPageRight";
import NewsLetter from "../../components/newsletter/NewsLetter";
import DealOfMonth from "../../components/deals-of-month/DealOfMonth";

export default function SelectedProduct() {
  const { state } = useLocation();
  const data = state;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const [user, setUser] = useState(null);

  const addToCart = async (product) => {
    if (!user) {
      toast.error("Login failed. Please try again");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      const q = query(
        collection(firestore, "products"),
        where("userId", "==", user.uid)
      );
      const querySanpshot = await getDocs(q);
      const productData = [];
      querySanpshot.forEach((doc) => {
        productData.push(doc.data());
      });

      if (!productData.some((addedProduct) => addedProduct.id === product.id)) {
        const newProduct = {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          quantity: 1,
          category: product.category,
          discountPercentage: product.discountPercentage,
          userId: user.uid,
        };

        const productRef = collection(firestore, "products");
        await addDoc(productRef, newProduct);

        toast.success(`${product.title} added to cart`);
      } else {
        toast.info(`${product.title} is already added in cart`);
      }
    }
  };

  return (
    <>
      <Box className="container" padding={"20px 0"}>
        <Box className="selected-product" display={"flex"} gap="10px">
          <ProductPageLeft title={data.title} images={data.images} />
          <ProductPageRight data={data} addToCart={addToCart} />
        </Box>
      </Box>
      <PeakyBlinders />
      <DealOfMonth title={"people also loved"} />
      <NewsLetter />
      <Footer />
    </>
  );
}
