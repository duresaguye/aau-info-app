import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets';
import Button from '../components/button';
import Input from '../components/input';
import { EyeIcon } from 'react-native-heroicons/solid';

const { signin } = images;

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={signin} style={styles.image} />
        </View>
        <View style={styles.inputsContainer}>
          <Input label={'Email address'} placeholder={'name@example.com'} />
          <Input label={'Password'} placeholder={'********'} Icon={EyeIcon} last />
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 40,
  },
  image: {
    width: 266,
    height: 266,
  },
  inputsContainer: {
    width: '100%',
    marginBottom: 20,
  },
});

export default SignInScreen;
