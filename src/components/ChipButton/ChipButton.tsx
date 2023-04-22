import React from 'react';
import { View } from 'react-native';
import { Chip, Text } from 'react-native-paper';
import tw from 'twrnc';

type ChipButtonProps = {
  onPress: () => void;
  text: string;
  selected: boolean;
};

const ChipButton = ({ onPress, text, selected }: ChipButtonProps) => {
  return (
    <View>
      <Chip
        mode="outlined"
        onPress={onPress}
        selected={selected}
        testID="chipButton-test"
        selectedColor="#000"
        style={tw`shadow border-2  self-start h-[40px] rounded-20 mb-2 mx-2 bg-slate-300 border-[#b6c6d8]`}
      >
        <Text variant="bodyMedium">{text}</Text>
      </Chip>
    </View>
  );
};

export default ChipButton;
