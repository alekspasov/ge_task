import React from 'react';
import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import JokeCategories from '../../src/views/jokes/JokeCategories';
import { useSelector } from 'react-redux';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
}));

describe('JokeCategories', () => {
  it('should render categories', () => {
    const mockCategories = ['animal', 'science', 'dev'];

    useSelector.mockReturnValue(mockCategories);

    render(<Router><JokeCategories /></Router>);

    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).to.exist;
    });
  });
});