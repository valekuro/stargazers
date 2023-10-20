import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import CircularCarousel from '../../components/CircularCarousel';
import {IOwner} from '../../interfaces/IApi';
import {TResultScreen} from '../../types/RootStackParamList';
import Card from '../../components/CircularCarousel/Card';
import Stars from '../../components/Stars';
import carouselStyle from '../../components/CircularCarousel/style';

export default function ResultScreen(route: TResultScreen) {
  const [images, setImages] = useState<string[]>([]);
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 4;
  useEffect(() => {
    route.route.params.data &&
      setImages(route.route.params.data.map((o: IOwner) => o.avatar_url));
  }, [route]);
  return (
    <View>
      {route.route.params.data.length ? (
        <View style={carouselStyle(listItemWidth).container}>
          <Text style={carouselStyle(listItemWidth).title}>
            Results for {route.route.params.dataSearch.username}{' '}
            {route.route.params.dataSearch.repository}
          </Text>
          <Stars starsNumber={images.length} />
          <Card
            title={route.route.params.data[selectedUser].login}
            avatar={route.route.params.data[selectedUser].avatar_url}
            description={route.route.params.data[selectedUser].url}
          />
          <CircularCarousel
            data={images}
            setSelectedUser={setSelectedUser}
            listItemWidth={listItemWidth}
          />
        </View>
      ) : (
        <Text style={{color: 'white'}}>non ci sono risultati</Text>
      )}
    </View>
  );
}
