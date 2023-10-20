import {StyleSheet} from 'react-native';

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

export default buttonStyle;
