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
        <View style={carouselStyle(listItemWidth).container}>
          {userInfo && (
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Avatar url={userInfo?.avatar_url} size={40} />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}>
                <Text style={{color: 'white'}}>{userInfo?.name}</Text>
                <Text style={{color: 'white'}}>{userInfo?.company}</Text>
              </View>
            </View>
          )}
          <Stars starsNumber={images.length} />
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
