import React from 'react';
import {Image, Text, View} from 'react-native';
import {IStars} from './IStars';
import starStyle from './style';

export default function Stars({starsNumber}: IStars) {
  return (
    <View style={starStyle.container}>
      <View style={starStyle.subContainer}>
        <Text style={starStyle.text}>Stars</Text>
        <Image
          source={require('../../../assets/images/star.png')}
          style={starStyle.image}
        />
      </View>
      <View style={starStyle.subContainer}>
        <Text style={[starStyle.text, starStyle.stars]}>{starsNumber}</Text>
      </View>
    </View>
  );
}
