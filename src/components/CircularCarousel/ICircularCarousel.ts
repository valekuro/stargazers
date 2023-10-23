import Animated from 'react-native-reanimated';

/**
 * Card interface
 */
export interface ICard {
  title?: string;
  avatar?: string;
  description?: string;
}

/**
 * CircolarCarouselListItem interface
 */
export interface ICircolarCarouselListItem {
  src: string;
  index: number;
  contentOffset: Animated.SharedValue<number>;
  setSelectedUser: any;
}

/**
 * CircularCarousel interface
 */
export interface ICircularCarousel {
  data: string[];
  setSelectedUser: React.Dispatch<React.SetStateAction<number>>;
  listItemWidth: number;
}
