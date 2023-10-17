import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';
import {IButton} from '../../Interfaces/IButton';
import {theme} from '../../theme/theme';

export default function Button({label, onPress}: IButton) {
  return (
    <TouchableHighlight
      style={buttonStyle(theme.colors.white, theme.colors.anchor).container}
      onPress={onPress}>
      <Text style={buttonStyle(theme.colors.white, theme.colors.anchor).text}>
        {label}
      </Text>
    </TouchableHighlight>
  );
}

const buttonStyle = (color: string, bgColor: string) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: `${color}`,
      padding: 15,
      borderRadius: 8,
      width: 280,
      backgroundColor: `${bgColor}`,
      alignItems: 'center',
      alignSelf: 'center',
    },
    text: {
      color: `${color}`,
      fontWeight: '600',
      fontSize: 16,
    },
  });
