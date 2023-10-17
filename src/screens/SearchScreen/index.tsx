import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {IDataForm} from '../../Interfaces/IDataForm';
import Input from '../../components/Input';
import useValidationForm from './useValidationForm';
import useSearchScreen from './useSearchScreen';
import ErrorMessage from '../../components/ErrorMessage';
import Button from '../../components/Button';

export default function SearchScreen(): JSX.Element {
  const [focusedUsername, setFocusedUsername] = useState<boolean>(false);
  const [focusedRepository, setFocusedRepository] = useState<boolean>(false);

  const {validationSchema} = useValidationForm();
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm<IDataForm>({
    resolver: yupResolver(validationSchema),
  });
  const {allUsers, onSubmit, userData, starredRepoFromUser} =
    useSearchScreen(watch);

  return (
    <SafeAreaView style={searchContainerStyle.container}>
      <View>
        <Image
          source={require('../../../assets/images/githubstar.jpg')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 180, height: 180, alignSelf: 'center'}}
        />
        <Input
          name="username"
          control={control}
          placeholder="Insert username *"
          onChange={() => userData()}
          onFocus={() => setFocusedUsername(true)}
          onBlur={() => setFocusedUsername(false)}
          focused={focusedUsername}
        />
        <ErrorMessage error={errors.username?.message} />
        {watch('username') && (
          <ScrollView>
            {allUsers.map(el => (
              <Text key={el.id}>{el.login}</Text>
            ))}
          </ScrollView>
        )}

        <Input
          name="repository"
          control={control}
          placeholder="Insert project name *"
          onFocus={() => setFocusedRepository(true)}
          onBlur={() => setFocusedRepository(false)}
          focused={focusedRepository}
        />
        <ErrorMessage error={errors.repository?.message} />
        {watch('repository') && (
          <ScrollView>
            {starredRepoFromUser.map(el => (
              <Text key={el.id}>{el.name}</Text>
            ))}
          </ScrollView>
        )}
      </View>
      <Button label="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}

const searchContainerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
    backgroundColor:
      ' linear-gradient(180deg, rgba(0,0,0,1) 48%, rgba(255,255,255,0.8577556022408963) 84%)',
  },
  image: {
    width: 100,
  },
});
