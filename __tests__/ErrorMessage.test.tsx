import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorMessage from '../src/components/ErrorMessage';

describe('Error message component', () => {
  test('it should be renders the error message correctly', () => {
    const error = 'This is an error message';
    render(<ErrorMessage error={error} />);
    const text = screen.getByText(error);
    expect(text).toBeDefined();
  });
});
