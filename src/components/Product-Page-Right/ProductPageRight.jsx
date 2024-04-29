import { Box, Button, Heading, Image, Progress, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Size from "../size/Size";
import {
  FaBox,
  FaEye,
  FaRegQuestionCircle,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Countdown from "react-countdown";
import ProductRightModal from "../Product-Right-Modal/ProductRightModal";
import { TbMobiledata } from "react-icons/tb";
import { GoShareAndroid } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
export default function ProductPageRight({ data, addToCart }) {
  const actualPrice =
    data.price - data.price * (Math.floor(data.discountPercentage) / 100);

  const Completionist = () => <span>Expired</span>;
  const countDownDate = new Date("May 25, 2024 12:48:25").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleCompletion = () => {
    setCompleted(true);
  };

  const handleCountdownUpdate = ({ days, hours, minutes, seconds }) => {
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <Box width={"50%"} padding={"20px"} className="Product-details">
      <Text fontSize={"14px"} fontWeight={"500"} color={"#666666"}>
        FASCO
      </Text>
      <Box
        className="product-info"
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Heading
          textAlign={"left"}
          marginBottom={"5px"}
          fontSize={"30px"}
          fontWeight={"800"}
          fontFamily={"volkhov"}
        >
          {data.title}
        </Heading>
        <Box
          width={"45px"}
          height={"45px"}
          border={"1px solid gray"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"50%"}
        >
          <FaRegStar fontSize={"20px"} />
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} marginTop={"-5px"}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
        <Text>(3)</Text>
      </Box>
      <Box margin={"20px 0"} display={"flex"} alignItems={"center"} gap={"5px"}>
        <Heading textAlign={"left"} fontSize={"24px"} fontWeight={"400"}>
          ${Math.floor(actualPrice)}
        </Heading>
        <Heading
          textDecoration={"line-through"}
          fontSize={"16px"}
          color={"#666666"}
          fontWeight={"400"}
        >
          ${data.price}
        </Heading>
        <Box
          borderRadius={"11px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"73px"}
          height={"21px"}
          backgroundColor={"#DA3F3F"}
        >
          <Text color={"white"} fontSize={"11px"} textTransform={"uppercase"}>
            Save {Math.floor(data.discountPercentage)}%
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <FaEye fontSize={"18px"} />
        <Text fontSize={"16px"} color={"#8A8A8A"} fontWeight={"400"}>
          24 people are viewing this right now
        </Text>
      </Box>
      <Box
        className="sale-message"
        padding={"14px 13px"}
        borderRadius={"4px"}
        margin={"30px 0"}
        backgroundColor={"#FDEFEE"}
        width={"100%"}
        border={"1px solid #F8CCCC"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text color={"#FF706B"} fontSize={"18px"} fontWeight={"500"}>
          Hurry up! Sale ends in
        </Text>
        <Text fontSize={"20px"} fontWeight={"600"} color={"#FF706B"}>
          {completed ? (
            <Completionist />
          ) : (
            `${days} : ${hours} : ${minutes} : ${seconds}`
          )}
        </Text>
      </Box>
      <Box display={"none"}>
        <Countdown
          date={countDownDate}
          onComplete={handleCompletion}
          onTick={handleCountdownUpdate}
        />
      </Box>
      <Box
        fontSize={"16px"}
        color={"#666666"}
        fontWeight={"400"}
        display={"flex"}
        gap={"3px"}
      >
        <Text>Only </Text>
        <Text fontWeight={"600"} color={"black"}>
          {data.stock}
        </Text>{" "}
        <Text>item(s) left in stock</Text>
      </Box>
      <Box margin={"12px 0"}>
        <Progress
          borderRadius={"10px"}
          colorScheme={"red"}
          size={"sm"}
          value={data.stock * 0.1}
        />
      </Box>{" "}
      <Size />
      <Box>
        <ProductRightModal data={data} addToCart={addToCart} />
      </Box>
      <Box
        className="product-comparison"
        borderBottom="1px solid #EEEEEE"
        display="flex"
        alignItems="center"
        gap="30px"
        margin="20px 0"
        padding="10px 0"
      >
        <Box display="flex" alignItems="center" gap="3px">
          <TbMobiledata fontSize="16px" />
          <Text fontSize={"16px"} fontWeight={"400"}>
            Compare
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="3px">
          <FaRegQuestionCircle fontSize="16px" />
          <Text fontSize={"16px"} fontWeight={"400"}>
            Ask a question
          </Text>
        </Box>
        <Box display="flex" alignItems="center" gap="3px">
          <GoShareAndroid fontSize="16px" />
          <Text fontSize={"16px"} fontWeight={"400"}>
            Share
          </Text>
        </Box>
      </Box>
      <Box>
        <Text
          className="delivery-details"
          display="flex"
          alignItems="center"
          gap="4px"
          marginBottom="10px"
        >
          <CiDeliveryTruck fontSize="20px" />
          <span className="font-semibold">Estimated Delivery:</span> Jul 30 -
          Aug 3
        </Text>
        <Text
          className="delivery-details"
          display="flex"
          alignItems="center"
          gap="4px"
        >
          <FaBox fontSize="16px" />
          <span className="font-semibold">Free Shipping and Returns:</span> on
          all orders over $75
        </Text>
      </Box>
      <Box
        marginTop="30px"
        borderRadius="5px"
        backgroundColor="#F8F8F8"
        padding="20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="15px"
      >
        <Image src="/images/Cards.png" />
        <Text fontSize="16px" fontWeight="600">
          Guarantee safe & secure checkout
        </Text>
      </Box>
    </Box>
  );
}
