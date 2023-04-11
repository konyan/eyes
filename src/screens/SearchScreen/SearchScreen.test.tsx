import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import SearchScreen from './SearchScreen';

describe('SearchScreen', () => {
  it('renders the component', () => {
    const { getByText } = render(<SearchScreen />);
    expect(getByText('နတ်မျက်စိ ဗေဒင်')).not.toBeNull();
  });

  it('updates search text on input change', () => {
    const { getByPlaceholderText } = render(<SearchScreen />);
    const searchInput = getByPlaceholderText('ရှာရန်...');

    fireEvent.changeText(searchInput, 'test');

    expect(searchInput.props.value).toBe('test');
  });
});
