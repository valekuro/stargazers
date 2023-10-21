import React from 'react';
import {render} from '@testing-library/react-native';
import Avatar from '../src/components/Avatar';

describe('Avatar component', () => {
  test('it should be renders the avatar image correctly', () => {
    const url =
      'https://play.google.com/store/apps/details?id=com.github.android&hl=it';
    const avatar_ = render(<Avatar url={url} size={100} />);
    expect(avatar_.queryByTestId('avatar')).toBeDefined();
  });
});
