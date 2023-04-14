import { render } from '@testing-library/react-native';
import React from 'react';
import LoadingWheelScreen from './LoadingWheelScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('LoadingWheelScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LoadingWheelScreen />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).toBeDefined();
  });

  // it('handles button click', () => {
  // // const { getByTestId } = render(<LoadingWheelScreen navigation={navigation} />);

  // const button = getByTestId('BUTTON');
  // fireEvent.press(button);

  // expect(button).toHaveBeenCalledWith('ResultScreen');
  // });
});
