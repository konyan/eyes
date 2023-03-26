import { screen, render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

const mockPress = jest.fn();

const buttonText = 'HELLO WORLD';

describe('button unit testing', () => {
  const setupUI = () => {
    render(<Button onPress={mockPress} text={buttonText} />);
  };

  test('should render text value correctly', () => {
    setupUI();
    const btnText = screen.getByText(buttonText);
    expect(btnText).toBeTruthy();
  });
  test.todo('should render primary bg correctly ');
  test.todo('should render secondary bg correctly ');
  test('should call onPress when button is pressed', () => {
    setupUI();
    const btn = screen.getByTestId('BUTTON');
    fireEvent.press(btn);
    expect(mockPress).toHaveBeenCalled();
  });
});
