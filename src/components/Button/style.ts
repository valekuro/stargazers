import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const buttonStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    padding: 15,
    borderRadius: theme.borderRadius,
    width: 280,
    backgroundColor: theme.colors.anchor,
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default buttonStyle;
