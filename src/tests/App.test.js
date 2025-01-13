import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hi there, I'm Awala, Kaushik Reddy!/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders about component', () => {
  render(<App />);
  const aboutElement = screen.getByText(/What I'm passionate about/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders hobbies component', () => {
  render(<App />);
  const hobbiesElement = screen.getByText(/My hobbies/i);
  expect(hobbiesElement).toBeInTheDocument();
});

test('renders fun fact component', () => {
  render(<App />);
  const funFactElement = screen.getByText(/Fun fact about me/i);
  expect(funFactElement).toBeInTheDocument();
});

test('renders learning component', () => {
  render(<App />);
  const learningElement = screen.getByText(/What I'm currently learning/i);
  expect(learningElement).toBeInTheDocument();
});

test('renders collaborate component', () => {
  render(<App />);
  const collaborateElement = screen.getByText(/Looking to collaborate?/i);
  expect(collaborateElement).toBeInTheDocument();
});

test('renders contact component', () => {
  render(<App />);
  const contactElement = screen.getByText(/Get in touch/i);
  expect(contactElement).toBeInTheDocument();
});
