import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <Text>Login Screen</Text>
    </SafeAreaView>
  );
}
