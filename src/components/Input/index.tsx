import {useController} from 'react-hook-form';
import {IInput} from '../../Interfaces/IInput';
import {TextInput} from 'react-native';
import React from 'react';

export default function Input({
  name,
  control,
  placeholder,
  onChange,
}: IInput): JSX.Element {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
