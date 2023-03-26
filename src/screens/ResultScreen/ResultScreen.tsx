import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { ResultScreenNavigationProps } from '@routes';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const ResultScreen = () => {
  const navigation = useNavigation<ResultScreenNavigationProps>();

  const goToHome = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>ResultScreen</Text>
      <Button onPress={goToHome} text="GO TO HOME" />
    </View>
  );
};

export default ResultScreen;
