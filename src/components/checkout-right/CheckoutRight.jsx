import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import CheckoutProducts from "../checkout-products/CheckoutProducts";

export default function CheckoutRight({ products, totalSum }) {
  let shippingFee = Math.floor(totalSum * 0.15);
  return (
    <>
      <Box
        width="50%"
        backgroundColor="#F5F5F5"
        padding="20px"
        margin="0 0 50px"
        className="checkout-right"
      >
        {products.map((product) => {
          return <CheckoutProducts product={product} />;
        })}
        <Box
          className="discount-code"
          display="flex"
          gap="10px"
          margin="20px 0"
        >
          <Input
            backgroundColor="white"
            borderRadius="none"
            border="none"
            width="60%"
            type="text"
            placeholder="Discount Code"
          />
          <Button
            fontWeight="500"
            fontSize="16px"
            width="30%"
            colorScheme="none"
            backgroundColor="black"
            color="white"
          >
            Apply
          </Button>
        </Box>
        <Text color="484848" fontWeight="500">
          Subtotal: <span className="font-semibold">${totalSum}</span>
        </Text>
        <Text color="484848" fontWeight="500">
          Shipping Fee: <span className="font-semibold">${shippingFee}</span>
        </Text>
        <Text color="484848" fontWeight="500">
          Toal: <span className="font-semibold">${totalSum + shippingFee}</span>
        </Text>
      </Box>
    </>
  );
}
