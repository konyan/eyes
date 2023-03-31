import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useContext, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import SearchInput from 'src/components/SearchInput/SearchInput';
import { ThemeContext } from 'src/context/ThemeContext/ThemeContext';
import tw from 'twrnc';

const ListItem = ({ title, goToLoading }: { title: string; goToLoading: () => void }) => (
  <TouchableOpacity activeOpacity={0.8} style={tw`bg-white p-4 rounded-2xl	 shadow mb-4 mx-0.5`} onPress={goToLoading}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const data: Item[] = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 1' },
  { id: 7, title: 'Item 2' },
  { id: 8, title: 'Item 3' },
  { id: 9, title: 'Item 4' },
  { id: 10, title: 'Item 5' },
  { id: 11, title: 'Item 1' },
  { id: 12, title: 'Item 2' },
  { id: 13, title: 'Item 3' },
  { id: 14, title: 'Item 4' },
  { id: 15, title: 'Item 5' },
];

const iconData = new Array(5).fill('');

const SearchScreen = ({ navigation }) => {
  const { themeValue, toggleTheme, getTheme } = useContext(ThemeContext);
  const [text, setText] = useState<string>('');
  // const navigation = useNavigation<SearchScreenNavigationProps>();

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
          {themeValue === 'dark' ? (
            <Fontisto name="day-sunny" size={40} color="#000" />
          ) : (
            <MaterialIcons name="nightlight-round" size={40} color="#000" />
          )}
        </TouchableOpacity>
      </View>
      <View style={tw`px-10 flex-1`}>
        <SearchInput value={text} handleClear={handleClear} handleChange={setText} />
        <View style={tw`flex-row h-full`}>
          <View style={tw`w-12 items-center`}>
            <FlatList data={iconData} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
          </View>

          <FlatList
            style={tw`flex-1 pl-2`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => <ListItem title={item.title} goToLoading={goToLoading} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
