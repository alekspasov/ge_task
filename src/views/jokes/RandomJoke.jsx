import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../lib/jokes.actions';
import MainCard from '../../ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getRandomColor } from '../../utils/helpers';
import JokeCard from '../../ui-component/JokeCard';
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../Loading';

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    const fetchRandomJoke = async () => {
      try {
        const joke = await getRandomJoke(category);
        setRandomJoke(joke.value);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching random joke', error);
      }
    };

    fetchRandomJoke();
  }, [category]);

  return (
    loading ? (
    <JokeCard randomJoke={randomJoke} />
    ) : <Loading />
  );
};

export default RandomJoke;