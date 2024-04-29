import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import Products from "../products/Products";

export default function NewArrivals() {
  return (
    <section className="new-arrivals-container">
      <Heading className="new-arrivals">New Arrivals</Heading>
      <Text className="new-arrivals-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </Text>
      <Products />
    </section>
  );
}
