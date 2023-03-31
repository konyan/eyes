import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChipButton, GradientButton } from 'src/components';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';

const chipData = ['ကျန်းမာရေး', 'စီးပွားရေး', 'လူမှုရေး', 'အချစ်ရေး', 'အိမ်ထောင်ရေး'];

const HomeScreen = ({ navigation }) => {
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
    <SafeAreaView style={tw`flex-1 `}>
      <View style={tw`h-1/6 items-end`}>
        <TouchableOpacity testID="theme-icon" activeOpacity={1} onPress={toggleTheme} style={tw`m-6 pr-4`}>
          {themeValue === 'dark' ? (
            <Fontisto testID="hee" name="day-sunny" size={40} color="#000" />
          ) : (
            <MaterialIcons testID="hee" name="nightlight-round" size={40} color="#000" />
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
    </SafeAreaView>
  );
};

export default HomeScreen;
