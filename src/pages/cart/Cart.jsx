import React, { useEffect, useState } from "react";
import { auth, firestore } from "../../Config/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import DataInCart from "../../components/dataInCart/DataInCart";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { IoIosLogOut } from "react-icons/io";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsletter/NewsLetter";

export default function Cart() {
  const [realUser, setRealUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userProducts, setUserProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setRealUser(user);
        setName(user.displayName);
        setEmail(user.email);
      } else {
        navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    getUserData();
  }, [realUser]);
  const getUserData = async () => {
    if (realUser) {
      const queryRef = query(
        collection(firestore, "products"),
        where("userId", "==", realUser.uid)
      );
      const querySnapshot = await getDocs(queryRef);
      const productData = [];

      querySnapshot.forEach((doc) => {
        productData.push(doc.data());
      });

      setUserProducts(productData);
    }
  };

  const handleSignOut = () => {
    try {
      signOut(auth);
      toast.success("User signed out");
      navigate("/");
    } catch (error) {
      toast.error(error.code);
    }
  };

  let totalBill = [];

  const handleTotalBill = () => {
    userProducts.map((product) =>
      totalBill.push(product.price * product.quantity)
    );
    let total = totalBill.reduce((acc, product) => acc + product, 0);
    setTotalSum(total);
  };

  useEffect(() => {
    if (totalSum !== 0 && userProducts) {
      navigate("/checkout", {
        state: { totalSum: totalSum, products: userProducts },
      });
    }
  }, [totalSum, userProducts]);

  return (
    <Box
      minHeight="calc(100vh - 80px)"
      display="flex"
      justifyContent={"space-between"}
      flexDirection="column"
    >
      <Box>
        <Box
          className="cart-header container"
          padding={"10px 30px"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Heading as={"h1"} textAlign={"center"} textTransform={"uppercase"}>
            Shopping Cart
          </Heading>
          <Box
            className="user-header"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            gap={"10px"}
          >
            <Heading as={"h2"}>Welcome {name}</Heading>
            <Button onClick={handleSignOut}>
              <IoIosLogOut /> &nbsp; Logout
            </Button>
          </Box>
        </Box>
        <Box className="cart-products container">
          <TableContainer height={"100%"}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Product Name</Th>
                  <Th>Product Price</Th>
                  <Th>Product Quantity</Th>
                  <Th display={"flex"} justifyContent={"flex-end"}>
                    Remove Product
                  </Th>
                </Tr>
              </Thead>
              {userProducts.map((product) => {
                return (
                  <DataInCart
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    quantity={product.quantity}
                    getUserData={getUserData}
                  />
                );
              })}
            </Table>
          </TableContainer>
        </Box>
        <Box className="container">
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            margin={"30px 20px"}
          >
            <Button
              className="checkout-btn"
              backgroundColor={"black"}
              color={"white"}
              colorScheme="none"
              width="40%"
              onClick={() => handleTotalBill()}
            >
              Checkout
            </Button>
            {/* <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader> Check Out</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                  >
                    <Box>
                      <FormLabel>Contact</FormLabel>
                      <Input
                        required={true}
                        type="email"
                        placeholder={`${name}@gmail.com`}
                      ></Input>
                    </Box>
                    <Box>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="number"
                        required={true}
                        placeholder="03000000000"
                      ></Input>
                    </Box>
                    <Box>
                      <FormLabel>Address</FormLabel>
                      <Input
                        required={true}
                        type="text"
                        placeholder={`Your Address`}
                      ></Input>
                    </Box>
                    <Box>
                      <FormLabel>City</FormLabel>
                      <Input type="text" placeholder="Your City"></Input>
                    </Box>
                    <Box
                      width="100%"
                      alignSelf="flex-start"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Heading fontSize="20px" as={"h2"}>
                        Subtotal
                      </Heading>
                      <Heading as="h3" fontSize="20px">
                        ${totalSum}
                      </Heading>
                    </Box>
                    <Box>
                      <Button
                        width={"100%"}
                        type="submit"
                        backgroundColor={"black"}
                        color={"white"}
                        textTransform={"uppercase"}
                      >
                        Checkout
                      </Button>
                    </Box>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Button
                    colorScheme="none"
                    backgroundColor={"black"}
                    color={"white"}
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal> */}
          </Box>
        </Box>
      </Box>
      <Box>
        <NewsLetter />
        <Footer />
      </Box>
    </Box>
  );
}
