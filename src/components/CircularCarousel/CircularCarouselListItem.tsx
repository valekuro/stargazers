import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {ICircolarCarouselListItem} from './ICircularCarousel';
import useCarousel from './useCarousel';
import {theme} from '../../theme/theme';
import carouselStyle from './style';
/**
 * CircolarCarouselListItem component manage the carousel animation
 * @param src
 * @param index
 * @param contentOffset
 * @param setSelectedUser
 * @returns
 */
export default function CircolarCarouselListItem({
  src,
  index,
  contentOffset,
  setSelectedUser,
}: ICircolarCarouselListItem): JSX.Element {
  const {rStyle, listItemWidth} = useCarousel({index, contentOffset});
  return (
    <TouchableOpacity onPress={() => setSelectedUser(index)}>
      <Animated.View
        style={[
          carouselStyle(
            theme.colors.white,
            theme.colors.darkGray,
            listItemWidth,
          ).animatedView,
          rStyle,
        ]}>
        <Image
          source={{uri: `${src}`}}
          style={
            carouselStyle(
              theme.colors.white,
              theme.colors.darkGray,
              listItemWidth,
            ).roundedImage
          }
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
