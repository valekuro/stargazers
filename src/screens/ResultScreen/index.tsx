import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import Avatar from '../../components/Avatar';

export default function ResultScreen(route: any) {
  const [data, setData] = useState([]);
  useEffect(() => {
    route.route.params.data && setData(route.route.params.data);
  }, [route]);
  return (
    <View>
      {/* {data &&
        data.map((el: any, key: number) => {
          console.log('ciao  ', el.avatar_url);
          return (
            <FlatList key={key}>
              <Text>ciao</Text>
              <Avatar url={el.avatar_url} />
            </FlatList>
          );
        })} */}
      <FlatList
        data={data}
        renderItem={(pippo: any) => {
          return (
            <View>
              <Text>{pippo.item.login}</Text>
              <Avatar url={pippo.item.avatar_url} />
            </View>
          );
        }}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
}
