import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signin } = images;

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 flex justify-around my-4">
        <View className="flex-row justify-center mb-[-15%]">
          <Image source={signin} style={{ width: 266, height: 266 }} />
        </View>
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input label={'Email address'} placeholder={'name@example.com'} />
          <Input
            label={'Password'}
            placeholder={'********'}
            Icon={EyeIcon}
            last
          />
        </View>

        <Button
          primaryBtnText={'Sign In'}
          onPrimaryBtnPress={() => navigation.navigate('Home')}
          secondaryBtnText1={"Don't have an account?"}
          secondaryBtnText2={'Sign Up'}
          onSecondaryBtnPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
}
