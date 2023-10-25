import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FilterItem from './filterItem';

const AreaFilter = ({ filters }) => {
  const [selected, setSelected] = useState(filters[0]);
  return (
    <View className="mb-5">
      <Text className="font-exoSemibold text-darkGrayText text-xs capitalize ">
        Area
      </Text>
      <View className="flex flex-row mt-3">
        {filters.map((item) => (
          <FilterItem
            key={item}
            item={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </View>
    </View>
  );
};

export default AreaFilter;
