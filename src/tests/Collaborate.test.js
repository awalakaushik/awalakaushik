import React from 'react';
import { render, screen } from '@testing-library/react';
import Collaborate from '../components/Collaborate';

test('renders collaborate section title', () => {
  render(<Collaborate />);
  const collaborateTitle = screen.getByText(/Looking to collaborate?/i);
  expect(collaborateTitle).toBeInTheDocument();
});

test('renders collaborate section content', () => {
  render(<Collaborate />);
  const collaborateContent = screen.getByText(/If you'd like to connect, feel free to reach out to me on LinkedIn./i);
  expect(collaborateContent).toBeInTheDocument();
});
