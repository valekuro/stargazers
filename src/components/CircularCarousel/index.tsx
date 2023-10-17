import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import CircolarCarouselListItem from './CircularCarouselListItem';
import {useSharedValue} from 'react-native-reanimated';
import Card from './Card';

interface ICircularCarousel {
  data: string[];
  usersInformation: any;
}
export default function CircularCarousel({
  data,
  usersInformation,
}: ICircularCarousel) {
  const contentOffset = useSharedValue(0);
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 4;
  const [selectedUser, setSelectedUser] = useState<number>(0);
  console.log(usersInformation[selectedUser]);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          contentOffset.value = event.nativeEvent.contentOffset.x;
        }}
        pagingEnabled
        snapToInterval={listItemWidth}
        style={{
          height: 300,
        }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
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

      <Card
        title={usersInformation[selectedUser].login}
        avatar={usersInformation[selectedUser].avatar_url}
        description={usersInformation[selectedUser].url}
      />
    </View>
  );
}
