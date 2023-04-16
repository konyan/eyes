import { configureFonts, DefaultTheme } from 'react-native-paper';
import { fontConfig } from './font';

const lightTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    black: '#000',
    white: '#fff',
    gold: '#907F47',
    primary: '#000',
    bg_primary: '#fff',
  },
  fonts: configureFonts({ config: fontConfig }),
};

const darkTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    black: '#000',
    white: '#fff',
    gold: '#907F47',
    primary: '#fff',
    bg_primary: '#0E1011',
  },
  fonts: configureFonts({ config: fontConfig }),
};

export { lightTheme, darkTheme };
