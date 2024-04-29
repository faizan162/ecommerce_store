import { Button } from "@chakra-ui/react";
import React from "react";

export default function SizeButton({ size, id, getSize, activeBtn }) {
  const isActive = id === activeBtn;
  return (
    <Button
      colorScheme="none"
      color={isActive ? "white" : "black"}
      backgroundColor={isActive ? "black" : "white"}
      border={"1px solid #EEEEEE"}
      id={id}
      onClick={() => getSize(id)}
    >
      {size}
    </Button>
  );
}
