import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function SingleProduct({
  title,
  price,
  description,
  thumbnail,
  stock,
  category,
  checkProduct,
  data,
}) {
  let rating = 5;
  const stars = () => {
    let starsArr = [];
    for (let i = 0; i < rating; i++) {
      starsArr.push(<FaStar key={i} color="#FCA120" />);
    }
    return starsArr;
  };
  return (
    <div
      onClick={() => checkProduct(data)}
      className="product bg-white shadow-2xl border border-slate-200"
    >
      <div className="product-image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="title ">
        <div className="title-heading">
          <Heading
            fontWeight={"500"}
            color={"#484848"}
            textAlign={"left"}
            fontSize={"20px"}
          >
            {title}
          </Heading>
          <Text
            color={"#8A8A8A"}
            textTransform={"capitalize"}
            fontSize={"14px"}
          >
            {category}
          </Text>
        </div>
        <div className="reviews flex">{stars()}</div>
      </div>
      <div className="details">
        <Text>{description}</Text>
      </div>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className="price"
      >
        <Text className="text-3xl text-red-500">${price}</Text>
        <div className="stock flex justify-start ">
          <Text>Stock Left : {stock}</Text>
        </div>
      </Box>
    </div>
  );
}
