import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import tw from 'twrnc';

const ChipText = ({ text }: { text: string }) => {
  const { colors } = useTheme();

  return (
    <View
      style={tw`bg-[#aa8f34] border-[#907f47] shadow border-2 p-2 m-2 rounded-full items-center`}
      testID="chipText-test"
    >
      <Text variant="bodyMedium" style={[tw`p-1 text-sm tracking-wider`, { color: colors.primary }]}>
        {text}
      </Text>
    </View>
  );
};

export default ChipText;
