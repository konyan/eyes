import { render, screen, waitFor } from '@testing-library/react-native';
import SplashScreen from './SplashScreen';
import SplashLogo from '../../../assets/splash.png';
import { Text } from 'react-native-paper';

describe('SplashScreen', () => {
  const setupUI = () => {
    const compo = <Text>HomeScreen</Text>;
    render(<SplashScreen image={SplashLogo}>{compo}</SplashScreen>);
  };

  test('should render SplashScreen Image correctly', async () => {
    setupUI();
    screen.debug();
    const image = screen.getByTestId('SPLASH_IMAGE');
    expect(image).toBeTruthy();
  });
});
