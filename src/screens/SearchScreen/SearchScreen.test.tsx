import { render, screen } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import React from 'react';
import SearchScreen from './SearchScreen';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('SearchScreen', () => {
  beforeEach(() => {
    // if you have an existing `beforeEach` just add the following line to it
    fetchMock.doMock();
  });

  const renderUI = () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }));
    return render(<SearchScreen />);
  };

  it('renders the component', () => {
    renderUI();
    expect(screen.getByText('နတ်မျက်စိ ဗေဒင်')).not.toBeNull();
  });
});
