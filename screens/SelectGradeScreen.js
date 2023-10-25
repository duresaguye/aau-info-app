import { Platform, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubjectPicker from '../components/subjectSelector';
import { gradesData } from '../assets/data/data';
import HeaderText from '../components/headerText';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';

const SelectGradeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="px-7 py-8">
      {/** ============== Header text component =========== */}
      <HeaderText text={"What's your grade?"} />

      {/** ============== Select Grades ===================== */}
      <View className="mt-10">
        {gradesData.map((grade, index) => (
          <SubjectPicker grades={grade} key={index} />
        ))}
      </View>

      {/** ========= Action button ================== */}
      <View className={Platform.OS === 'ios' ? 'mt-[30%]' : 'mt-[10%]'}>
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => navigation.navigate('SelectProvince')}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => navigation.navigate('SelectProvince')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectGradeScreen;
