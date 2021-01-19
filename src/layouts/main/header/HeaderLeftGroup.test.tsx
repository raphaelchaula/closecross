import React from 'react';
import { render, screen } from '@testing-library/react';
import LinguiProvider from '../../../LinguiProvider';
import HeaderLeftGroup from './HeaderLeftGroup';

describe('HeaderLeftGroup', () => {
  test('Header must contain 1 image - logo and 2 buttons - toggle', () => {
    render(<LinguiProvider><HeaderLeftGroup/></LinguiProvider>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/logo.svg');
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
    // screen.debug(buttons);
  });
});