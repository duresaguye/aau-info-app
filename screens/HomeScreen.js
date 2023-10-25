import {
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderText from '../components/headerText';
import { getLocalGreeting } from '../utils/helpers';
import { images } from '../assets';
import SearchInput from '../components/home/searchInput';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import { FunnelIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import TeacherItem from '../components/home/teacherItem';
import {
  areaFilters,
  institutionData,
  subjectFilters,
  teacherData,
} from '../assets/data/data';
import InstitutionItem from '../components/home/institutionItem';
import SectionHeader from '../components/home/sectionHeader';
import AreaFilter from '../components/home/areaFilter';
import SubjectFilter from '../components/home/subjectFilter';

const { avatar } = images;

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [teachers, setTeachers] = useState(teacherData);
  const [teachersFilterVisible, setTeachersFilterVisible] = useState(false);
  const [institutionsFilterVisible, setInstitutionsFilterVisible] =
    useState(false);

  // Function to toggle the teachers filter visibility
  const toggleTeachersFilter = () => {
    setTeachersFilterVisible(!teachersFilterVisible);
  };

  // Function to toggle the institutions filter visibility
  const toggleInstitutionsFilter = () => {
    setInstitutionsFilterVisible(!institutionsFilterVisible);
  };

  const handleSearchChange = (text) => {
    console.log(text);
    setSearchQuery(text);
  };
  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Header Area =================== */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" h-full w-full"
      >
        <View className="flex flex-row items-center justify-between">
          <View className="">
            {/** Get greeting based on current time */}
            <HeaderText text={getLocalGreeting()} />
            <Text className="font-exo font-semibold text-lg">
              Hardline Scott
            </Text>
          </View>
          {/** ============= Profile image/avatar ============ */}
          <View className="bg-bgWhite shadow-xl rounded-xl">
            <Image source={avatar} style={{ height: 62, width: 62 }} />
          </View>
        </View>
        {/** ================ Search Input & Filters ========================= */}
        <View className="flex flex-row items-center justify-between my-7">
          <View className="flex-1">
            <SearchInput
              placeholder={'Search'}
              value={searchQuery}
              onChange={handleSearchChange}
              Icon={MagnifyingGlassIcon}
            />
          </View>
          {/** ==================== Filter Icon ================================= */}
          <Pressable className="ml-3">
            <AdjustmentsVerticalIcon
              size={28}
              color={themeColors.darkGrayText}
            />
          </Pressable>
        </View>

        {/** ========================= Teachers Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Popular Teachers'}
            onFilterPress={toggleTeachersFilter}
            tintColor={
              teachersFilterVisible
                ? themeColors.bgPurple
                : themeColors.lightGrayText
            }
          />

          {/**============== Teacher Filters ==================== */}
          {teachersFilterVisible ? (
            <View className="flex flex-col my-5 space-y-2">
              <AreaFilter filters={areaFilters} />
              <SubjectFilter filters={subjectFilters} />
            </View>
          ) : null}

          {/** ========================= Render List of Teachers =========================== */}

          <FlatList
            data={teachers}
            horizontal={true}
            className="w-full py-4 bg-transparent"
            renderItem={({ item }) => <TeacherItem teacher={item} />}
            keyExtractor={(item, index) => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/** ========================= Institutions Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Popular Institutions'}
            onFilterPress={toggleInstitutionsFilter}
            tintColor={
              institutionsFilterVisible
                ? themeColors.bgPurple
                : themeColors.lightGrayText
            }
          />

          {/** ========================= Render List of institutions =========================== */}
          <View className="w-full pt-4 bg-transparent">
            {institutionData.map((institution, index) => (
              <InstitutionItem institution={institution} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
