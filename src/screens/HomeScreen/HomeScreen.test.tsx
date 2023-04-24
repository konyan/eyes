import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
  const mockNavigate = jest.fn();
  it('should render the component', () => {
    const { getByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).toBeDefined();
  });

  it('should navigate to SearchScreen when button is pressed', () => {
    const { getByText } = render(<HomeScreen navigation={{ navigate: mockNavigate }} />);
    const button = getByText('ဗေဒင်မေးမည်');

    fireEvent.press(button);

    expect(mockNavigate).toHaveBeenCalledWith('SearchScreen');
  });
});
