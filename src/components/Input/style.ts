import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const inputStyles = (color: string) =>
  StyleSheet.create({
    input: {
      borderWidth: 2,
      borderColor: `${color}`,
      padding: 10,
      color: theme.colors.white,
      borderRadius: theme.borderRadius,
      zIndex: 2,
    },
  });
export default inputStyles;
