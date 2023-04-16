import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { HeaderSection } from 'src/components';
import SearchInput from 'src/components/SearchInput/SearchInput';
import tw from 'twrnc';
import useSearchHook from './hook/useSearchHook';

const ListItem = ({ title, goToLoading }: { title: string; goToLoading: () => void }) => (
  <TouchableOpacity activeOpacity={0.8} style={tw`bg-white p-4 rounded-2xl	 shadow mb-4 mx-0.5`} onPress={goToLoading}>
    <Text variant="bodyMedium" style={tw`py-1`}>
      {title}
    </Text>
  </TouchableOpacity>
);

const iconData = new Array(5).fill('');

const SearchScreen = () => {
  const navigation = useNavigation();

  const [text, setText] = useState<string>('');
  // const navigation = useNavigation<SearchScreenNavigationProps>();

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
      <HeaderSection />
      <View style={tw`px-3 flex-1`}>
        <SearchInput value={text} handleClear={handleClear} handleChange={setText} />
        <View style={tw`flex-row h-full mt-4`}>
          <View style={tw`w-12 items-center`}>
            <FlatList data={iconData} keyExtractor={(_, index) => index.toString()} renderItem={renderItem} />
          </View>
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
