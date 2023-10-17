import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import Avatar from '../Avatar';

interface ICard {
  title?: string;
  avatar?: string;
  description?: string;
}
export default function Card({title, avatar, description}: ICard) {
  return (
    <View
      style={
        cardStyle(theme.colors.white, theme.colors.lightGray).containerColumn
      }>
      <View
        style={
          cardStyle(theme.colors.white, theme.colors.lightGray).containerRow
        }>
        <Avatar url={avatar || ''} size={170} />
        <Text>{title}</Text>
      </View>
      <Text>{description}</Text>
    </View>
  );
}

const cardStyle = (color: string, bgColor: string) =>
  StyleSheet.create({
    containerColumn: {
      backgroundColor: `${bgColor}`,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 50,
      alignContent: 'flex-end',
    },
    text: {
      color: `${color}`,
    },
    containerRow: {
      display: 'flex',
      flexDirection: 'row',
    },
  });
