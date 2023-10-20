import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const errorTextStyle = StyleSheet.create({
  text: {
    padding: 5,
    color: theme.colors.error,
    fontSize: 12,
  },
});
export default errorTextStyle;
