import { render, screen, fireEvent } from '@testing-library/react';
import Mixology from 'src/views/mixology/Mixology';
import RandomCocktail from 'src/views/mixology/RandomCocktail';

jest.mock('src/views/mixology/RandomCocktail', () => () => <div>Random Cocktail</div>);

describe('Mixology Component', () => {
  test('renders the initial state with the button', () => {
    render(<Mixology />);
    const button = screen.getByText(/Feeling thirsty\? How about a cocktail\?/i);
    expect(button).to.exist;
  });

  test('renders RandomCocktail component after button click', () => {
    render(<Mixology />);
    const button = screen.getByText(/Feeling thirsty\? How about a cocktail\?/i);
    fireEvent.click(button);
    const randomCocktail = screen.getByText(/Random Cocktail/i);
    expect(randomCocktail).to.exist;
  });
});