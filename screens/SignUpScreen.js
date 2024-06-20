import React, { useState } from 'react';
import { View, Text, Image,Pressable,  Alert,TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signup } = images;

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const validateInputs = () => {
    const { name, email, password } = userData;
    if (!name) {
      Alert.alert('Validation Error', 'Name is required');
      return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Validation Error', 'Valid email is required');
      return false;
    }
    if (!password || password.length < 6) {
      Alert.alert('Validation Error', 'Password must be at least 6 characters');
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (validateInputs()) {
      // Navigate to the next screen with user data
      console.log('user data --> ', userData);
      navigation.navigate('Home', { email: userData.email });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <KeyboardAvoidingView behavior="padding" style={styles.flex1}>
          <View style={styles.imageContainer}>
            <Image source={signup} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Sign Up</Text>
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
            <Button
              primaryBtnText={'Sign Up'}
              onPrimaryBtnPress={handleSubmit}
              secondaryBtnText1={'Already have an account?'}
              secondaryBtnText2={'Sign In'}
              onSecondaryBtnPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default SignUpScreen;
