import React from 'react';
import {Text, View} from 'react-native';
import Avatar from '../Avatar';
import carouselStyle from './style';
import {ICard} from './ICircularCarousel';
/**
 * Card component is the user stargazer detail card
 * @param title: usually contains the username
 * @param avatar: usually contains the user image
 * @param description: usually contains the github link
 * @returns
 */
export default function Card({title, avatar, description}: ICard): JSX.Element {
  return (
    <View style={carouselStyle().containerColumnCard} testID="card-section">
      <View style={carouselStyle().containerRowCard}>
        <Text style={carouselStyle().titleTextCard}>{title}</Text>
      </View>
      <Avatar url={avatar || ''} size={150} />
      <Text style={carouselStyle().titleDescriptionCard}>{description}</Text>
    </View>
  );
}
