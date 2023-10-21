import React from 'react';
import {render} from '@testing-library/react-native';
import Card from '../src/components/CircularCarousel/Card';

describe('Testing Card', () => {
  const title = 'Mario Rossi';
  const avatar =
    'https://play.google.com/store/apps/details?id=com.github.android&hl=it';
  const description = 'Lorem ipsum dolor sit amet';
  test('it should render EmptySection', () => {
    const card_ = render(
      <Card title={title} avatar={avatar} description={description} />,
    );
    expect(card_.queryByTestId('card-section')).toBeDefined();
  });
});
