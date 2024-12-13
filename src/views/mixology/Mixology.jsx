import React, { useState } from 'react';
import { gridSpacing } from '../../store/constant';
import { Button, Card, CardMedia, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import MainCard from '../../ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import RandomCocktail from './RandomCocktail';


const Mixology = () => {
  const [getCocktail, setGetCocktail] = useState(false);

  return getCocktail ? (
    <RandomCocktail />
  ) : (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="contained" onClick={() => setGetCocktail(true)} sx={{ padding: '15px 30px', fontSize: '1.25rem' }}>
        Feeling thirsty? How about a cocktail?
          </Button>
        </Box>
  );
};

export default Mixology;