import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useMemo, useState } from 'react';
import { Animated, Image, Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { GradientButton } from 'src/components';
import tw from 'twrnc';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

const SpinningWheel = () => {
  const [angle, setAngle] = useState(0);
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const [isClicked, setIsClicked] = useState(false);
  // const opacity = useState(new Animated.Value(1))[0];
  const opacity = useMemo(() => new Animated.Value(1), []);
  const scale = useMemo(() => new Animated.Value(1), []);

  const injectWebStyles = Platform.OS === 'web' ? 'w-full h-1/2' : 'w-full h-1/2';

  const navigation = useNavigation();

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
      navigation.navigate('ResultScreen');
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
    <SafeAreaView style={[tw`flex-1 items-center`, { marginTop: StatusBar.currentHeight }]}>
      <View style={tw`h-1/6  flex-row items-center justify-center `}>
        <Text style={tw`text-2xl font-bold p-1 `}>နတ်မျက်စိ ဗေဒင်</Text>
        <TouchableOpacity testID="themeButton" activeOpacity={1} onPress={toggleTheme}>
          {themeValue === 'dark' ? (
            <Fontisto name="day-sunny" testID="day-sunny" size={40} color="#000" />
          ) : (
            <MaterialIcons name="nightlight-round" testID="nightlight" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../../assets/splash.png')}
        resizeMode="contain"
        style={[tw`${injectWebStyles}`, { transform: [{ rotate: `${angle}deg` }] }]}
      />
      <Text style={tw`text-xl font-black tracking-widest my-10`}>ယုံကြည်စွာဖြင့်ဆုတောင်းရန် နှိပ်ပါ</Text>
      {isClicked ? (
        <Animated.View style={{ transform: [{ scale }], opacity }}>
          <GradientButton onPress={handleClick} text="ဗေဒင်မေးမည်" />
        </Animated.View>
      ) : (
        <GradientButton onPress={handleClick} text="ဗေဒင်မေးမည်" />
      )}
    </SafeAreaView>
  );
};

export default SpinningWheel;
