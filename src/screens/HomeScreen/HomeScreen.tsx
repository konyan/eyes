import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '@routes';
import React, { useContext, useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ChipButton, GradientButton } from 'src/components';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';

const chipData = ['ကျန်းမာရေး', 'စီးပွားရေး', 'လူမှုရေး', 'အချစ်ရေး', 'အိမ်ထောင်ရေး'];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState<string[]>([]);

  const handleChipSelect = (chip: string) => {
    if (selected.includes(chip)) {
      setSelected(selected.filter((c) => c !== chip));
    } else {
      setSelected([...selected, chip]);
    }
  };
  const goToList = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={tw`flex-1  pt-[${StatusBar.currentHeight}]`}>
      <View style={tw`h-1/6 items-end`}>
        <TouchableOpacity activeOpacity={1} onPress={toggleTheme} style={tw`m-6 pr-4`}>
          {themeValue === 'dark' ? (
            <Fontisto name="day-sunny" size={40} color="#000" />
          ) : (
            <MaterialIcons name="nightlight-round" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      <View style={tw`h-1/6 items-center`}>
        <Text style={tw`text-3xl font-bold p-1`}>နတ်မျက်စိ ဗေဒင်</Text>
      </View>
      <View style={tw` justify-center items-center h-1/3`}>
        <View style={tw`flex-row flex-wrap justify-center items-center`}>
          {chipData.map((chip, index) => (
            <ChipButton
              onPress={() => handleChipSelect(chip)}
              selected={selected.includes(chip)}
              key={index}
              text={chip}
            />
          ))}
        </View>
      </View>
      <View style={tw`items-center `}>
        <GradientButton onPress={goToList} text="ဗေဒင်မေးမည်" />
      </View>
    </View>
  );
};

export default HomeScreen;
