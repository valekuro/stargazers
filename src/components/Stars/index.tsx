import React from 'react';
import {Image, Text, View} from 'react-native';
import {IStars} from './IStars';
import starStyle from './style';
/**
 * Stars component shows the number of stargazers in result screen
 * @param starsNumber
 * @returns
 */
export default function Stars({starsNumber}: IStars) {
  return (
    <View style={starStyle.container}>
      <View style={starStyle.subContainer}>
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
