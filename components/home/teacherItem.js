import { View, Text, Image } from 'react-native';
import React from 'react';

const TeacherItem = ({ teacher }) => {
  return (
    <View className="max-w-[126px] min-h-[176px] bg-white p-2 rounded-xl shadow mx-2">
      <View className="rounded-xl">
        <Image source={teacher?.image} style={{ height: 115, width: 110 }} />
      </View>
      <View className="mt-2">
        <Text className="font-exoSemibold text-base capitalize">
          {teacher.name}
        </Text>
        <Text className="font-exo text-xs">{teacher.subject}</Text>
      </View>
    </View>
  );
};

export default TeacherItem;
