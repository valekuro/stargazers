import {useController} from 'react-hook-form';
import {IInput} from '../../Interfaces/IInput';
import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';

export default function Input({
  name,
  control,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  focused,
}: IInput): JSX.Element {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });
  const color = focused ? theme.colors.blue : theme.colors.white;
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      onChange={onChange}
      placeholderTextColor={theme.colors.lightGray}
      style={inputStyles(color, theme.colors.white).input}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

const inputStyles = (color: string, textColor: string) =>
  StyleSheet.create({
    input: {
      borderWidth: 2,
      borderColor: `${color}`,
      padding: 10,
      color: `${textColor}`,
      borderRadius: 8,
    },
  });
