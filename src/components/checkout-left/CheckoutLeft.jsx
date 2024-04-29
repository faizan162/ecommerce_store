import React from "react";
import {
  Box,
  Heading,
  Input,
  Select,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CheckoutLeft() {
  return (
    <>
      <Box className="checkout-left" width="50%" margin="50px 0">
        <form>
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="space-between"
            marginBottom="10px"
            className="contact-heading"
          >
            <Heading
              textTransform="capitalize"
              color="#484848"
              fontWeight="500"
              fontSize="46px"
            >
              Contact
            </Heading>
          </Box>
          <Input
            required
            borderRadius="0"
            type="email"
            placeholder="Email Address"
            border="1px solid #8A8A8A"
          />
          <Box>
            <Heading
              textAlign="left"
              textTransform="capitalize"
              color="#484848"
              fontWeight="500"
              fontSize="46px"
              margin="30px 0 "
            >
              Delivery
            </Heading>
            <Select
              borderRadius="0"
              border="1px solid #8A8A8A"
              placeholder="Country / Region"
            >
              <option value="1">Pakistan</option>
              <option value="1">England</option>
              <option value="1">Australia</option>
            </Select>

            <Box
              className="form-inputs"
              display="flex"
              margin="10px 0"
              gap="10px"
            >
              <Input
                borderRadius="0"
                border="1px solid #8A8A8A"
                type="text"
                placeholder="First Name"
              />
              <Input
                borderRadius="0"
                border="1px solid #8A8A8A"
                type="text"
                placeholder="Last Name"
              />
            </Box>

            <Box>
              <Input
                borderRadius="0"
                border="1px solid #8A8A8A"
                type="text"
                placeholder="Address"
              />
            </Box>

            <Box
              className="form-inputs"
              display="flex"
              margin="10px 0"
              gap="10px"
            >
              <Input
                borderRadius="0"
                border="1px solid #8A8A8A"
                type="text"
                placeholder="City"
              />
              <Input
                borderRadius="0"
                border="1px solid #8A8A8A"
                type="number"
                placeholder="Postal Code"
              />
            </Box>

            <Box>
              <Heading
                textAlign="left"
                textTransform="capitalize"
                color="#484848"
                fontWeight="500"
                fontSize="46px"
                margin="30px 0 "
              >
                Payment
              </Heading>
              <Accordion margin="20px 0" allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Credit Card
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    backgroundColor="#F5F5F5"
                    padding={4}
                  >
                    <Input
                      backgroundColor="#fff"
                      borderRadius="0"
                      border="1px solid #8A8A8A"
                      type="number"
                    />

                    <Box className="form-inputs" display="flex" gap="10px">
                      <Input
                        backgroundColor="#fff"
                        borderRadius="0"
                        border="1px solid #8A8A8A"
                        type="text"
                        placeholder="Expiry Date"
                      />
                      <Input
                        backgroundColor="#fff"
                        borderRadius="0"
                        border="1px solid #8A8A8A"
                        type="number"
                        placeholder="Security Code"
                      />
                    </Box>

                    <Input
                      backgroundColor="#fff"
                      borderRadius="0"
                      border="1px solid #8A8A8A"
                      type="text"
                      placeholder="Card Holder Name"
                    />

                    <Checkbox
                      size="lg"
                      fontSize="16px"
                      color="#8A8A8A"
                      textTransform="capitalize"
                    >
                      Save this info for future
                    </Checkbox>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
          <Button
            type="submit"
            width="100%"
            colorScheme="none"
            backgroundColor="black"
            color="white"
          >
            Pay Now
          </Button>
          <Text
            fontSize="12px"
            color="#484848"
            textAlign="center"
            marginTop="20px"
          >
            Copyright © 2022 FASCO . All Rights Reseved.
          </Text>
        </form>
      </Box>
    </>
  );
}
