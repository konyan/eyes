import { Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { LoadingWheelScreenNavigationProps } from '@routes';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

const LoadingWheelScreen = () => {
  const navigation = useNavigation<LoadingWheelScreenNavigationProps>();

  const goToResult = () => {
    navigation.navigate('ResultScreen');
  };
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>LoadingWheelScreen</Text>
      <Button onPress={goToResult} text="GO TO Result" />
    </View>
  );
};

export default LoadingWheelScreen;
