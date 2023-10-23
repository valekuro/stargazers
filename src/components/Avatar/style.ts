import {StyleSheet} from 'react-native';

/**
 * Avatar style
 * @param size
 * @returns
 */
const avatarStyles = (size: number) =>
  StyleSheet.create({
    imageContainer: {
      borderRadius: 100,
      width: size,
      height: size,
    },
    avatarContainer: {
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });

export default avatarStyles;
