import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CircularCarousel from '../../components/CircularCarousel';

export default function ResultScreen(route: any) {
  const [images, setImages] = useState<any[]>([]);
  useEffect(() => {
    const apoggio = [...route.route.params.data];
    route.route.params.data && setImages(apoggio.map((o: any) => o.avatar_url));
  }, [route]);
  return (
    <View>
      <CircularCarousel
        data={images}
        usersInformation={route.route.params.data}
      />
    </View>
  );
}
