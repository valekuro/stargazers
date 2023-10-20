import {StyleSheet} from 'react-native';

const carouselStyle = (
  color: string,
  bgColor: string,
  listItemWidth?: number,
) =>
  StyleSheet.create({
    containerColumnCard: {
      backgroundColor: `${bgColor}`,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 290,
    },
    titleTextCard: {
      fontSize: 30,
      color: `${color}`,
    },
    titleDescriptionCard: {
      fontSize: 18,
      color: `${color}`,
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
      borderColor: 'white',
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
      color: `${color}`,
      textAlign: 'center',
      margin: 14,
    },
    flatList: {height: 300},
  });

export default carouselStyle;
