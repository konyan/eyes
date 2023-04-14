import { render } from '@testing-library/react-native';
import React from 'react';
import LoadingWheelScreen from './LoadingWheelScreen';

describe('LoadingWheelScreen', () => {
  const navigation = jest.fn();
  it('renders correctly', () => {
    const { getByText } = render(<LoadingWheelScreen navigation={navigation} />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).toBeDefined();
  });

  // it('handles button click', () => {
  // // const { getByTestId } = render(<LoadingWheelScreen navigation={navigation} />);

  // const button = getByTestId('BUTTON');
  // fireEvent.press(button);

  // expect(button).toHaveBeenCalledWith('ResultScreen');
  // });
});
