import { Icons } from '@core';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChipText, GradientButton } from 'src/components';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';

const categories = ['အိမ်ထောင်ရေး', 'စီးပွားရေး', 'ကျန်းမာရေး', 'လူမှုရေး', 'အချစ်ရေး', 'အခြား'];

const HomeScreen = ({ navigation }) => {
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState<string[]>([]);
  const { colors } = useTheme();

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
    <SafeAreaView style={[tw`flex-1 `, { backgroundColor: colors.bg_primary }]}>
      <StatusBar style="auto" backgroundColor={colors.bg_primary} />
      <View style={tw`h-1/6 items-end`}>
        <TouchableOpacity testID="theme-icon" activeOpacity={1} onPress={toggleTheme} style={tw`m-6 pr-4`}>
          {themeValue === 'dark' ? (
            <Icons name="moon" size={24} color={colors.primary} />
          ) : (
            <Icons name="sun" size={24} color={colors.primary} />
          )}
        </TouchableOpacity>
      </View>
      <View style={tw`items-center`}>
        <Text variant="bodyLarge" style={[tw`text-2xl p-2`, { color: colors.primary }]}>
          နတ်မျက်စိ ဗေဒင်
        </Text>
      </View>
      <View style={tw` justify-center items-center h-1/3`}>
        <View style={tw`flex-row flex-wrap justify-center items-center`}>
          {categories.map((category, index) => (
            <ChipText key={index} text={category} />
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
