import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

export const emptyStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    height: 400,
  },
  logo: {width: 200, height: 200, alignSelf: 'center'},
  text: {
    color: theme.colors.white,
    fontSize: 32,
    alignSelf: 'center',
  },
});
