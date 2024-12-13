import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, CardMedia, Checkbox, FormControlLabel, CircularProgress, Button } from '@mui/material';
import { gridSpacing } from '../../store/constant';
import MainCard from '../../ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { getRandomCocktail } from '../../lib/cocktails.actions';
import { handleError } from '../../lib/jokes.actions';
import IngredientCard from '../../ui-component/IngredientCard';
import Loading from '../../views/Loading';
import PropTypes from 'prop-types';

let ingredientsCount = 0;


const CocktailInstructions = ({instructions, theme}) => {
  return (<Grid container spacing={gridSpacing}>
    <Grid item xs={12} md={12} lg={12}>
      <Box
        sx={{
          p: 3,
          mt: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: '10px',
          boxShadow: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.secondary.main }}
        >
          Instructions
        </Typography>
        <Typography
          sx={{ fontSize: '1.125rem', color: theme.palette.text.secondary }}
        >
          {instructions}
        </Typography>
      </Box>
    </Grid>
  </Grid>)
}


const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [showCheersButton, setShowCheersButton] = useState(false);
  const theme = useTheme();


  const processCocktailData = (data) => {
    const currentCocktail = data.drinks[0];
    ingredientsCount = 0;
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = currentCocktail[`strIngredient${i}`];
      const measure = currentCocktail[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    setIngredients(ingredients);
    setRandomCocktail(data.drinks[0]);
    setInstructions(data.drinks[0].strInstructions);
    setShowCheersButton(false)
  }

  const handleCheckboxChange = (event) => {
    event.target.checked ? ingredientsCount++ : ingredientsCount--;
    if(ingredientsCount === ingredients.length) {
      setShowCheersButton(true);
    } else {
      setShowCheersButton(false);
    }

  };

  const handleNewCocktail = async() => {
    try {
      const cocktail = await getRandomCocktail()
      processCocktailData(cocktail);
    } catch (error) {
      handleError(error, 'Error fetching random cocktail');
    }
  }

  useEffect(() => {
    handleNewCocktail();
  }, []);

  return (
    randomCocktail ? (
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
            <Grid item lg={12} xl={6} md={12}>
              <MainCard
                border={false}
                content={false}
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.primary.light,
                  overflow: 'hidden',
                  position: 'relative',
                  mb: '20px',
                }}
              >
                <Box sx={{
                  p: 2.25,
                  }}>
                  <Grid container spacing={gridSpacing}>
                    <Grid item>
                          <Typography sx={{
                            fontSize: '2.125rem',
                            fontWeight: 500,
                            textAlign: 'center',
                          }}>{randomCocktail.strDrink}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </MainCard>
            </Grid>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12} lg={12} xl={6}
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <CardMedia
                component="img"
                image={randomCocktail.strDrinkThumb}
                alt={randomCocktail.strDrink}
                sx={{
                  borderRadius: '20px',
                  height: '600px',
                  width: '500px',
                  objectFit: 'fill',
              }}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={6}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: 2,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: theme.palette.secondary.main,
                }}
              >
                Ingredients
              </Typography>
                  <Grid container direction="column">
                    {ingredients.map((ingredient) => (
                      <IngredientCard key={ingredient}  ingredient={ingredient} handleCheckboxChange={handleCheckboxChange} theme={theme} />
                    ))}
                  </Grid>
              <MainCard
                border={false}
                content={false}
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.primary.light,
                  overflow: 'hidden',
                  position: 'relative',
                  mt: '20px',
                }}
              >
              </MainCard>
            </Grid>
            </Grid>
              <CocktailInstructions instructions={instructions} theme={theme} />
          </Grid>
          <Grid container spacing={gridSpacing} justifyContent="center" alignItems="center">
            {showCheersButton && (
              <Grid item sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                  onClick={handleNewCocktail}
                  style={{
                  backgroundColor: theme.palette.primary.main,
                  color: '#fff',
                  padding: '15px 30px',
                  fontSize: '1.25rem',
                  borderRadius: '20px',
                }}>
                  Cheers! How about another one?
                </Button>
              </Grid>
            )}
          </Grid>
      </Grid>
    ) : <Loading />
  );
}

CocktailInstructions.propTypes = {
  instructions: PropTypes.string,
  theme: PropTypes.object,
}
export default RandomCocktail;