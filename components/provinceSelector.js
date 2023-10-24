import { View, Text, Pressable, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { provincesData } from '../assets/data/data';

const ProvinceSelector = () => {
  const [selectedProvince, setSelectedProvince] = useState('');

  const selectProvince = (province) => {
    console.log('selected province --> ', province);
    setSelectedProvince(province);
  };

  return (
    <View className="flex justify-center bg-bgLightGray min-h-14 py-4 rounded-lg mb-[18px]">
      <View className="flex px-4">
        <Text className="font-exoSemibold text-darkGrayText my-1 text-base">
          Provinces of Sri Lanka
        </Text>
        {/** ======================== List of available provinces ============================== */}
        <FlatList
          data={provincesData}
          numColumns={2}
          className="w-full mt-2"
          renderItem={({ item }) => (
            <Pressable
              className={`flex space-x-3 flex-row w-[45%] items-center justify-center m-2 rounded-[10px] py-3 ${
                selectedProvince === item ? 'bg-bgPurple' : 'bg-bgLightGray2'
              }`}
              onPress={() => selectProvince(item)}
            >
              <Text
                className={`text-center font-exo font-semibold text-base capitalize ${
                  selectedProvince === item
                    ? 'text-bgWhite'
                    : 'text-darkGrayText'
                }`}
              >
                {item}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default ProvinceSelector;
