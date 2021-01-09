import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/TS/i);
  expect(linkElement).toBeInTheDocument();
});

test('title exists', () => {
  render(<Header title="TS" paragraph="TypeScript" />);
  const heading = screen.getByText("TS");
  expect(heading).toBeTruthy();
  const paragraph = screen.getByText("TypeScript");
  expect(paragraph).toBeTruthy();
});