import {Dimensions} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {ICircolarCarouselListItem} from './ICircularCarousel';

/**
 * useCarousel manage the Carousel logic
 * @param index
 * @param contentOffset
 * @returns {animatedStyle, listItemWidth}
 */
export default function useCarousel({
  index,
  contentOffset,
}: Pick<ICircolarCarouselListItem, 'index' | 'contentOffset'>) {
  //the purpose is to see 5 circular items at time in the carousel, but
  //it dipends on screen dimension, so I take screen width divided by
  //the number of users I want to see on screen
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 5;
  //style function to animate carousel using react-native-reanimated hook
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * listItemWidth,
      (index - 1) * listItemWidth,
      index * listItemWidth,
      (index + 1) * listItemWidth,
      (index + 2) * listItemWidth,
    ];

    const translateYOutputRange = [
      0,
      -listItemWidth / 3,
      -listItemWidth / 2,
      -listItemWidth / 3,
      0,
    ];

    const opacityOutputRange = [0.5, 0.7, 1, 0.7, 0.5];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const translateY = interpolate(
      contentOffset.value,
      inputRange,
      translateYOutputRange,
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      contentOffset.value,
      inputRange,
      opacityOutputRange,
      Extrapolate.CLAMP,
    );

    const scale = interpolate(
      contentOffset.value,
      inputRange,
      scaleOutputRange,
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          translateY: translateY,
        },
        {
          scale,
        },
      ],
    };
  });

  return {
    animatedStyle,
    listItemWidth,
  };
}
