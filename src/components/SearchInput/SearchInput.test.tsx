import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('should render correctly with placeholder', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchInput handleChange={onChangeText} value="" handleClear={handleClear} />,
    );

    const input = getByPlaceholderText('ရှာရန်...');

    expect(input).toBeDefined();
  });

  test('should update input value when text is typed', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchInput handleChange={onChangeText} value="" handleClear={handleClear} />,
    );

    const input = getByPlaceholderText('ရှာရန်...');

    fireEvent.changeText(input, 'Test input');

    expect(onChangeText).toHaveBeenCalledWith('Test input');
  });

  test('should render clear button when input has value', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();

    const { getByTestId } = render(
      <SearchInput handleChange={onChangeText} value="Test input" handleClear={handleClear} />,
    );

    const clearButton = getByTestId('clear-button');

    expect(clearButton).toBeDefined();
  });

  test('should call handleClear function when clear button is pressed', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();

    const { getByTestId } = render(
      <SearchInput handleChange={onChangeText} value="Test input" handleClear={handleClear} />,
    );

    const clearButton = getByTestId('clear-button');

    fireEvent.press(clearButton);

    expect(handleClear).toHaveBeenCalled();
  });
});
