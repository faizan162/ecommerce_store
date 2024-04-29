import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function NewsLetter() {
  return (
    <section className="newsletter-outer">
      <Box className="container">
        <Box display="flex" alignItems="center" className="newsletter-inner">
          <Box className="newsletter-image">
            <Image src="/images/newsletter_man.svg" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="20px"
            className="newsletter-mid"
          >
            <Heading
              textTransform="capitalize"
              fontSize="46px"
              fontWeight="500"
            >
              Subscribe to our newsletter
            </Heading>
            <Text textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </Text>
            <Input
              width="50%"
              className="newsletter-input"
              type="text"
              placeholder="michael@ymail.com"
            />
            <Button
              marginBottom="20px"
              colorScheme="none"
              backgroundColor="black"
              color="white"
            >
              Subscribe Now
            </Button>
          </Box>
          <Box className="newsletter-image">
            <Image src="/images/newsletter_woman.svg" />
          </Box>
        </Box>
      </Box>
    </section>
  );
}
