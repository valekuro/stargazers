import {StyleSheet} from 'react-native';

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
export default inputStyles;
