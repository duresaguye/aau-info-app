import { View, Text, Pressable } from 'react-native';
import React from 'react';

const FilterItem = ({ item, selected, setSelected }) => {
  const isSelected = selected === item;
  return (
    <Pressable
      className={`flex flex-row rounded-lg items-center justify-center mr-2 m-1 ${
        isSelected ? 'bg-bgPurple' : 'bg-white'
      }`}
      onPress={() => setSelected(item)}
    >
      <Text
        className={`text-roboto px-3 py-[1px] text-base ${
          isSelected ? 'text-bgWhite' : 'text-darkGrayText'
        }`}
      >
        {item}
      </Text>
    </Pressable>
  );
};

export default FilterItem;
