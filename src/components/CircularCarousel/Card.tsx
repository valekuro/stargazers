import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import Avatar from '../Avatar';
import carouselStyle from './style';
import {ICard} from './ICircularCarousel';
/**
 * Card component is the user datail card open after choose a user in carousel from results
 * @param title: usually contains the username
 * @param avatar: usually contains the user image
 * @param description: usually contains the github link
 * @returns
 */
export default function Card({title, avatar, description}: ICard): JSX.Element {
  return (
    <View
      style={
        carouselStyle(theme.colors.white, theme.colors.darkGray)
          .containerColumnCard
      }>
      <View
        style={
          carouselStyle(theme.colors.white, theme.colors.darkGray)
            .containerRowCard
        }>
        <Text
          style={
            carouselStyle(theme.colors.white, theme.colors.darkGray)
              .titleTextCard
          }>
          {title}
        </Text>
      </View>
      <Avatar url={avatar || ''} size={100} />
      <Text
        style={
          carouselStyle(theme.colors.white, theme.colors.darkGray)
            .titleDescriptionCard
        }>
        {description}
      </Text>
    </View>
  );
}
