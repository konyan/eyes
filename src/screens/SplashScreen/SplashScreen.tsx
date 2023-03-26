import Constants from 'expo-constants';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import useSplashScreenHook from './hooks/useSplashScreenHook';

interface SplashScreenProps {
  children?: React.ReactNode;
  image: {
    uri: string;
  };
}

const SplashScreen = ({ children, image }: SplashScreenProps) => {
  const { colors } = useTheme();

  const { isSplashReady, onImageLoaded, isAppReady, isSplashAnimationComplete, animation } = useSplashScreenHook({
    image,
  });

  if (!isSplashReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          testID={'SPLASH_SCREEN'}
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: colors.primary,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: Constants.manifest?.splash?.resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            testID="SPLASH_IMAGE"
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default SplashScreen;
