import React from 'react';
import { render, screen } from '@testing-library/react';
import LinguiProvider from '../../../LinguiProvider';
import HeaderRightGroup from './HeaderRightGroup';

describe('HeaderRightGroup', () => {
  test('Header must contain 1 image - avatar and 3 icon buttons', () => {
    render(<LinguiProvider><HeaderRightGroup/></LinguiProvider>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/avatar.png');
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(3);
    // screen.debug(buttons);
  });
});