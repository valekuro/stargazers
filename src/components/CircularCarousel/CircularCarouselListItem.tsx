import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
interface ICircolarCarouselListItem {
  src: string;
  index: number;
  contentOffset: Animated.SharedValue<number>;
  setSelectedUser: any;
}
export default function CircolarCarouselListItem({
  src,
  index,
  contentOffset,
  setSelectedUser,
}: ICircolarCarouselListItem) {
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 5;
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

  return (
    <TouchableOpacity onPress={() => setSelectedUser(index)}>
      <Animated.View
        style={[
          {
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
          rStyle,
        ]}>
        <Image
          source={{uri: `${src}`}}
          style={{
            margin: 3,
            height: listItemWidth,
            width: listItemWidth,

            borderRadius: 200,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}
