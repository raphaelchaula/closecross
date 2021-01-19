import React from 'react';
import { render, screen } from '@testing-library/react';
import LinguiProvider from '../../../LinguiProvider';
import HeaderCenterGroup from './HeaderCenterGroup';

describe('HeaderCenterGroup', () => {
  test('Header must contain 6 buttons', () => {
    render(<LinguiProvider><HeaderCenterGroup/></LinguiProvider>);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(6);
    // screen.debug(buttons);
  });
});