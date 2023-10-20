import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  SafeAreaView,
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {IDataForm} from '../../interfaces/IDataForm';
import Input from '../../components/Input';
import useValidationForm from './useValidationForm';
import useSearchScreen from './useSearchScreen';
import ErrorMessage from '../../components/ErrorMessage';
import Button from '../../components/Button';
/**
 * SearchScreen component is the first screen with the form for the search.
 * @returns
 */
export default function SearchScreen(): JSX.Element {
  const [focusedUsername, setFocusedUsername] = useState<boolean>(false);
  const [focusedRepository, setFocusedRepository] = useState<boolean>(false);
  //yup validation
  const {validationSchema} = useValidationForm();
  //react-hook-form
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
  } = useForm<IDataForm>({
    resolver: yupResolver(validationSchema),
  });
  const {
    onSubmit,
    starredRepoFromUser,
    networkError,
    repositoryFromUser,
    openRepoList,
    setOpenRepoList,
  } = useSearchScreen();
  return (
    <SafeAreaView style={searchContainerStyle.container}>
      <View>
        <Image
          source={require('../../../assets/images/githubstar.jpg')}
          style={searchContainerStyle.logo}
        />
        <ErrorMessage error={networkError} />
        <Input
          name="username"
          control={control}
          placeholder="Insert username *"
          onFocus={() => setFocusedUsername(true)}
          onBlur={() => setFocusedUsername(false)}
          focused={focusedUsername}
        />
        <ErrorMessage error={errors.username?.message} />

        <Input
          name="repository"
          control={control}
          placeholder="Insert project name *"
          onChange={() => repositoryFromUser(getValues('username') || '')}
          onFocus={() => setFocusedRepository(true)}
          onBlur={() => setFocusedRepository(false)}
          focused={focusedRepository}
          disabled={false}
        />
        <ErrorMessage error={errors.repository?.message} />
        {openRepoList && (
          <ScrollView style={{backgroundColor: 'white'}}>
            {starredRepoFromUser.map(el => (
              <TouchableOpacity
                onPress={() => {
                  setValue('repository', el.name);
                  setOpenRepoList(false);
                }}
                key={el.id}>
                <Text key={el.id}>{el.name}</Text>
              </TouchableOpacity>
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
  logo: {width: 180, height: 180, alignSelf: 'center'},
});
