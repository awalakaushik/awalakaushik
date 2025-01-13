import React from 'react';
import { render, screen } from '@testing-library/react';
import Learning from '../components/Learning';

test('renders learning section title', () => {
  render(<Learning />);
  const learningTitle = screen.getByText(/What I'm currently learning/i);
  expect(learningTitle).toBeInTheDocument();
});

test('renders learning section content', () => {
  render(<Learning />);
  const learningContent1 = screen.getByText(/Advanced React patterns and techniques./i);
  const learningContent2 = screen.getByText(/TypeScript for building scalable and maintainable apps./i);
  const learningContent3 = screen.getByText(/Machine learning with ML.NET and Quantum Computing Fundamentals using Q#./i);
  expect(learningContent1).toBeInTheDocument();
  expect(learningContent2).toBeInTheDocument();
  expect(learningContent3).toBeInTheDocument();
});
