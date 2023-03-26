import { configureFonts, DefaultTheme } from 'react-native-paper';
import { fontConfig } from './font';

export const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFE757',
    gray: '#808080',
    primary_black: '#000000',
    primary_black_300: '#494949',
    primary_white: '#FFFFFF',
    primary_yellow: '#FFE757',
    secondary_cosmos: '#8D7DFF',
    secondary_cosmos_tint: '#D8DDFD',
    secondary_cosmos_tint_300: '#B3B9DF',
    secondary_fuschia: '#FF94FF',
    secondary_fuschia_tint: '#F3CFF3',
    secondary_ember: '#FF7545',
    secondary_ember_tint: '#FFCBAB',
    black: '#000',
    bg_primary: '#F9F3DB',
    bg_primary_300: '#D9D1B1',
    gray_300: '#EDEDED',
    gray_400: '#6E6E6E',
    secondary_gray: '#767676',
  },
  fonts: configureFonts({ config: fontConfig }),
};

export default theme;
