import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CircularCarousel from '../../components/CircularCarousel';
import {IOwner} from '../../interfaces/IApi';
import {TResultScreen} from '../../types/RootStackParamList';

export default function ResultScreen(route: TResultScreen) {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    route.route.params.data &&
      setImages(route.route.params.data.map((o: IOwner) => o.avatar_url));
  }, [route]);
  return (
    <View>
      {route.route.params.data.length ? (
        <CircularCarousel
          data={images}
          usersInformation={route.route.params.data}
          dataSearch={route.route.params.dataSearch}
        />
      ) : (
        <Text style={{color: 'white'}}>non ci sono risultati</Text>
      )}
    </View>
  );
}
