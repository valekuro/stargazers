import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Stars from '../src/components/Stars';

describe('Error message component', () => {
  test('it should be renders the error message correctly', () => {
    render(<Stars starsNumber={10} />);
    const text = screen.findByText('10');
    expect(text).toBeDefined();
  });
});
