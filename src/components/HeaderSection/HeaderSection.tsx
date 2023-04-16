import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';

const HeaderSection = () => {
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const { colors } = useTheme();
  return (
    <View style={tw`h-1/6 justify-center`} testID="headerSection-test">
      <View style={tw`px-10 flex-row items-center justify-between`}>
        <View style={tw`items-start flex-1`}></View>
        <View style={tw`items-center`}>
          <Text style={[tw`text-2xl font-bold p-1 items-center flex-1`, { color: colors.primary }]} variant="bodyLarge">
            နတ်မျက်စိ ဗေဒင်
          </Text>
        </View>
        <View style={tw`items-end	flex-1`}>
          <TouchableOpacity testID="toggleTheme-button" style={tw`items-end`} activeOpacity={0.5} onPress={toggleTheme}>
            {themeValue === 'dark' ? (
              <Fontisto name="day-sunny" size={40} color={colors.primary} />
            ) : (
              <MaterialIcons name="nightlight-round" size={40} color={colors.primary} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderSection;
