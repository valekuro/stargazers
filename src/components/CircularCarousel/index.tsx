import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import CircolarCarouselListItem from './CircularCarouselListItem';
import {useSharedValue} from 'react-native-reanimated';
import Card from './Card';
import carouselStyle from './style';
import {theme} from '../../theme/theme';
import {ICircularCarousel} from './ICircularCarousel';
import Stars from '../Stars';
/**
 * CircularCarousel component is built started to a FlatList component.
 * Instead of Carousel or ScrollView I would have gone with the FlatList alternative anyway,
 * because performance reason due to items renders lazily. Maybe, I could have many rows from api.
 * @param data: all data results
 * @param usersInformation
 * @param dataSearch
 * @returns
 */
export default function CircularCarousel({
  data,
  usersInformation,
  dataSearch,
}: ICircularCarousel): JSX.Element {
  const contentOffset = useSharedValue(0);
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 4;
  const [selectedUser, setSelectedUser] = useState<number>(0);
  console.log('USERINFO    ', usersInformation);
  return (
    <View
      style={
        carouselStyle(theme.colors.white, theme.colors.darkGray, listItemWidth)
          .container
      }>
      <Text
        style={
          carouselStyle(
            theme.colors.white,
            theme.colors.darkGray,
            listItemWidth,
          ).title
        }>
        Results for {dataSearch.username} {dataSearch.repository}
      </Text>
      <Stars starsNumber={data.length} />
      <Card
        title={usersInformation[selectedUser].login}
        avatar={usersInformation[selectedUser].avatar_url}
        description={usersInformation[selectedUser].url}
      />
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          contentOffset.value = event.nativeEvent.contentOffset.x;
        }}
        pagingEnabled
        snapToInterval={listItemWidth}
        style={
          carouselStyle(
            theme.colors.white,
            theme.colors.darkGray,
            listItemWidth,
          ).flatList
        }
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
    </View>
  );
}
