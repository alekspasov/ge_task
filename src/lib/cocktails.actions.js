import { BASE_COCKTAIL_URL } from '../utils/constants';
import { handleError } from './jokes.actions';

export const getRandomCocktail = async() => {
  try{
      const response = await fetch(`${BASE_COCKTAIL_URL}`);
      const data = await response.json();
      return data;
  } catch(err){
    handleError(err, 'Error fetching random cocktail');
  }
}
