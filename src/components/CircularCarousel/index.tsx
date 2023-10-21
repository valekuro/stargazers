import React from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import CircolarCarouselListItem from './CircularCarouselListItem';
import {useSharedValue} from 'react-native-reanimated';
import carouselStyle from './style';
import {ICircularCarousel} from './ICircularCarousel';
/**
 * CircularCarousel component is built started to a FlatList component.
 * Instead of Carousel or ScrollView I would have gone with the FlatList alternative anyway,
 * because performance reason due to items renders lazily. Maybe, I could have many rows from api.
 * nb.contentContainerStyle has inline style for rendering reasons
 * @param data: all data results
 * @param usersInformation
 * @param dataSearch
 * @returns
 */
export default function CircularCarousel({
  data,
  setSelectedUser,
  listItemWidth,
}: ICircularCarousel): JSX.Element {
  const contentOffset = useSharedValue(0);

  return (
    <FlatList
      data={data}
      keyExtractor={(_, index) => index.toString()}
      scrollEventThrottle={16}
      onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
        contentOffset.value = event.nativeEvent.contentOffset.x;
      }}
      pagingEnabled
      snapToInterval={listItemWidth}
      style={carouselStyle(listItemWidth).flatList}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 1.5 * listItemWidth,
        paddingLeft: 1.5 * listItemWidth,
      }}
      horizontal
      renderItem={({item, index}) => {
        return (
          <CircolarCarouselListItem
            src={item}
            index={index}
            contentOffset={contentOffset}
            setSelectedUser={setSelectedUser}
          />
        );
      }}
    />
  );
}
