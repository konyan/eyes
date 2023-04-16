import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import tw from 'twrnc';

type GradientButtonProps = {
  onPress: () => void;
  text: string;
};

const GradientButton = ({ onPress, text }: GradientButtonProps) => {
  return (
    <View>
      <LinearGradient colors={['#B23BF3', '#8848F8']} start={[1, 1]} end={[0, 0]} style={tw`rounded-3xl shadow-md`}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} testID="BUTTON" style={tw`p-5`}>
          <Text style={tw`text-base font-semibold tracking-widest	text-white px-5`} variant="bodyMedium">
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default GradientButton;
