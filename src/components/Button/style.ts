import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const buttonStyle = (disabled: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.green,
      padding: 10,
      width: 300,
      borderRadius: theme.borderRadius,
      alignSelf: 'center',
    },
    text: {
      fontWeight: '700',
      color: disabled ? theme.colors.lightGray : theme.colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
  });

export default buttonStyle;
