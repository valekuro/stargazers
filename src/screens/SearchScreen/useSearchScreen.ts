import {useState, useCallback} from 'react';
import {IUser, IUserRepository} from '../../Interfaces/IApi';
import {IDataForm} from '../../Interfaces/IDataForm';
import {
  getByUserAndProject,
  getAllUsers,
  getStarredByUser,
} from '../../api/api';
import {UseFormWatch} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStackParamList';
import {StackNavigationProp} from '@react-navigation/stack';

export default function useSearchScreen(watch: UseFormWatch<IDataForm>) {
  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [starredRepoFromUser, setStarredRepoFromUser] = useState<
    IUserRepository[]
  >([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const onSubmit = async (data: IDataForm) => {
    //@ts-ignore
    getByUserAndProject(data).then(el =>
      navigation.navigate('ResultScreen', {
        data: el,
      }),
    );
  };

  const userData = useCallback(() => {
    getAllUsers().then(el =>
      setAllUsers(
        el.filter((option: IUser) =>
          option.login.startsWith(watch('username') || ''),
        ),
      ),
    );
  }, [watch]);

  const starredProject = useCallback(
    (username: string) => {
      getStarredByUser(username).then(el =>
        setStarredRepoFromUser(
          el.filter((option: IUser) =>
            option.login.startsWith(watch('repository') || ''),
          ),
        ),
      );
    },
    [watch],
  );
  return {
    allUsers,
    onSubmit,
    userData,
    starredProject,
    starredRepoFromUser,
  };
}
