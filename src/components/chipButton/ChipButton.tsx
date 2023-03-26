import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

type ChipButtonProps = {
  onPress: () => void;
  text: string;
};

const ChipButton = ({ onPress, text }: ChipButtonProps) => {
  return (
    <TouchableOpacity testID="chipButton-test" onPress={onPress}>
      <Text variant="titleMedium">{text}</Text>
    </TouchableOpacity>
  );
};

export default ChipButton;
