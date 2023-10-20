import {StyleSheet} from 'react-native';

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
