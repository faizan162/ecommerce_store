import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function CustomerFeedback() {
  let reviews = [
    {
      name: "John Doe",
      image: "/images/review_1.svg",
      review:
        "Fantastic shopping experience! The checkout process was swift and smooth. My products arrived on time and in perfect condition.",
    },
    {
      name: "Jane Smith",
      image: "/images/review_2.svg",
      review:
        "Great product range. I can always find what I need. The product descriptions and images are very clear and helpful.",
    },
    {
      name: "Richard Roe",
      image: "/images/review_4.svg",
      review:
        "Impressive customer service. My concerns were addressed promptly and professionally. Will definitely shop here again.",
    },
    {
      name: "Emily Johnson",
      image: "/images/review_3.svg",
      review:
        "The website is easy to navigate, making my shopping experience enjoyable. The prices are also very competitive.",
    },
    {
      name: "Sam Brown",
      image: "/images/review_5.svg",
      review:
        "Amazing deals and high-quality products. The delivery was fast and the items were well-packed.",
    },
  ];
  return (
    <section className="customer-feedback ">
      <Heading
        className="heading-customer-feedback"
        fontSize={"46px"}
        fontFamily={"sans-serif"}
        textTransform={"unset"}
        lineHeight={"45px"}
        width={"100%"}
      >
        This is what our Customers Say
      </Heading>
      <Text
        className="text-customer-feedback"
        color={"#8A8A8A"}
        textAlign={"center"}
        fontWeight={"300"}
        marginTop={"20px"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
      </Text>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={Math.random()}>
              <Box
                borderRadius={"10px"}
                backgroundColor={"white"}
                sx={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                padding={"2px"}
                className="review-card"
              >
                <Box
                  borderTopLeftRadius={"10px"}
                  borderTopRightRadius={"10px"}
                  className="review-img"
                >
                  <img src={review.image} alt={review.name} />
                </Box>
                <div className="review-card-content w-full">
                  <Heading
                    fontSize={"20px"}
                    textAlign={"left"}
                    textTransform={"unset"}
                  >
                    {review.name}
                  </Heading>
                  <Text fontSize={"16px"} width={"95%"}>
                    {review.review}
                  </Text>
                </div>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
