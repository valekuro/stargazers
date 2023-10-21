import React from 'react';
import {render} from '@testing-library/react-native';
import EmptySection from '../src/components/EmptySection';

describe('EmptySection component', () => {
  test('it should render EmptySection', () => {
    const empty_ = render(<EmptySection />);
    expect(empty_.queryByTestId('empty-section')).toBeDefined();
  });
});
