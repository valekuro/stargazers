import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../../components/Avatar';
import Stars from '../../components/Stars';
import {IUserInfo} from './IResultScreen';
import {resultScreenStyles} from './style';

export default function UserInfo({userInfo, users}: IUserInfo) {
  return (
    <View style={resultScreenStyles.userInfoContainer}>
      <Avatar url={userInfo?.avatar_url} size={90} />
      <View style={resultScreenStyles.userInfoRightContainer}>
        <Text style={resultScreenStyles.title}>{userInfo?.name}</Text>
        <Text style={resultScreenStyles.description}>{userInfo?.bio}</Text>
        <View style={resultScreenStyles.starsContainer}>
          <Stars starsNumber={users} />
        </View>
      </View>
    </View>
  );
}
