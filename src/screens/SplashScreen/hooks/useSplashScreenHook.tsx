import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated } from 'react-native';

type useSplashScreenHookProps = {
  image: { uri: string };
};

const useSplashScreenHook = ({ image }: useSplashScreenHookProps) => {
  const [isSplashReady, setSplashReady] = useState(false);

  const animation = useMemo(() => new Animated.Value(1), []);

  const [isAppReady, setAppReady] = useState(false);

  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    'Arce-Thin': require('../../../../assets/fonts/acre-mm.otf'),
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

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      await Promise.all([]);
    } catch (e) {
      // handle or log error
    } finally {
      setAppReady(true);
    }
  }, []);

  return { isSplashReady, onImageLoaded, isAppReady, isSplashAnimationComplete, animation };
};

export default useSplashScreenHook;
