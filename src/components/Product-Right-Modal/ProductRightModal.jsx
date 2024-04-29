import React, { useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Heading,
  Box,
  Image,
  Text,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function ProductRightModal({ data, addToCart }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="none"
        backgroundColor="white"
        color="black"
        border="1px solid black"
        width="100%"
        _hover={{
          backgroundColor: "black",
          color: "white",
        }}
        onClick={() => {
          onOpen();
          addToCart(data);
        }}
      >
        Add to cart
      </Button>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent size={"xl"}>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            <Box display="flex" margin="0 0 20px" gap="4px">
              <Heading
                color="#8A8A8A"
                fontWeight="400"
                fontSize="20px"
                textTransform="capitalize"
                textAlign="left"
              >
                Buy{" "}
                <span className="font-semibold text-black">
                  ${Math.floor(data.price * 0.33)}
                </span>{" "}
                more and get{" "}
                <span className="font-semibold text-black">Free Shipping</span>
              </Heading>
            </Box>

            <Box borderBottom="1px solid rgba(0, 0, 0, 0.39)" padding="20px">
              <Box display="" gap="22px" alignItems="flex-start">
                <Box width="100%" height="225px">
                  <Image
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="center"
                    src={data.thumbnail}
                  />
                </Box>
                <Box marginTop="10px">
                  <Heading
                    fontSize="22px"
                    fontWeight="700"
                    textAlign="left"
                    textTransform="capitalize"
                  >
                    {data.title}
                  </Heading>
                  <Text
                    fontSize="20px"
                    fontWeight="400"
                    textAlign="left"
                    textTransform="capitalize"
                    color="#8A8A8A"
                  >
                    {data.category}
                  </Text>
                  <Text fontSize="22px" fontWeight="600">
                    ${data.price}
                  </Text>
                </Box>
              </Box>
            </Box>
          </DrawerBody>

          <DrawerFooter
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
          >
            <Box
              margin="10px 0"
              padding="10px 0"
              width={"100%"}
              borderBottom="1px solid rgb(0,0,0,0.39)"
            >
              <Checkbox defaultValue="unchecked" size="lg">
                {" "}
                For <span className="text-black font-semibold">$10</span> Please
                Wrap The Product
              </Checkbox>
            </Box>
            <Box
              margin="10px 0"
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Text fontWeight="600" textTransform="capitalize">
                Subtotal
              </Text>
              <Text fontWeight="600" textTransform="capitalize">
                ${data.price}
              </Text>
            </Box>

            <Text
              margin="10px 0"
              textDecoration="underline"
              width="100%"
              textAlign="center"
              fontWeight="600"
            >
              <Link to="/cart">View Cart</Link>
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
