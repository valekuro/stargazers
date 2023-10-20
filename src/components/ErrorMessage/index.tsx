import React from 'react';
import {Text} from 'react-native';
import {theme} from '../../theme/theme';
import {IErrorMessage} from './IErrorMessage';
import errorTextStyle from './style';
/**
 * ErrorMessage component
 * @param error
 * @returns
 */
export default function ErrorMessage({error}: IErrorMessage): JSX.Element {
  return <Text style={errorTextStyle(theme.colors.error).text}>{error}</Text>;
}
