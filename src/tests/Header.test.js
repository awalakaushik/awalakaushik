import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header title', () => {
  render(<Header />);
  const headerTitle = screen.getByText(/Hi there, I'm Awala, Kaushik Reddy!/i);
  expect(headerTitle).toBeInTheDocument();
});

test('renders header description', () => {
  render(<Header />);
  const headerDescription = screen.getByText(/I'm a passionate software developer who loves to explore new technologies and solve challenging problems./i);
  expect(headerDescription).toBeInTheDocument();
});
