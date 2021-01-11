import React from 'react';
import { render, screen } from '@testing-library/react';
import LinguiProvider from '../../../LinguiProvider';
import Header from './index';

describe('App', () => {
  test('Button exists', () => {
    render(<LinguiProvider><Header/></LinguiProvider>);
    expect(screen.findByRole("button")).toBeTruthy();
  });
});