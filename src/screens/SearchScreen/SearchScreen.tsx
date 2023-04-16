import { getEyesListByFilter } from '@core';
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SearchScreenNavigationProps } from '@routes';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { HeaderSection } from 'src/components';
import SearchInput from 'src/components/SearchInput/SearchInput';
import tw from 'twrnc';
import useSearchHook from './hook/useSearchHook';

type eyeDataProps = {
  id: number;
  question: string;
  type: string;
  answers: string[];
};

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProps>();
  const { colors } = useTheme();

  const [text, setText] = useState<string>('');
  // const navigation = useNavigation<SearchScreenNavigationProps>();

  const { eyes, setEyes } = useSearchHook();

  const filteredData = eyes.filter((item) => item.question.includes(text));

  const goToLoading = (ans: string[], question: string) => {
    const result = ans[Math.floor(Math.random() * ans.length)];
    navigation.navigate('LoadingWheelScreen', { result, question });
  };

  const handleClear = () => {
    setText('');
  };

  const selectType = async (type: number) => {
    const newEyes = await getEyesListByFilter(type);
    setEyes(newEyes);
  };

  const renderListItem = ({ item }: { item: eyeDataProps }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={tw`bg-white p-4 rounded-2xl shadow mb-4 mx-0.5 `}
        onPress={() => goToLoading(item.answers, item.question)}
      >
        <Text variant="bodyMedium" style={tw`py-1`}>
          {item.question}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[tw`flex-1`, { marginTop: StatusBar.currentHeight, backgroundColor: colors.bg_primary }]}>
      <HeaderSection />
      <View style={tw`px-3 flex-1`}>
        <SearchInput value={text} handleClear={handleClear} handleChange={setText} />
        <View style={tw`flex-row h-full mt-4`}>
          <View style={tw`w-12 items-center`}>
            <View style={tw`mb-4`}>
              <FontAwesome5 name="baby" size={30} color={colors.primary} onPress={() => selectType(1)} />
            </View>
            <View style={tw`mb-4`}>
              <FontAwesome name="dollar" size={30} color={colors.primary} onPress={() => selectType(2)} />
            </View>
            <View style={tw`mb-4`}>
              <FontAwesome name="heartbeat" size={30} color={colors.primary} onPress={() => selectType(3)} />
            </View>
            <View style={tw`mb-4`}>
              <FontAwesome name="group" size={30} color={colors.primary} onPress={() => selectType(4)} />
            </View>
            <View style={tw`mb-4`}>
              <FontAwesome name="heart" size={30} color={colors.primary} onPress={() => selectType(5)} />
            </View>
            <View style={tw`mb-4`}>
              <Feather name="more-horizontal" size={30} color={colors.primary} onPress={() => selectType(6)} />
            </View>
          </View>
          <FlatList
            style={tw`flex-1 pl-2`}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={filteredData}
            renderItem={renderListItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
