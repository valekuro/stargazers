import React from 'react';
import {render, renderHook, screen} from '@testing-library/react-native';

import Input from '../src/components/Input';
import {useForm} from 'react-hook-form';
import {IDataForm} from '../src/interfaces/IDataForm';

jest.mock('react-hook-form');
describe('Testing Card', () => {
  const {result} = renderHook(() => useForm<IDataForm>());

  const name = 'username';
  const control = result.current.control;
  const placeholder = 'Insert username *';
  const onFocus = jest.fn(() => null);
  const onBlur = jest.fn(() => null);

  test('it should have white border because it is not on focus', () => {
    const focused = false;

    render(
      <Input
        name={name}
        control={control}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        focused={focused}
      />,
    );
    //const element = screen.getByTestId('input');
    //expect(element).toHave
  });
});
