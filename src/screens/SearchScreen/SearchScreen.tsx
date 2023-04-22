import { SearchInput } from '@components';
import { getEyesListByFilter } from '@core';
import { useNavigation } from '@react-navigation/native';
import { SearchScreenNavigationProps } from '@routes';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { HeaderSection } from 'src/components';
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
