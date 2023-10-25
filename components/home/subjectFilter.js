import { View, Text } from 'react-native';
import React, { useState } from 'react';
import FilterItem from './filterItem';

const SubjectFilter = ({ filters, onSubjectSelect }) => {
  const [selected, setSelected] = useState(filters[0]);

  const handleSubjectSelect = (subject) => {
    setSelected(subject);
    onSubjectSelect(subject); // Notify the parent component of a change
  };

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
            setSelected={handleSubjectSelect}
          />
        ))}
      </View>
    </View>
  );
};

export default SubjectFilter;
