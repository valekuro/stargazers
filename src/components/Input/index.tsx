import {useController} from 'react-hook-form';
import {IInput} from './IInput';
import {TextInput} from 'react-native';
import React from 'react';
import {theme} from '../../theme/theme';
import inputStyles from './style';
/**
 * Input component
 * @param name
 * @param control
 * @param placeholder
 * @param onChange
 * @param onFocus
 * @param onBlur
 * @param focused
 * @param disabled
 * @returns
 */
export default function Input({
  name,
  control,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  focused,
  disabled,
}: IInput): JSX.Element {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    disabled,
  });
  const color = focused ? theme.colors.blue : theme.colors.white;
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      onChange={onChange}
      placeholderTextColor={theme.colors.lightGray}
      style={inputStyles(color).input}
      onFocus={onFocus}
      onBlur={onBlur}
      editable={!disabled}
    />
  );
}
