import React from 'react';
import { render, screen } from '@testing-library/react';
import Hobbies from '../components/Hobbies';

test('renders hobbies section title', () => {
  render(<Hobbies />);
  const hobbiesTitle = screen.getByText(/My hobbies/i);
  expect(hobbiesTitle).toBeInTheDocument();
});

test('renders hobbies section content', () => {
  render(<Hobbies />);
  const hobbiesContent = screen.getByText(/When I'm not coding, I love to read books and play table tennis./i);
  expect(hobbiesContent).toBeInTheDocument();
});
