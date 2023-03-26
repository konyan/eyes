import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import ChipButton from './ChipButton';

describe('chipButton Component', () => {
  test.todo('should render primary bg correctly ');
  test.todo('should render secondary bg correctly ');
  test('Button onPress function should be called on press', () => {
    const onPressMock = jest.fn();
    const buttonText = 'Test';
    const { getByTestId, getByText } = render(<ChipButton text={buttonText} onPress={onPressMock} />);

    const button = getByTestId('chipButton-test');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();

    const renderedButtonText = getByText(buttonText);
    expect(renderedButtonText).toBeTruthy();
  });
});
