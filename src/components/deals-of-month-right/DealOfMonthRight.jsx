import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState, Component } from "react";

import Slider from "react-slick";

export default function DealOfMonthRight() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <Box className="deals-right" height="400px" width="50%">
        <Slider {...settings}>
          <Box className="deal-img-container" height="400px">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center top"
              src="/images/deals_one.svg"
            />
          </Box>
          <Box className="deal-img-container" height="400px">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center top"
              src="/images/deals_two.svg"
            />
          </Box>
          <Box className="deal-img-container" height="400px">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center top"
              src="/images/review_3.svg"
            />
          </Box>
          <Box className="deal-img-container" height="400px">
            <Image
              width="100%"
              height="100%"
              objectFit="cover"
              objectPosition="center top"
              src="/images/deals_two.svg"
            />
          </Box>
        </Slider>
      </Box>
    </>
  );
}
