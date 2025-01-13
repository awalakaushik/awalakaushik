import React from 'react';
import { render, screen } from '@testing-library/react';
import FunFact from '../components/FunFact';

test('renders fun fact section title', () => {
  render(<FunFact />);
  const funFactTitle = screen.getByText(/Fun fact about me/i);
  expect(funFactTitle).toBeInTheDocument();
});

test('renders fun fact section content', () => {
  render(<FunFact />);
  const funFactContent = screen.getByText(/Did you know that I once won a regional table tennis tournament in high school?/i);
  expect(funFactContent).toBeInTheDocument();
});
