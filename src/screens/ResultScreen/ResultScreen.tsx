import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext, useState } from 'react';
import { Linking, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { GradientButton } from 'src/components';
import tw from 'twrnc';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

const ResultScreen = () => {
  const [fbShareURL, setfbShareURL] = useState('https://reactnativecode.com');
  const [content, setContent] = useState('Hello, Welcome To our Website.');
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);

  const publishOnFB = () => {
    const params = [];
    if (fbShareURL) params.push('u=' + encodeURI(fbShareURL));
    if (content) params.push('quote=' + encodeURI(content));
    const url = 'https://www.facebook.com/sharer/sharer.php?' + params.join('&');

    Linking.openURL(url);
  };

  return (
    <SafeAreaView
      style={[
        tw`flex-1 items-center`,
        {
          marginTop: StatusBar.currentHeight,
        },
      ]}
    >
      <View
        style={tw`h-1/6  flex-row items-center
        justify-center  `}
      >
        <Text style={tw`text-2xl font-black p-1 `}>နတ်မျက်စိ ဗေဒင်</Text>
        <TouchableOpacity testID="themeButton" activeOpacity={1} onPress={toggleTheme}>
          {themeValue === 'dark' ? (
            <Fontisto name="day-sunny" testID="day-sunny" size={40} color="#000" />
          ) : (
            <MaterialIcons name="nightlight-round" testID="nightlight" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      <View testID="ques" style={tw`h-1/5 justify-center m-2`}>
        <Text style={tw`text-center text-xl font-extrabold  p-2`}>မကြာမီ အိမ်ပြောင်းရမှာလား။</Text>
      </View>
      <View testID="ans" style={tw`h-1/3 justify-center m-2	`}>
        <Text style={tw`text-center text-2xl font-bold p-2`}>
          သတ္တိရှိဖို့တော့လိုတယ်။ ဒါပေမယ့် ဘယ်နေရာမျိုးမှာမဆိုအကျိုးရှိမယ်။
        </Text>
      </View>
      <GradientButton onPress={publishOnFB} text="မျှဝေမည်" />
    </SafeAreaView>
  );
};

export default ResultScreen;
