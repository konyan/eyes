import { useNavigation, useRoute } from '@react-navigation/native';
import { LoadingWheelScreenNavigationProps, LoadingWheelScreenRouteProp } from '@routes';
import React, { useMemo, useState } from 'react';
import { Animated, Image, ImageProps, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { GradientButton, HeaderSection } from 'src/components';
import tw from 'twrnc';

interface MyImageProps extends Omit<ImageProps, 'source'> {
  source: number | { uri: string };
}

const LoadingWheelScreen = () => {
  const [angle, setAngle] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  // const opacity = useState(new Animated.Value(1))[0];
  const opacity = useMemo(() => new Animated.Value(1), []);
  const scale = useMemo(() => new Animated.Value(1), []);
  const { colors } = useTheme();
  const route = useRoute<LoadingWheelScreenRouteProp>();
  const { result, question } = route.params;

  const injectWebStyles = Platform.OS === 'web' ? 'w-full h-1/2' : 'w-full h-1/2';

  const navigation = useNavigation<LoadingWheelScreenNavigationProps>();

  const rotate = (value: number) => {
    setAngle(value);
  };

  const handleClick = () => {
    startAnimation();
    setIsClicked(true);
    Animated.parallel([
      Animated.timing(scale, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsClicked(false);
      scale.setValue(1);
      opacity.setValue(1);
      navigation.navigate('ResultScreen', { result, question });
    });
  };

  const startAnimation = () => {
    const duration = 2;
    const fps = 60;
    const frames = duration * fps;
    const anglePerFrame = 720 / frames;

    let currentFrame = 0;
    let angleAnimate = 0;

    const animation = setInterval(() => {
      angleAnimate += anglePerFrame;

      rotate(angleAnimate);
      currentFrame++;
      if (currentFrame === frames) {
        clearInterval(animation);
      }
    }, 1000 / fps);
  };

  return (
    <SafeAreaView
      style={[
        tw`flex-1`,
        {
          marginTop: StatusBar.currentHeight,
          backgroundColor: colors.bg_primary,
        },
      ]}
    >
      <HeaderSection />
      <View style={tw`flex-1 items-center`}>
        <Image
          source={require('../../../assets/splash.png')}
          resizeMode="contain"
          style={[tw`${injectWebStyles}`, { transform: [{ rotate: `${angle}deg` }] }]}
        />
        <Text variant="bodyMedium" style={[tw`text-xl  my-10 py-1`, { color: colors.primary }]}>
          ယုံကြည်စွာဖြင့်ဆုတောင်းရန် နှိပ်ပါ
        </Text>
        {isClicked ? (
          <Animated.View style={{ transform: [{ scale }], opacity }}>
            <GradientButton onPress={handleClick} text="ဗေဒင်မေးမည်" />
          </Animated.View>
        ) : (
          <GradientButton onPress={handleClick} text="ဗေဒင်မေးမည်" />
        )}
      </View>
    </SafeAreaView>
  );
};

export default LoadingWheelScreen;
