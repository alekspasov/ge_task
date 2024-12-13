import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { it, expect, describe, vi, beforeEach } from 'vitest';
import RandomCocktail from '../../src/views/mixology/RandomCocktail';
import { getRandomCocktail } from '../../src/lib/cocktails.actions';
import { handleError } from '../../src/lib/jokes.actions';


vi.mock('../../src/lib/cocktails.actions', () => ({
  getRandomCocktail: vi.fn(),
}));

vi.mock('../../src/lib/jokes.actions', () => ({
  handleError: vi.fn(),
}));

describe('RandomCocktail', () => {
  const mockCocktail = {
    drinks: [
      {
        strDrink: 'Margarita',
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg',
        strIngredient1: 'Tequila',
        strIngredient2: 'Triple sec',
        strIngredient3: 'Lime juice',
        strInstructions: 'Test instructions'
      }
    ]
  }

  beforeEach(() => {
    getRandomCocktail.mockResolvedValue(mockCocktail);
  });

  it('should render a random cocktail', async()=> {
    render (<RandomCocktail />);

    await waitFor(()=> {
      expect(screen.getByText('Margarita')).to.exist;
      expect(screen.getByText('Test instructions')).to.exist;
    })
  })


});