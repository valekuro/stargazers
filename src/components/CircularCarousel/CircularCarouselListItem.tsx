import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {ICircolarCarouselListItem} from './ICircularCarousel';
import useCarousel from './useCarousel';
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
  const {animatedStyle, listItemWidth} = useCarousel({index, contentOffset});
  return (
    <TouchableOpacity onPress={() => setSelectedUser(index)} testID="listitem">
      <Animated.View
        style={[carouselStyle(listItemWidth).animatedView, animatedStyle]}>
        <Image
          source={{uri: `${src}`}}
          style={carouselStyle(listItemWidth).roundedImage}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
