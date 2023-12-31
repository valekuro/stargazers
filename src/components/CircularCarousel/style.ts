import {StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';

/**
 * Carousel style
 * @param listItemWidth
 * @returns
 */
const carouselStyle = (listItemWidth?: number) =>
  StyleSheet.create({
    containerColumnCard: {
      backgroundColor: theme.colors.black,
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: theme.borderRadius,
      borderWidth: 1,
      borderColor: theme.colors.lightGray,
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 300,
    },
    titleTextCard: {
      fontSize: 30,
      color: theme.colors.white,
    },
    titleDescriptionCard: {
      fontSize: 18,
      color: theme.colors.white,
    },
    containerRowCard: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    roundedImage: {
      margin: 3,
      height: listItemWidth || 0,
      width: listItemWidth || 0,
      borderRadius: 200,
      borderWidth: 2,
      borderColor: theme.colors.white,
    },
    animatedView: {
      width: listItemWidth,
      aspectRatio: 1,
      elevation: 5,
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 20,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      color: theme.colors.white,
      textAlign: 'center',
      margin: 14,
    },
    flatList: {height: 300},
  });

export default carouselStyle;
