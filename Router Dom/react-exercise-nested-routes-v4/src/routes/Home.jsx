import React from "react";
import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <VStack spacing={5} alignItems="start">
        <Heading as="h1" size="xl">
          Welcome to the Star Wars App
        </Heading>
        <Text>Explore the Star Wars universe!</Text>
        <Link to="/star-wars/people">
          <Button colorScheme="teal">View People</Button>
        </Link>
        <Link to="/star-wars/planets">
          <Button colorScheme="teal">View Planets</Button>
        </Link>
        <Link to="/star-wars/movies">
          <Button colorScheme="teal">View Movies</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default Home;
