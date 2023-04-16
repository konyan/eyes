import { auth, saveAnnoUserId } from '@core';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { signInAnonymously } from 'firebase/auth';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Animated } from 'react-native';

type useSplashScreenHookProps = {
  image: { uri: string };
};

const useSplashScreenHook = ({ image }: useSplashScreenHookProps) => {
  const [isSplashReady, setSplashReady] = useState(false);

  const animation = useMemo(() => new Animated.Value(1), []);

  const [isAppReady, setAppReady] = useState(false);

  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    'arce-bold': require('../../../../assets/fonts/acremm-bold.ttf'),
    'arce-thin': require('../../../../assets/fonts/acremm-thin.ttf'),
    'arce-regular': require('../../../../assets/fonts/acremm-regular.ttf'),
  });

  useEffect(() => {
    function prepare() {
      setSplashReady(true);
    }

    prepare();
  }, [image]);

  useEffect(() => {
    if (isAppReady && fontsLoaded) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady, animation, fontsLoaded]);

  const getUser = () => {
    signInAnonymously(auth)
      .then((user) => {
        saveAnnoUserId(user.user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage);
      });
  };

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      getUser();
    } catch (e) {
      // handle or log error
    } finally {
      setAppReady(true);
    }
  }, []);

  return { isSplashReady, onImageLoaded, isAppReady, isSplashAnimationComplete, animation };
};

export default useSplashScreenHook;
