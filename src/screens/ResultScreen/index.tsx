import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import CircularCarousel from '../../components/CircularCarousel';
import {IOwner, IUserInformations} from '../../interfaces/IApi';
import {TResultScreen} from '../../types/RootStackParamList';
import Card from '../../components/CircularCarousel/Card';
import Stars from '../../components/Stars';
import carouselStyle from '../../components/CircularCarousel/style';
import {getInformationsByUsername} from '../../api/api';
import Avatar from '../../components/Avatar';

export default function ResultScreen(route: TResultScreen) {
  const [images, setImages] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<IUserInformations>();
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const {width: WindowsWidth} = Dimensions.get('window');
  const listItemWidth: number = WindowsWidth / 4;
  useEffect(() => {
    route.route.params.data &&
      setImages(route.route.params.data.map((o: IOwner) => o.avatar_url));
    route.route.params.dataSearch.username &&
      getInformationsByUsername(route.route.params.dataSearch.username)
        .then(repository => {
          setUserInfo(repository);
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            error.response.status === 404
              ? console.log(
                  'User or repository not exists. Try with other data.',
                )
              : console.log(
                  `Something went wrong: ${error.response.status} - ${error.response.data.message}`,
                );
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the
            // browser and an instance of
            // http.ClientRequest in node.js
            console.log('Something went wrong: try later!');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log(`Something went wrong: ${error.message}`);
          }
        });
  }, [route]);
  return (
    <View>
      {route.route.params.data.length ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 700,
            gap: 60,
          }}>
          {userInfo && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 8,
                padding: 10,
                width: '100%',
                gap: 8,
                alignItems: 'center',
              }}>
              <Avatar url={userInfo?.avatar_url} size={60} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexWrap: 'nowrap',
                  flexGrow: 1,
                  flex: 1,
                  alignSelf:'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600',
                  }}>
                  {userInfo?.name}
                </Text>
                <Text
                  style={{
                    flexShrink: 1,
                    flexWrap: 'wrap',
                    color: 'white',
                    fontSize: 12,
                  }}>
                  {userInfo?.bio}
                </Text>
                <View style={{alignSelf: 'flex-end'}}>
                  <Stars starsNumber={images.length} />
                </View>
              </View>
            </View>
          )}
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
        <Text style={{color: 'white'}}>non ci sono risultati</Text>
      )}
    </View>
  );
}
