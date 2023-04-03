import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useContext, useState } from 'react';
import { Animated, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';

const SpinningWheel = () => {
  const [angle, setAngle] = useState(0);
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const [isClicked, setIsClicked] = useState(false);
  const opacity = useState(new Animated.Value(1))[0];

  const rotate = (value) => {
    setAngle(value);
  };

  const handleClick = () => {
    setIsClicked(true);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        setIsClicked(false);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 2000);
    });
  };

  const startAnimation = () => {
    const duration = 2; // in seconds
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
    <SafeAreaView style={[tw`flex-1 justify-center items-center`, { marginTop: StatusBar.currentHeight }]}>
      <View style={tw`h-1/6  flex-row items-center justify-center `}>
        <Text style={tw`text-2xl font-bold p-1 `}>နတ်မျက်စိ ဗေဒင်</Text>
        <TouchableOpacity activeOpacity={1} onPress={toggleTheme}>
          {themeValue === 'dark' ? (
            <Fontisto name="day-sunny" size={40} color="#000" />
          ) : (
            <MaterialIcons name="nightlight-round" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../../assets/splash.png')}
        style={{ width: 400, height: 400, transform: [{ rotate: `${angle}deg` }] }}
      />
      <Text>ယုံကြည်စွာဖြင့်ဆုတောင်းရန် နှိပ်ပါ</Text>
      <TouchableOpacity onPress={startAnimation}>
        <Text>Spin the Wheel!</Text>
      </TouchableOpacity>
      <View>
        {isClicked ? (
          <Animated.View style={{ opacity }}>
            <TouchableOpacity style={{ backgroundColor: 'blue', padding: 20 }} disabled={true}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Clicked!</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <TouchableOpacity onPress={handleClick} style={{ backgroundColor: 'blue', padding: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Click Me!</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SpinningWheel;
