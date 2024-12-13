import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe, vi } from 'vitest';
import IngredientCard from '../../src/ui-component/IngredientCard';

describe('IngredientCard', () => {
  const mockHandleCheckboxChange = vi.fn();
  const mockTheme = {
    palette: {
      primary: {
        dark: '#000',
        light: '#fff',
      },
    },
  };

  it('should render the ingredient and checkbox', () => {
    render(
      <IngredientCard
        ingredient="Tequila"
        handleCheckboxChange={mockHandleCheckboxChange}
        theme={mockTheme}
      />
    );

    expect(screen.getByLabelText('Tequila')).to.exist;
    expect(screen.getByRole('checkbox')).to.exist;
  });

  it('should call handleCheckboxChange when checkbox is clicked', () => {
    render(
      <IngredientCard
        ingredient="Tequila"
        handleCheckboxChange={mockHandleCheckboxChange}
        theme={mockTheme}
      />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(mockHandleCheckboxChange).toHaveBeenCalledTimes(1);
  });
});