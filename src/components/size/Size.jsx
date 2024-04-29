import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SizeButton from "../size-button/SizeButton";

export default function Size() {
  const [size, setSize] = useState("M");
  const [activeBtn, setActiveBtn] = useState(1);

  const getSize = (id) => {
    let newSize = "";
    if (id === 1) {
      newSize = "M";
    } else if (id === 2) {
      newSize = "L";
    } else if (id === 3) {
      newSize = "XL";
    } else {
      newSize = "XXL";
    }
    setSize(newSize);
    setActiveBtn(id);
  };

  return (
    <Box>
      <Heading
        fontSize={"16px"}
        textTransform={"capitalize"}
        textAlign={"left"}
      >
        Size: {size}
      </Heading>
      <Box display={"flex"} gap={"10px"} margin={"12px 0"}>
        <SizeButton activeBtn={activeBtn} id={1} size={"M"} getSize={getSize} />
        <SizeButton activeBtn={activeBtn} id={2} size={"L"} getSize={getSize} />
        <SizeButton
          activeBtn={activeBtn}
          id={3}
          size={"XL"}
          getSize={getSize}
        />
        <SizeButton
          activeBtn={activeBtn}
          id={4}
          size={"XXL"}
          getSize={getSize}
        />
      </Box>
    </Box>
  );
}
