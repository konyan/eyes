import React from 'react';
import { Text, View } from 'react-native';
import { Chip } from 'react-native-paper';

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
        style={{
          alignSelf: 'flex-start',
          height: 40,
          borderRadius: 20,
          marginBottom: 15,
          marginHorizontal: 10,
          elevation: 3,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
          shadowRadius: 2,
          borderColor: '#494949',
        }}
      >
        <Text style={{ fontSize: 12 }}>{text}</Text>
      </Chip>
    </View>
  );
};

export default ChipButton;
