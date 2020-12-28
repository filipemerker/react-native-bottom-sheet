import React from 'react';
import { View } from 'react-native';
import { render, cleanup } from '@testing-library/react-native';

afterEach(cleanup);

describe('View', () => {
  it('renders correctly', () => {
    const { baseElement } = render(<View />);

    expect(baseElement).toMatchSnapshot();
  });
});
