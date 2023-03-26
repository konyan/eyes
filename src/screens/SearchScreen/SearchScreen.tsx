import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { SearchScreenNavigationProps } from '@routes';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProps>();

  const goToLoading = () => {
    console.log('goToLoading');
    navigation.navigate('LoadingWheelScreen');
  };
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>SearchScreen</Text>
      <Button text="GO Loading Page" onPress={goToLoading} />
    </View>
  );
};

export default SearchScreen;
