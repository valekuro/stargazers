import {useEffect, useState} from 'react';
import {getInformationsByUsername} from '../../api/api';
import {IOwner, IUserInformations} from '../../interfaces/IApi';
import {IRouteResultScreen} from '../../types/RootStackParamList';
import messageError from '../../utils/error';

export default function useResultScreen(route: IRouteResultScreen) {
  const [images, setImages] = useState<string[]>([]);
  const [userInfo, setUserInfo] = useState<IUserInformations>();
  const [networkError, setNetworkError] = useState<string>('');
  useEffect(() => {
    route.data && setImages(route.data.map((o: IOwner) => o.avatar_url));
    route.dataSearch.username &&
      getInformationsByUsername(route.dataSearch.username)
        .then(repository => {
          setNetworkError('');
          setUserInfo(repository);
        })
        .catch(error => {
          const message = messageError(error);
          setNetworkError(message || '');
        });
  }, [route]);

  return {
    images,
    userInfo,
    networkError,
  };
}
