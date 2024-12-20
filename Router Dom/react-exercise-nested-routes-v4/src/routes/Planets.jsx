import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import planetsThumbnail from "../assets/planets.jpeg";
import BackButton from "../components/BackButton";
import {
  Card,
  SimpleGrid,
  CardBody,
  Text,
  Image,
  HStack,
  Container,
  Heading,
} from "@chakra-ui/react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadPlanets = async () => {
    setLoading(true);
    try {
      const data = await (
        await fetch("https://swapi.py4e.com/api/planets")
      ).json(); // Directly retrieve and parse JSON data
      setPlanets(data.results); // Set planets from the fetched data
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getID = (url) => {
    const parsed = url?.split("/");
    return parsed[parsed.length - 2];
  };

  useEffect(() => {
    loadPlanets();
  }, []);

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Image src={planetsThumbnail} width="40px" />
        <Heading as="h1" size="xl">
          Planets
        </Heading>
      </HStack>

      {!loading ? (
        <SimpleGrid columns={2} spacing={4}>
          {planets.map((planet) => (
            <Link
              to={`/star-wars/planets/${getID(planet.url)}`}
              key={planet.name}
            >
              <Card>
                <CardBody>
                  <Heading size="md">{planet.name}</Heading>
                  <Text>Climate: {planet.climate}</Text>
                  <Text>Terrain: {planet.terrain}</Text>
                </CardBody>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container>
  );
};

export default Planets;
