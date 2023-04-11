import { fireEvent, render, screen } from '@testing-library/react-native';
import GradientButton from './GradientButton';

const mockPress = jest.fn();

const buttonText = 'Gradient Button';

describe('button unit testing', () => {
  const setupUI = () => {
    render(<GradientButton onPress={mockPress} text={buttonText} />);
  };

  test('should render text value correctly', () => {
    setupUI();
    const btnText = screen.getByText(buttonText);
    expect(btnText).toBeTruthy();
  });
  test('should call onPress when button is pressed', () => {
    setupUI();
    const btn = screen.getByTestId('BUTTON');
    fireEvent.press(btn);
    expect(mockPress).toHaveBeenCalled();
  });
});
