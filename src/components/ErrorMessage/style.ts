import {StyleSheet} from 'react-native';

const errorTextStyle = (color: string) =>
  StyleSheet.create({
    text: {
      padding: 5,
      color: `${color}`,
      fontSize: 12,
    },
  });
export default errorTextStyle;
