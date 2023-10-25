import { Text, TextInput, View } from 'react-native';
import React from 'react';

const SearchInput = ({ placeholder, Icon, value, onChange }) => {
  return (
    <View className={`flex flex-col gap-2 relative `}>
      {/** ====================== Text Input ============================= */}
      <View className="flex flex-row items-center justify-between px-4 bg-white h-12 rounded-lg shadow">
        <TextInput
          className={
            'font-exo font-semibold flex items-center text-black text-base h-full w-full bg-white rounded-lg'
          }
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
        {/** ====================== Search Icon ============================= */}

        <View className="absolute right-0 mr-[2.5%] flex items-center justify-center px-1 py-2 bg-bgPurple rounded-lg">
          <Icon className="text-white" size={20} />
        </View>
      </View>
    </View>
  );
};

export default SearchInput;
