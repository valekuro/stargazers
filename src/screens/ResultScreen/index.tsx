import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import CircularCarousel from '../../components/CircularCarousel';
import {TResultScreen} from '../../types/RootStackParamList';
import Card from '../../components/CircularCarousel/Card';
import useResultScreen from './useResultScreen';
import ErrorMessage from '../../components/ErrorMessage';
import UserInfo from './UserInfo';
import {resultScreenStyles} from './style';
import EmptySection from '../../components/EmptySection';

export default function ResultScreen(route: TResultScreen) {
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 4;
  const {images, userInfo, networkError} = useResultScreen(route.route.params);
  return (
    <View>
      <ErrorMessage error={networkError} />
      {route.route.params.data.length ? (
        <View style={resultScreenStyles.container}>
          {userInfo && <UserInfo users={images.length} userInfo={userInfo} />}
          <Card
            title={route.route.params.data[selectedUser].login}
            avatar={route.route.params.data[selectedUser].avatar_url}
            description={route.route.params.data[selectedUser].url}
          />
          <CircularCarousel
            data={images}
            setSelectedUser={setSelectedUser}
            listItemWidth={listItemWidth}
          />
        </View>
      ) : (
        <EmptySection />
      )}
    </View>
  );
}
