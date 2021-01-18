import React from 'react';
import { render, screen } from '@testing-library/react';
import LinguiProvider from '../../../LinguiProvider';
import Header from './index';

describe('Header', () => {
  test('Header must contain 2 images and 11 buttons', () => {
    render(<LinguiProvider><Header/></LinguiProvider>);
    const images = screen.getAllByRole('img');
    expect(images.length).toEqual(2);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(11);
    // screen.debug(buttons);
  });
});