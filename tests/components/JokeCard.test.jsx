
import JokeCard from '../../src/ui-component/JokeCard';
import React from 'react';
import { it, expect, describe } from 'vitest';
import {  render, screen } from '@testing-library/react';

describe('JokeCard', () => {

  it('should render a provided random joke', () => {
    const joke = 'This is a joke';
    render(<JokeCard randomJoke={joke} />);
    expect(screen.getByText(joke)).to.exist;
  });

})
