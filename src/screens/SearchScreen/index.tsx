import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, SafeAreaView, Text, ScrollView} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {IDataForm} from '../../Interfaces/IDataForm';
import Input from '../../components/Input';
import useValidationForm from './useValidationForm';
import useSearchScreen from './useSearchScreen';

export default function SearchScreen(): JSX.Element {
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
    <SafeAreaView>
      <Input
        name="username"
        control={control}
        placeholder="Insert username"
        onChange={() => userData()}
      />
      <Text>{errors.username?.message}</Text>
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
        placeholder="Insert project name"
      />
      <Text>{errors.repository?.message}</Text>
      {watch('repository') && (
        <ScrollView>
          {starredRepoFromUser.map(el => (
            <Text key={el.id}>{el.name}</Text>
          ))}
        </ScrollView>
      )}

      <Button title="submit" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
