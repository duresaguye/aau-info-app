import { View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const InstitutionItem = ({ institution }) => {
  const navigation = useNavigation();
   
return (
    <View className="bg-white rounded-xl flex flex-row w-full min-h-[176px] items-center justify-between p-2 mb-4 shadow">
      {/**============== Institution Image ================ */}
      <View className="rounded-xl">
        <Image source={institution.image} style={{ height: 300, width: 300 }} />
        <Text className="font-exoSemibold text-darkGrayText text-2xl capitalize">
          {institution.name}
        </Text>
        <View className="flex flex-row items-center space-x-2">
        </View>
        <View className="flex flex-col space-y-1">
          <Text className="font-roboto text-xl">{institution.description}</Text>
          <Text className="font-exoSemibold text-darkGrayText text-2xl capitalize">
         location {' '}
        {institution.location}
        </Text>
        <TouchableOpacity
            onPress={() => navigation.navigate('CollegeDetails', { institution })}
                 className="py-3 bg-bgPurple px-7 rounded-xl w-[267px] max-h-[61px] flex items-center justify-center" >
          <Text className="text-white font-bold">View Details</Text>
          
          </TouchableOpacity>
             
        </View>
      </View>
      
    </View>
  );
};

export default InstitutionItem;