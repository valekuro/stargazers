import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {IButton} from './IButton';
import buttonStyle from './style';
/**
 * Button component: to better improve a customization, I prefer to use TouchableHighlight.
 * Is used TouchableHighlight instead of TouchableOpacity for emphasizes the press
 * effect by changing the background color
 * @param label
 * @param onPress
 * @param disabled
 * @returns
 */
export default function Button({
  label,
  onPress,
  disabled,
}: IButton): JSX.Element {
  return (
    <TouchableHighlight
      style={buttonStyle(disabled).container}
      onPress={onPress}
      testID="button"
      disabled={disabled}>
      <Text style={buttonStyle(disabled).text}>{label}</Text>
    </TouchableHighlight>
  );
}
