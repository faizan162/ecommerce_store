import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";
import { firestore } from "../../Config/firebaseConfig";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Box, Button, Tbody, Td, Tr } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function DataInCart({
  id,
  title,
  price,
  description,
  quantity,
  getUserData,
}) {
  const [count, setCount] = useState(quantity);

  let selectedId = "";
  const increment = async () => {
    const newCount = ++quantity;
    setCount(newCount);
    const collectionRef = collection(firestore, "products");
    try {
      const querySnapshot = await getDocs(collectionRef);
      for (const doc of querySnapshot.docs) {
        const dataId = doc.data().id;
        if (dataId === id) {
          selectedId = doc.id;
          await addCount(doc.id, newCount);
          getUserData();
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const decrement = async () => {
    if (count > 1) {
      const newCount = quantity - 1;
      setCount(newCount);
      const collectionRef = collection(firestore, "products");
      try {
        const querySnapshot = await getDocs(collectionRef);
        for (const doc of querySnapshot.docs) {
          const dataId = doc.data().id;
          if (dataId === id) {
            selectedId = doc.id;
            await addCount(doc.id, newCount);
            getUserData();
            break;
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeItem = async () => {
    const collectionRef = collection(firestore, "products");
    try {
      const querySnapshot = await getDocs(collectionRef);
      for (const docRef of querySnapshot.docs) {
        const dataId = docRef.data().id;
        if (dataId === id) {
          selectedId = docRef.id;
          const deleteRef = doc(firestore, "products", selectedId);
          await deleteDoc(deleteRef);
          getUserData();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCount = async (productId, newQuantity) => {
    const collectionRef = collection(firestore, "products");
    try {
      const querySnapshot = await getDocs(collectionRef);
      let productsIds = [];
      querySnapshot.forEach((doc) => {
        productsIds.push(doc.id);
      });

      await updateDoc(doc(firestore, "products", selectedId), {
        quantity: newQuantity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tbody>
      <Tr>
        <Td>{title}</Td>
        <Td>${price}</Td>
        <Td>
          <Box
            border={"1px solid black"}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            marginRight={"auto"}
            width={"150px"}
          >
            <div onClick={() => decrement()}>
              <RiSubtractLine className="text-xl  cursor-pointer" />
            </div>
            <p className="text-2xl">{count}</p>
            <div onClick={() => increment()}>
              <IoMdAdd className="text-xl cursor-pointer" />
            </div>
          </Box>
        </Td>
        <Td display={"flex"} justifyContent={"flex-end"}>
          <FaTrash
            onClick={removeItem}
            color="red"
            cursor={"pointer"}
            fontSize={"25px"}
          />
        </Td>
      </Tr>
    </Tbody>
  );
}
