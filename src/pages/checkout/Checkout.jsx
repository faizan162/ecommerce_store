import React from "react";
import { Link, useLocation } from "react-router-dom";
import CheckoutLeft from "../../components/checkout-left/CheckoutLeft";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Footer from "../../components/footer/Footer";
import { Box, Heading } from "@chakra-ui/react";
import CheckoutRight from "../../components/checkout-right/CheckoutRight";

export default function Checkout() {
  const location = useLocation();
  const { totalSum, products } = location.state;
  return (
    <div>
      <Box
        width="100%"
        borderBottom="1px solid rgb(0,0,0,0.39)"
        padding="20px 0px"
      >
        <Heading
          className="checkout-heading"
          fontSize="42px"
          fontWeight="500"
          textTransform="unset"
        >
          FASCO Checkout
        </Heading>
      </Box>
      <div className="container">
        <Box
          className="products-checkout"
          width="100%"
          display="flex"
          gap="10px"
        >
          <CheckoutLeft />
          <CheckoutRight products={products} totalSum={totalSum} />
        </Box>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
