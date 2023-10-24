import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signup } = images;

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    // Navigate to the next screen with user data
    console.log('user data --> ', userData);
    navigation.navigate('SelectGrade', { userData });
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 flex justify-around">
        {/** ====================== Image ============================= */}
        <View className="flex-row justify-center mb-[-15%] mt-[-10%]">
          <Image source={signup} style={{ width: 353, height: 235 }} />
        </View>
        {/** ====================== Sign Up inputs ============================= */}
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input
            label={'Name'}
            placeholder={'Your name'}
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
          />
          <Input
            label={'Email address'}
            placeholder={'name@example.com'}
            onChange={(text) => handleInputChange('email', text)}
          />
          <Input
            label={'Password'}
            placeholder={'**********'}
            Icon={EyeIcon}
            onChange={(text) => handleInputChange('password', text)}
            last
          />
        </View>

        {/** ====== Action button -> Navigation to grade selection screen ======= */}
        <Button
          primaryBtnText={'Sign Up'}
          onPrimaryBtnPress={handleSubmit}
          secondaryBtnText1={'Already have an account?'}
          secondaryBtnText2={'Sign In'}
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
}
