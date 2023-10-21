import {useState} from 'react';
import {IUserRepository} from '../../interfaces/IApi';
import {IDataForm} from '../../interfaces/IDataForm';
import {getStargazers, getUserRepository} from '../../api/api';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParamList';
/**
 * this personalized hook manage all SearchScreen logic
 * @returns
 */
export default function useSearchScreen() {
  const [starredRepoFromUser, setStarredRepoFromUser] = useState<
    IUserRepository[]
  >([]);
  const [openRepoList, setOpenRepoList] = useState<boolean>(false);
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
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          error.response.status === 404
            ? setNetworkError(
                'User or repository not exists. Try with other data.',
              )
            : setNetworkError(
                `Something went wrong: ${error.response.status} - ${error.response.data.message}`,
              );
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          setNetworkError('Something went wrong: try later!');
        } else {
          // Something happened in setting up the request that triggered an Error
          setNetworkError(`Something went wrong: ${error.message}`);
        }
      });
  };

  const repositoryFromUser = (username: string) => {
    getUserRepository(username)
      .then(repository => {
        setStarredRepoFromUser(repository);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          error.response.status === 404
            ? setNetworkError(
                "User not exists or there isn't a repository available",
              )
            : setNetworkError(
                `Something went wrong: ${error.response.status} - ${error.response.data.message}`,
              );
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          setNetworkError('Something went wrong: try later!');
        } else {
          // Something happened in setting up the request that triggered an Error
          setNetworkError(`Something went wrong: ${error.message}`);
        }
      });
  };

  return {
    onSubmit,
    starredRepoFromUser,
    networkError,
    repositoryFromUser,
    openRepoList,
    setOpenRepoList,
    setNetworkError,
  };
}
