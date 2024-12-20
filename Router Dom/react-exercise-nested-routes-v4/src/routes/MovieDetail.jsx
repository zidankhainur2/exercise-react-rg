import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Heading, Text, Button, HStack } from "@chakra-ui/react";
import BackButton from "../components/BackButton";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMovie = async () => {
    try {
      const data = await (
        await fetch(`https://swapi.py4e.com/api/films/${id}`)
      ).json(); // Fetch movie data directly
      setMovie(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovie();
  }, [id]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!movie) {
    return <Text>Movie not found.</Text>;
  }

  return (
    <Container>
      <HStack direction="row" marginTop={5} marginBottom={5}>
        <BackButton />
        <Heading as="h1" size="xl">
          {movie.title}
        </Heading>
      </HStack>
      <Text>Release Date: {movie.release_date}</Text>
      <Text>Director: {movie.director}</Text>
      <Text>Producers: {movie.producer}</Text>
      <Text>Episode: {movie.episode_id}</Text>
      <Text>{movie.opening_crawl}</Text>
    </Container>
  );
};

export default MovieDetail;
