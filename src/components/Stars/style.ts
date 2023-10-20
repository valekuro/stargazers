import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const starStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 140,
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: theme.borderRadius,
    alignSelf: 'center',
  },
  image: {
    width: 30,
    height: 30,
    margin: 8,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    padding: 8,
    fontWeight: '600',
  },
  stars: {
    fontSize: 30,
    color: theme.colors.amber,
  },
});

export default starStyle;
