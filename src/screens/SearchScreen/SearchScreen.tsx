import { SearchInput } from '@components';
import { Icons } from '@core';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';
import useSearchHook from './hook/useSearchHook';

const ListItem = ({ title, goToLoading }: { title: string; goToLoading: () => void }) => (
  <TouchableOpacity activeOpacity={0.8} style={tw`bg-white p-4 rounded-2xl	 shadow mb-4 mx-0.5`} onPress={goToLoading}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const iconData = new Array(5).fill('');

const SearchScreen = () => {
  const navigation = useNavigation();
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const [text, setText] = useState<string>('');

  const { eyes } = useSearchHook();

  const goToLoading = () => {
    navigation.navigate('LoadingWheelScreen');
  };

  const handleClear = () => {
    setText('');
  };

  const renderItem = () => {
    return (
      <View style={tw`mb-4`}>
        <Entypo name="squared-plus" size={50} color="black" />
      </View>
    );
  };

  return (
    <SafeAreaView style={[tw`flex-1`, { marginTop: StatusBar.currentHeight }]}>
      <View style={tw`h-1/6  flex-row items-center justify-center `}>
        <Text style={tw`text-2xl font-bold p-1 `}>နတ်မျက်စိ ဗေဒင်</Text>
        <TouchableOpacity activeOpacity={1} onPress={toggleTheme}>
          {themeValue === 'dark' ? <Icons name="moon" size={24} /> : <Icons name="sun" size={24} />}
        </TouchableOpacity>
      </View>
      <View style={tw`px-10 flex-1`}>
        <SearchInput value={text} handleClear={handleClear} handleChange={setText} />
        <View style={tw`flex-row h-full`}>
          {/* <View style={tw`w-12 items-center`}>
            <FlatList data={iconData} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
          </View> */}

          <FlatList
            style={tw`flex-1 pl-2`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={eyes}
            renderItem={({ item }) => <ListItem title={item.question} goToLoading={goToLoading} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
