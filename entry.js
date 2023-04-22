import 'expo/build/Expo.fx';
import { Platform } from 'react-native';
import { registerRootComponent } from 'expo';
import { createRoot } from 'react-dom/client';
import App from './App';

if (__DEV__) {
  //do something
}

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root') ?? document.getElementById('main'));
  root.render(<App />);
} else {
  registerRootComponent(App);
}
