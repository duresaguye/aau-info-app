import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderText from '../components/headerText';
import Button from '../components/button';
import ProvinceSelector from '../components/provinceSelector';
import { useNavigation } from '@react-navigation/native';

const SelectProvinceScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="px-7 py-8">
      {/** ============== Header text component =========== */}
      <HeaderText text={"What's your province?"} />

      {/** ============== Select Grades ===================== */}
      <View className="mt-10">
        <ProvinceSelector />
      </View>

      {/** ========= Action button ================== */}
      <View className="mt-[25%]">
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => navigation.navigate('Home')}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectProvinceScreen;
