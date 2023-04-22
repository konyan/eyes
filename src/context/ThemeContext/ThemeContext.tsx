import { darkTheme, lightTheme } from '@core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

type ThemeContextProps = {
  themeValue: string | null;
  toggleTheme: () => void;
  getTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  themeValue: 'light',
  toggleTheme: () => {
    console.warn('toggleTheme function is not implemented');
  },
  getTheme: () => {
    console.warn('getTheme function is not implemented');
  },
});

const save = async (value: string) => {
  try {
    await AsyncStorage.setItem('Theme', value);
    return true;
  } catch (error) {
    return false;
  }
};

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeValue, setThemeValue] = useState<string>('light');

  useEffect(() => {
    const retrieveTheme = async () => {
      const storedValue = await AsyncStorage.getItem('Theme');
      if (storedValue != null) {
        setThemeValue(storedValue);
      }
    };

    retrieveTheme();
  }, []);

  const setTheme = useCallback(async (theme: string) => {
    save(theme);
    setThemeValue(theme);
  }, []);

  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('Theme');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  };

  const toggleTheme = () => {
    const newTheme = themeValue === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeValue, toggleTheme, getTheme }}>
      <PaperProvider theme={themeValue === 'dark' ? darkTheme : lightTheme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
