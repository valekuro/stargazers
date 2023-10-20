import Animated from 'react-native-reanimated';
import {IDataForm} from '../../interfaces/IDataForm';

export interface ICard {
  title?: string;
  avatar?: string;
  description?: string;
}

export interface ICircolarCarouselListItem {
  src: string;
  index: number;
  contentOffset: Animated.SharedValue<number>;
  setSelectedUser: any;
}

export interface ICircularCarousel {
  data: string[];
  usersInformation: any;
  dataSearch: IDataForm;
}
