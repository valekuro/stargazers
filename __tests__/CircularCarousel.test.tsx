import React from 'react';
import {render, screen} from '@testing-library/react-native';
import CircularCarousel from '../src/components/CircularCarousel';

const MOCK_USERS_URL = [
  'https://avatars.githubusercontent.com/u/3431383?v=4',
  'https://avatars.githubusercontent.com/u/846478?v=4',
  'https://avatars.githubusercontent.com/u/597158?v=4',
  'https://avatars.githubusercontent.com/u/64315?v=4',
  'https://avatars.githubusercontent.com/u/510355?v=4',
  'https://avatars.githubusercontent.com/u/157786?v=4',
  'https://avatars.githubusercontent.com/u/5820?v=4',
  'https://avatars.githubusercontent.com/u/506899?v=4',
  'https://avatars.githubusercontent.com/u/4156213?v=4',
  'https://avatars.githubusercontent.com/u/1480063?v=4',
  'https://avatars.githubusercontent.com/u/1294053?v=4',
  'https://avatars.githubusercontent.com/u/645637?v=4',
];

describe('Testing FlatList', () => {
  const setSelectedUser = jest.fn(() => null);

  test('it should shows the carousel items', () => {
    render(
      <CircularCarousel
        data={MOCK_USERS_URL}
        setSelectedUser={setSelectedUser}
        listItemWidth={200}
      />,
    );
    expect(screen.getByTestId('listitem')).toBeDefined();
  });
});
