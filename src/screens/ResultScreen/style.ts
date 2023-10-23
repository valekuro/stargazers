import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
/**
 * ResultScreen style
 */
export const resultScreenStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 700,
    gap: 60,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: theme.borderRadius,
    padding: 10,
    width: '100%',
    gap: 8,
    alignItems: 'center',
  },
  userInfoRightContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flexGrow: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    flexShrink: 1,
    flexWrap: 'wrap',
    color: 'white',
    fontSize: 12,
  },
  starsContainer: {alignSelf: 'flex-end'},
});
