import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {IButton} from './IButton';
import buttonStyle from './style';
/**
 * Button component: to better improve a customization, I prefer to use TouchableHighlight.
 * Also I prefer TouchableHighlight instead of TouchableOpacity for emphasizes the press
 * effect by changing the background color
 * @param label
 * @param onPress
 * @returns
 */
export default function Button({label, onPress}: IButton): JSX.Element {
  return (
    <TouchableHighlight style={buttonStyle.container} onPress={onPress}>
      <Text style={buttonStyle.text}>{label}</Text>
    </TouchableHighlight>
  );
}
