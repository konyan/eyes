import { Icons } from '@core';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

type SearchInputProps = {
  handleChange: (text: string) => void;
  value: string;
  handleClear: () => void;
};

const SearchInput = ({ handleChange, value, handleClear }: SearchInputProps) => {
  return (
    <View style={[tw`flex-row items-center border border-gray-500 rounded-full py-2 px-4 mb-4 shadow bg-white`]}>
      <TextInput style={tw`flex-1 text-lg`} placeholder="ရှာရန်..." onChangeText={handleChange} value={value} />
      {value.length > 0 && (
        <TouchableOpacity testID="clear-button" onPress={handleClear}>
          <Icons name="trash" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
