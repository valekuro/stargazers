import Animated from 'react-native-reanimated';

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
  setSelectedUser: React.Dispatch<React.SetStateAction<number>>;
  listItemWidth: number;
}
