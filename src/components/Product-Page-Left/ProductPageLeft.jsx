import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductPageLeft({ images, title }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <>
      {images?.length > 1 ? (
        <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          alignContent={"flex-end"}
          gap={"10px"}
          className="slider-container"
        >
          <Box
            className="slider-page-slider"
            alignSelf={"center"}
            width={"100%"}
            height={"500px"}
          >
            <Slider
              dots={false}
              arrows={false}
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
            >
              {images.map((image, index) => {
                return (
                  <Box
                    className="slider-single-image"
                    width={"100%"}
                    height={"500px"}
                    maxH="500px"
                    backgroundColor={"black"}
                    key={index}
                  >
                    <Image
                      width={"100%"}
                      height={"100%"}
                      objectFit={"contain"}
                      src={image}
                      alt={title}
                      key={index}
                    />
                  </Box>
                );
              })}
            </Slider>
          </Box>
          <Box alignSelf={"center"} width={"100%"}>
            <Slider
              dots={false}
              arrows={false}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {images.map((image, index) => {
                return (
                  <Box width={"100px"} height={"100px"} key={index}>
                    <Image
                      border={"2px solid black"}
                      objectFit={"cover"}
                      margin={"0 20px"}
                      objectPosition={"center"}
                      width={"100%"}
                      height={"100%"}
                      src={image}
                      alt={title}
                    />
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            className="slider-single-image"
            width={"50%"}
            height={"500px"}
            maxH="500px"
            backgroundColor={"black"}
          >
            <Image
              width={"100%"}
              height={"100%"}
              objectFit={"contain"}
              src={images[0]}
              alt={title}
            />
          </Box>
        </>
      )}
    </>
  );
}
