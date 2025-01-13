import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('renders about section title', () => {
  render(<About />);
  const aboutTitle = screen.getByText(/What I'm passionate about/i);
  expect(aboutTitle).toBeInTheDocument();
});

test('renders about section content', () => {
  render(<About />);
  const aboutContent = screen.getByText(/As much as I love technology, my heart is set on exploring the vast possibilities of quantum computing and blockchain technology./i);
  expect(aboutContent).toBeInTheDocument();
});
