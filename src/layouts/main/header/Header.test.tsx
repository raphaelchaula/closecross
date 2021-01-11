import React from 'react';
import { render, screen } from '@testing-library/react';
import LinguiProvider from '../../../LinguiProvider';
import Header from './index';

test('title exists', () => {
  render(<LinguiProvider><Header/></LinguiProvider>);
  const buttons = screen.findByRole("button");
  expect(buttons).toBeTruthy();
});