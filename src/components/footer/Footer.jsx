import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function Footer() {
  return (
    <footer className="footer w-full bg-slate-200 py-4 px-8">
      <div className="container">
        <Box
          className="footer-container"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Heading fontSize={"32px"} fontWeight={"600"}>
            <Link to={"/"}>FASCO</Link>
          </Heading>

          <UnorderedList
            className="footer-list"
            listStyleType={"none"}
            display={"flex"}
            gap={"50px"}
          >
            <ListItem>
              <Link to={"#"}>Support Center</Link>
            </ListItem>
            <ListItem>
              <Link to={"#"}>Contract</Link>
            </ListItem>
            <ListItem>
              <Link to={"#"}>Careers</Link>
            </ListItem>
            <ListItem>
              <Link to={"#"}>Blog</Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
