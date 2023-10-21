import React from 'react';
import {render, screen} from '@testing-library/react-native';
import CircularCarousel from '../src/components/CircularCarousel';
import {MOCK_USERS_URL} from './mocked/stargazers';

describe('Testing FlatList', () => {
  const setSelectedUser = jest.fn(() => null);

  test('Error component should be render when error is true', () => {
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
