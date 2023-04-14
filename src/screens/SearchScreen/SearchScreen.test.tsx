import { fireEvent, render } from '@testing-library/react-native';
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
  it('renders the component', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }));
    const { getByText } = render(<SearchScreen />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).not.toBeNull();
  });

  it('updates search text on input change', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }));
    const { getByPlaceholderText } = render(<SearchScreen />);
    const searchInput = getByPlaceholderText('ရှာရန်...');

    fireEvent.changeText(searchInput, 'test');

    expect(searchInput.props.value).toBe('test');
  });
});
