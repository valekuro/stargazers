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
    color: theme.colors.white,
  },
});

export const dropdownStyle = (disabled: boolean) =>
  StyleSheet.create({
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
    dropdownButtonTextStyle: {
      color: disabled ? theme.colors.lightGray : theme.colors.white,
      textAlign: 'left',
    },
    dropdownSearchInputStyle: {
      backgroundColor: theme.colors.anchor,
      borderBottomColor: theme.colors.white,
      borderBottomWidth: 1,
    },
    dropdownButtonStyle: {
      width: '100%',
      height: 50,
      textAlign: 'center',
      backgroundColor: theme.colors.anchor,
      borderColor: theme.colors.white,
      borderRadius: 8,
      borderWidth: 1,
    },
    dropdownRowStyle: {
      backgroundColor: theme.colors.anchor,
      borderBottomColor: theme.colors.white,
    },
    dropdownRowTextStyle: {color: theme.colors.white, textAlign: 'center'},
  });

export default searchScreenStyles;
