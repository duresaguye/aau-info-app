import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-bgWhite">
      <Text>Sign Up Screen</Text>
    </SafeAreaView>
  );
}
