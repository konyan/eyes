import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { Linking } from 'react-native';
import ResultScreen from './ResultScreen';

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

describe('ResultScreen', () => {
  const setupUI = () => render(<ResultScreen />);

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<ResultScreen />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).toBeDefined();
    expect(getByTestId('ans')).toBeDefined();
    expect(getByTestId('ques')).toBeDefined();
  });

  it('calls FBshareBttn function on button press', () => {
    setupUI();
    Linking.openURL = jest.fn();

    const btn = screen.getByTestId('BUTTON');
    fireEvent.press(btn);
    expect(Linking.openURL).toHaveBeenCalled();
  });
});
