import {Dimensions} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {ICircolarCarouselListItem} from './ICircularCarousel';

/**
 * I used Pick instead of Partial because with partial every item can be undefined so I could add
 * some additional code to control if the variable exists, then because I have a best control of prop,
 * I'm sure that I can take only index and contentOffset
 * @param index
 * @param contentOffset
 * @returns {rStyle, listItemWidth}
 */
export default function useCarousel({
  index,
  contentOffset,
}: Pick<ICircolarCarouselListItem, 'index' | 'contentOffset'>) {
  //the purpose is to see 5 circular items at time in the carousel, but
  //it dipends on windows dimension, so I take windows width divided by
  //the number of users I want to see on screen
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 5;
  //style function to animate carousel using react-native-reanimated hook
  const rStyle = useAnimatedStyle(() => {
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
    rStyle,
    listItemWidth,
  };
}
