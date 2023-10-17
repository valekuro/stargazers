import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../theme/theme';

interface IErrorMessage {
  error?: string;
}

export default function ErrorMessage({error}: IErrorMessage): JSX.Element {
  return <Text style={errorTextStyle(theme.colors.error).text}>{error}</Text>;
}

const errorTextStyle = (color: string) =>
  StyleSheet.create({
    text: {
      padding: 5,
      color: `${color}`,
      fontSize: 12,
    },
  });
