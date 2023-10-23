import {useEffect, useState} from 'react';
import {IUserRepository} from '../../interfaces/IApi';
import {IDataForm} from '../../interfaces/IDataForm';
import {getStargazers, getUserRepository} from '../../api/api';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParamList';
import {AxiosError} from 'axios';
import {UseFormWatch} from 'react-hook-form/dist/types/form';
import messageError from '../../utils/error';
/**
 * this personalized hook manage SearchScreen logic
 * @params watch
 * @returns
 */
export default function useSearchScreen(watch: UseFormWatch<IDataForm>) {
  const [starredRepoFromUser, setStarredRepoFromUser] = useState<
    IUserRepository[]
  >([]);
  const [networkError, setNetworkError] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  //this function manage onSubmit form
  const onSubmit = async (data: IDataForm) => {
    getStargazers(data)
      .then(el =>
        navigation.navigate('ResultScreen', {
          data: el,
          dataSearch: data,
        }),
      )
      .catch((error: AxiosError) => {
        const message = messageError(error);
        setNetworkError(message || '');
      });
  };

  //this function allow to have all repository of a specific user
  const repositoryFromUser = (username: string) => {
    if (username.length > 0) {
      getUserRepository(username)
        .then(repository => {
          setNetworkError('');
          setStarredRepoFromUser(repository);
        })
        .catch((error: AxiosError) => {
          const message = messageError(error);
          setNetworkError(message || '');
          setStarredRepoFromUser([]);
        });
    }
  };

  //this useEffect help to manage dropdown repository
  useEffect(() => {
    if (watch('username') && watch('username').length > 0) {
      repositoryFromUser(watch('username') || '');
    }
    if (watch('username')?.length === 0) {
      setStarredRepoFromUser([]);
    }
  }, [watch('username')]);

  return {
    onSubmit,
    starredRepoFromUser,
    networkError,
  };
}
