import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IAvatar} from '../../Interfaces/IAvatar';

export default function Avatar({url, size}: IAvatar) {
  return (
    <View style={imageStyles(size).avatarContainer}>
      <View>
        <Image
          source={{
            uri: url,
          }}
          style={imageStyles(size).imageContainer}
        />
      </View>
    </View>
  );
}

const imageStyles = (size: number) =>
  StyleSheet.create({
    imageContainer: {
      borderRadius: 100,
      width: size,
      height: size,
    },
    avatarContainer: {
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
