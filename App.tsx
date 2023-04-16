import { config, darkTheme, injectWebCss, lightTheme } from '@core';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '@routes';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { Text, useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeProvider from 'src/context/ThemeContext/ThemeContext';
import SplashLogo from './assets/splash.png';
import { SplashScreen } from './src/screens';

injectWebCss();

export default function App() {
  const prefix = Linking.createURL('/');
  const scheme = Constants?.expoConfig?.scheme;
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <ThemeProvider>
        <SplashScreen image={SplashLogo}>
          <NavigationContainer
            documentTitle={{
              formatter: () => 'MM Baydin',
            }}
            linking={{
              prefixes: [prefix, `${scheme}://`],
              config: config,
            }}
            fallback={<Text>Loading...</Text>}
          >
            <Routes />
          </NavigationContainer>
        </SplashScreen>
      </ThemeProvider>
    </PaperProvider>
  );
}
