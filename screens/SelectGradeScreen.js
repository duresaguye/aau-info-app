import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubjectPicker from '../components/subjectSelector';
import { gradesData } from '../assets/data/data';
import HeaderText from '../components/headerText';
import Button from '../components/button';

const SelectGradeScreen = () => {
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
      <View className="mt-[50%]">
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => navigation.navigate('SignUp')}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectGradeScreen;
