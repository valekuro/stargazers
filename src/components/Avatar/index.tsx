import React from 'react';
import {View, Image} from 'react-native';
import {IAvatar} from './IAvatar';
import avatarStyles from './style';
/**
 * Avatar component
 * @param url: avatar url
 * @param size: avatar size
 * @returns
 */
export default function Avatar({url, size}: IAvatar): JSX.Element {
  return (
    <View style={avatarStyles(size).avatarContainer}>
      <Image
        testID="avatar"
        source={{uri: url}}
        style={avatarStyles(size).imageContainer}
      />
    </View>
  );
}
