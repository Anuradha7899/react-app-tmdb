/** @format */
import { Container } from 'react-bootstrap';
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

console.log(import.meta.env.VITE_TMDB_API_KEY);

const Playground = () => {
  //popularMovies
  const [popularMovies, setPopularMovies] = useState(null);
  //Isloding
  const [isLoding, setIsLoding] = useState(true);
  //IsError
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        setPopularMovies(response.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoding(false);
      }
    }
    fetchPopularMovies();
  }, []);

  if (isLoding) {
    return (
      <Container className='py-5'>
        <h1>Loading...</h1>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container className='py-5'>
        <h1>Error...</h1>
      </Container>
    );
  }
  console.log(popularMovies);
  return (
    <Container className='py-5'>
      <Button variant='secondary'>Click</Button>
    </Container>
  );
};

export default Playground;
