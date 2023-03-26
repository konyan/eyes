import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes';
import { Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashLogo from './assets/splash.png';
import { SplashScreen } from './src/screens';

export default function App() {
  return (
    <PaperProvider>
      <SplashScreen image={SplashLogo}>
        <NavigationContainer
          documentTitle={{
            formatter: () => 'MM Baydin',
          }}
          fallback={<Text>Loading...</Text>}
        >
          <Routes />
        </NavigationContainer>
      </SplashScreen>
    </PaperProvider>
  );
}
