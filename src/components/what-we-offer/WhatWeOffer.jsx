import { Box } from "@chakra-ui/react";
import React from "react";
import SingleOffer from "../single-offer/SingleOffer";

export default function WhatWeOffer() {
  return (
    <section className="py-12 what-we-offer-outer">
      <Box className="container">
        <Box
          display="flex"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="5px"
          className="what-we-offer-inner"
        >
          <SingleOffer
            image={"/icons/high_quality_icon.svg"}
            heading={"High Quality"}
            text={"crafted from top materials"}
          />
          <SingleOffer
            image={"/icons/warranty_protection_icon.svg"}
            heading={"Warranty Protection"}
            text={"Over 2 years"}
          />
          <SingleOffer
            image={"/icons/free_shipping_icon.svg"}
            heading={"Free Shipping"}
            text={"Order over 150 $"}
          />
          <SingleOffer
            image={"/icons/247_support_icon.svg"}
            heading={"24 / 7 Support"}
            text={"Dedicated support"}
          />
        </Box>
      </Box>
    </section>
  );
}
