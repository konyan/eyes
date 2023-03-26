import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  text: string;
};

const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} testID="BUTTON">
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
