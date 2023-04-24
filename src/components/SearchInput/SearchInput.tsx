import { Icons } from '@core';
import React from 'react';
import { TextInput } from 'react-native-paper';

type SearchInputProps = {
  handleChange: (text: string) => void;
  value: string;
  handleClear: () => void;
};

const SearchInput = ({ handleChange, value, handleClear }: SearchInputProps) => {
  return (
    <TextInput
      label="ရှာရန်"
      testID="textInput-test"
      onChangeText={handleChange}
      value={value}
      right={
        value.length > 0 && (
          <TextInput.Icon icon={() => <Icons name="trash" size={20} />} testID="clear-button" onPress={handleClear} />
        )
      }
      selectionColor="#E7E0EC"
      outlineColor="#000"
      mode="outlined"
      outlineStyle={{ borderRadius: 20, backgroundColor: '#e7e0ec' }}
    />
  );
};

export default SearchInput;
