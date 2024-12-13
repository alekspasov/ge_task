import { BASE_URL } from '../utils/constants';

export const getCategories = async () => {
  try{
    const response = await fetch(`${BASE_URL}/categories`);
    const data = await response.json();
    return data;
  } catch(err){
    handleError(err, 'Error fetching categories');
  }

}


export const getRandomJoke = async (category=null) => {
  let url = `${BASE_URL}/random`;
  if(category){
    url = `${BASE_URL}/random?category=${category}`;
  }

  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(err){
    handleError(err, 'Error fetching random joke');
  }
}

export const handleError = (error, message) => {
  console.log(error, message);
  throw error;
};