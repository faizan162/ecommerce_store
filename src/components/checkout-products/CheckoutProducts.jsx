import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function CheckoutProducts({ product }) {
  return (
    <>
      <Box
        key={product.id}
        borderBottom="1px solid black"
        paddingBottom="20px"
        height="auto"
      >
        <Heading
          className="checkout-product-heading"
          textTransform="capitalize"
          textAlign="left"
        >
          <span className="font-semibold">Product:</span> {product.title}
        </Heading>
        <Box display="flex" justifyContent="space-between" margin="10px 0">
          <Text textTransform="capitalize">
            <span className="font-semibold">Category:</span> {product.category}
          </Text>
          <Text>${product.price}</Text>
        </Box>
        <Text>
          <span className="font-semibold">Quantity:</span> {product.quantity}
        </Text>
      </Box>
    </>
  );
}
