import React from 'react';
import {View, Image, Text} from 'react-native';
import {emptyStyle} from './style';

/**
 * EmptySection component is used when there are not stargazers
 * @returns
 */
export default function EmptySection() {
  return (
    <View style={emptyStyle.container}>
      <Image
        source={require('../../../assets/images/githubstar.jpg')}
        style={emptyStyle.logo}
      />
      <Text style={emptyStyle.text}>No stargazers found</Text>
    </View>
  );
}
