import { render } from '@testing-library/react-native';
import React from 'react';
import LoadingWheelScreen from './LoadingWheelScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
  useRoute: jest.fn(() => ({
    params: {
      result: 'test result',
      question: 'test question',
    },
  })),
}));

describe('LoadingWheelScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<LoadingWheelScreen />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).toBeDefined();
  });

  // it('handles button click', () => {
  // const { getByTestId } = render(<LoadingWheelScreen />);
  //
  // const button = getByTestId('BUTTON');
  // fireEvent.press(button);
  //
  // expect(button).toHaveBeenCalled();
  // });
});
