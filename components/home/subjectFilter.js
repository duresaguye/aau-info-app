import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FilterItem from './filterItem';

const SubjectFilter = ({ filters }) => {
  const [selected, setSelected] = useState(filters[0]);
  return (
    <View className="">
      <Text className="font-exoSemibold text-darkGrayText text-xs capitalize ">
        Subject
      </Text>
      <View className="flex flex-row flex-wrap mt-3">
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

export default SubjectFilter;
