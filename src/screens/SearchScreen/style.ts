import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const searchScreenStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  logo: {width: 180, height: 180, alignSelf: 'center'},
  text: {
    color: `${theme.colors.white}`,
  },
  dropdownContainer: {
    backgroundColor: theme.colors.anchor,
    color: theme.colors.white,
    height: 100,
    position: 'absolute',
    top: 52,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: theme.borderRadius,
    borderBottomRightRadius: theme.borderRadius,
    width: '100%',
    zIndex: 1,
  },
});

export default searchScreenStyles;
