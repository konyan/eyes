import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

type GradientButtonProps = {
  onPress: () => void;
  text: string;
};

const GradientButton = ({ onPress, text }: GradientButtonProps) => {
  return (
    <LinearGradient
      colors={['#B23BF3', '#8848F8']}
      start={[1, 1]}
      end={[0, 0]}
      style={tw`rounded-3xl w-2/3 items-center`}
    >
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} testID="BUTTON" style={tw`p-5 mx-3`}>
        <Text style={tw`text-base font-semibold tracking-widest	 text-white px-5	`}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
