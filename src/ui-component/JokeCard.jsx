import React from 'react';
import Box from '@mui/material/Box';
import MainCard from './cards/MainCard';
import { getRandomColor } from '../utils/helpers';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const JokeCard = ({randomJoke}) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%'
      }}
    >
      <MainCard
        border={false}
        content={false}
        sx={{
          bgcolor: `${getRandomColor()}`,
          color: '#fff',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Box sx={{ p: 2.25 }}>
          <Grid container direction="column">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item alignItems="center">
                  <Typography sx={{
                    fontSize: '2.125rem',
                    fontWeight: 500,
                    mr: 1,
                    mt: 1.75,
                    mb: 0.75
                  }}>{randomJoke}</Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </Box>
);

JokeCard.propTypes = {
  randomJoke: PropTypes.string,
};

export default JokeCard;