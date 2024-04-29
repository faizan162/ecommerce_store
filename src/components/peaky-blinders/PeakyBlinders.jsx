import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import WhatWeOffer from "../what-we-offer/WhatWeOffer";

export default function PeakyBlinders() {
  return (
    <>
      <section className="peaky-blinders">
        <div className="peaky-blinders-container">
          <div className="peaky-image">
            <img src="/images/peaky_blinders.svg" alt="" />
          </div>
          <div className="peaky-details">
            <Text className="women-collection">Women Collection</Text>
            <Heading
              size={"xl"}
              textAlign={"left"}
              fontSize={"46px"}
              fontWeight={"500"}
              fontFamily={"volkhov"}
              textTransform={"unset"}
            >
              Peaky Blinders
            </Heading>
            <Text
              textDecoration={"underline"}
              textTransform={"uppercase"}
              fontWeight={"500"}
            >
              Description
            </Text>
            <Text color={"#767676"} fontWeight={"400"} fontSize={"16px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </Text>
            <Heading
              fontFamily={"unset"}
              textAlign={"left"}
              fontWeight={"400"}
              fontSize={"28px"}
            >
              $100
            </Heading>
            <Button
              className="but-btn"
              backgroundColor={"black"}
              colorScheme="none"
              width={"207px"}
              color={"white"}
              _hover={{ backgroundColor: "#313131" }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </section>
      <WhatWeOffer />
    </>
  );
}
