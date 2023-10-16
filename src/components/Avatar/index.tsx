import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {AvatarProps} from '../../Interfaces/IAvatar';

export default function Avatar({url}: AvatarProps) {
  console.log(url);
  return (
    <View style={imageStyles(26).avatarContainer}>
      <View>
        <Image
          source={{
            uri: url,
          }}
          style={imageStyles(26).imageContainer}
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
    iconStyle: {
      borderRadius: 100,
      padding: 4,
      borderWidth: 1,
      borderColor: 'red',
      width: 26,
      height: 26,
    },
    avatarContainer: {
      flexDirection: 'row',
      alignContent: 'flex-end',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
