import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
/**
 * Navigation style
 */
const navStyle = StyleSheet.create({
  contentStyle: {
    backgroundColor: theme.colors.black,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: theme.colors.darkGray,
  },
});
export default navStyle;
