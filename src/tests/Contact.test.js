import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders contact section title', () => {
  render(<Contact />);
  const contactTitle = screen.getByText(/Get in touch/i);
  expect(contactTitle).toBeInTheDocument();
});

test('renders contact section content', () => {
  render(<Contact />);
  const contactContent = screen.getByText(/LinkedIn/i);
  expect(contactContent).toBeInTheDocument();
});
