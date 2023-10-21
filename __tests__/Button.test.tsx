import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Button from '../src/components/Button';

describe('Button component', () => {
  const label = 'Disabled button';
  const onPress = jest.fn(() => null);
  test('it should be a clicked button', () => {
    const disabled = false;
    const {getByTestId} = render(
      <Button disabled={disabled} label={label} onPress={onPress} />,
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    waitFor(() => expect(onPress.mock.calls.length).toBe(1));
  });

  test('it should not be a clicked button', () => {
    const disabled = true;
    const {getByTestId} = render(
      <Button disabled={disabled} label={label} onPress={onPress} />,
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    waitFor(() => expect(onPress.mock.calls.length).toBe(0));
  });
});
