import React from "react";
import { Container, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1" size="xl">
        404 Not Found
      </Heading>
      <Text>The page you are looking for does not exist.</Text>
      <Link to="/">
        <Button colorScheme="teal">Go to Home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
