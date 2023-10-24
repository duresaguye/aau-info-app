import { View, Text, Pressable, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { images } from '../assets';

const { ruler, paint, numbers, microscope } = images;

const SubjectSelector = ({ grades }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjectOptions = [
    { label: 'Arts', image: paint },
    { label: 'Science', image: microscope },
    { label: 'Math', image: ruler },
    { label: 'Commerce', image: numbers },
  ];

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  const selectSubject = (subject) => {
    console.log('selected grade --> ', subject);
    setSelectedSubject(subject);
  };

  return (
    <View className="flex justify-center bg-bgLightGray min-h-14 py-4 rounded-lg mb-[18px]">
      <Pressable onPress={toggleDropdown} className="flex px-4">
        <View className="flex  items-center justify-between flex-row">
          <Text className="font-exo font-semibold text-lg">{grades}</Text>
          {!showDropDown ? (
            <ChevronDownIcon style={{ color: themeColors.darkGrayText }} />
          ) : (
            <ChevronUpIcon style={{ color: themeColors.darkGrayText }} />
          )}
        </View>

        {/** ======================== Dropdown with all available subjects ============================== */}
        {showDropDown ? (
          <FlatList
            data={subjectOptions}
            numColumns={2}
            className="w-full mt-2"
            renderItem={({ item }) => (
              <Pressable
                className={`flex space-x-3 flex-row w-[45%] items-center justify-center m-2 rounded-[10px] py-3 ${
                  selectedSubject === item.label
                    ? 'bg-bgPurple'
                    : 'bg-bgLightGray2'
                }`}
                onPress={() => selectSubject(item?.label)}
              >
                <Image source={item?.image} style={{ height: 20, width: 20 }} />
                <Text
                  className={`text-center font-exo font-semibold text-base ${
                    selectedSubject === item.label
                      ? 'text-bgWhite'
                      : 'text-darkGrayText'
                  }`}
                >
                  {item?.label}
                </Text>
              </Pressable>
            )}
            keyExtractor={(item) => item?.label}
          />
        ) : null}
      </Pressable>
    </View>
  );
};

export default SubjectSelector;
