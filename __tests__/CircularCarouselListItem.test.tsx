import React from 'react';
import {render} from '@testing-library/react-native';
import CircularCarouselListItem from '../src/components/CircularCarousel/CircularCarouselListItem';
import {useSharedValue} from 'react-native-reanimated';

describe('Testing CircularCarouselListItem', () => {
  const src =
    'https://play.google.com/store/apps/details?id=com.github.android&hl=it';
  const index = 1;
  const setSelectedUser = jest.fn(() => null);
  const contentOffset = useSharedValue(0);

  test('it should render EmptySection', () => {
    const card_ = render(
      <CircularCarouselListItem
        src={src}
        index={index}
        contentOffset={contentOffset}
        setSelectedUser={setSelectedUser}
      />,
    );
    expect(card_.queryByTestId('listitem')).toBeDefined();
  });
});
