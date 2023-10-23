import React from 'react';
import {Text} from 'react-native';
import {IErrorMessage} from './IErrorMessage';
import errorTextStyle from './style';
/**
 * ErrorMessage component used to show form error or API error
 * @param error
 * @returns
 */
export default function ErrorMessage({error}: IErrorMessage): JSX.Element {
  return <Text style={errorTextStyle.text}>{error}</Text>;
}
