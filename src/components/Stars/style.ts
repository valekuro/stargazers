import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

const starStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 60,
    alignSelf: 'center',
  },
  image: {
    width: 12,
    height: 12,
    margin: 8,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.white,
    padding: 2,
    fontWeight: '600',
  },
  stars: {
    fontSize: 20,
    color: theme.colors.amber,
  },
});

export default starStyle;
