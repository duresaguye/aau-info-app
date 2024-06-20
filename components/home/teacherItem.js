import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TeacherItem = ({ teacher, department }) => {
  const navigation = useNavigation();

  return (
    <View className="max-w-[126px] min-h-[176px] bg-white p-2 rounded-xl shadow mx-2">
      {/**============== Teacher Image ================ */}
      <View className="rounded-xl">
        <Image source={teacher?.image} style={{ height: 115, width: 110 }} />
      </View>
      {/**============== Teacher's Name and subject ================ */}
      <View className="mt-2">
        <Text className="font-exoSemibold text-base capitalize text-darkGrayText">
          {teacher.name}
        </Text>
        <Text className="font-exo text-xs">{teacher.subject}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Professors')}
        >
          <Text className="font-exo text-xs">Read more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeacherItem;
