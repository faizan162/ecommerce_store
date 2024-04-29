import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
export default function SingleOffer({ image, heading, text }) {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      gap="12px"
      className="single-offer"
    >
      <Box height="50px" width="50px" className="what-we-offer-image">
        <Image height="100%" width="100%" src={image} alt={heading} />
      </Box>
      <Box className="what-we-offer-details">
        <Heading
          color="#484848"
          textAlign="left"
          fontSize="20px"
          fontWeight="500"
          className="what-we-offer-heading"
        >
          {heading}
        </Heading>
        <Text
          fontSize="16px"
          color="#484848"
          fontWeight="400"
          className="what-we-offer-p"
        >
          {text}
        </Text>
      </Box>
    </Box>
  );
}
