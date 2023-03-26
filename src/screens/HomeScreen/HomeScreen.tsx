import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '@routes';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const goToList = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>HomeScreen</Text>
      <Button onPress={goToList} text="GO TO LIST" />
    </View>
  );
};

export default HomeScreen;
