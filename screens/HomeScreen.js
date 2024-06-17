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
import Button from '../components/button';
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import { themeColors } from '../theme';
import TeacherItem from '../components/home/teacherItem';
import {
  
  institutionData,
  subjectFilters,
  teacherData,
} from '../assets/data/data';
import InstitutionItem from '../components/home/institutionItem';
import SectionHeader from '../components/home/sectionHeader';

import SubjectFilter from '../components/home/subjectFilter';

const { avatar } = images;

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [teachers, setTeachers] = useState(teacherData);
  const [institutions, setInstitutions] = useState(institutionData);
  const [SelectedSubject, setSelectedSubject] = useState();
  const [teachersFilterVisible, setTeachersFilterVisible] = useState(false);
  const [institutionsFilterVisible, setInstitutionsFilterVisible] =
    useState(false);

  /**
   * @description Function to toggle the teachers filter visibility
   */
  const toggleTeachersFilter = () => {
    setTeachersFilterVisible(!teachersFilterVisible);
  };

  /**
   * @description Function to toggle the institutions filter visibility
   */
  const toggleInstitutionsFilter = () => {
    setInstitutionsFilterVisible(!institutionsFilterVisible);
  };

  /**
   * @description handles search for teachers and institutions
   * @param {*} searchQuery
   */
  const handleSearchChange = (searchQuery) => {
    setSearchQuery(searchQuery);
    setTeachersFilterVisible(false);
    setInstitutionsFilterVisible(false);

    // set query to lowercase
    const lowerCaseQuery = searchQuery.toLowerCase();

    // Filter teachers based on the search query
    const filteredTeachers = teacherData.filter((teacher) =>
      teacher.name.toLowerCase().includes(lowerCaseQuery)
    );
    setTeachers(filteredTeachers);

    // Filter institutions based on the search query
    const filteredInstitutions = institutionData.filter((institution) =>
      institution.name.toLowerCase().includes(lowerCaseQuery)
    );
    setInstitutions(filteredInstitutions);
  };

  /**
   * @description Function to filter teachers based on the selected subject
   * @param {*} subject
   */
  const filterTeachersBySubject = (subject) => {
    setSelectedSubject(subject);

    // Filter the teachers based on the selected subject
    if (subject.toLowerCase() === 'all subjects') {
      setTeachers(teacherData); // Show all teachers when 'All Subjects' is selected
    } else if (subject.toLowerCase() === 'science for technology') {
      setTeachers(teacherData);
    } else {
      const filteredTeachers = teacherData.filter(
        (teacher) => teacher.subject.toLowerCase() === subject.toLowerCase()
      );
      setTeachers(filteredTeachers);
    }
  };

  return (
    <SafeAreaView className="bg-bgWhite px-7 pt-5 pb-[-35px] flex-1">
      {/**============= Header Area =================== */}
      <View className="flex flex-row items-center justify-between">
        <View className="">
          {/** Get greeting based on current time */}
          <HeaderText text={getLocalGreeting()} />
          <Text className="font-exo font-semibold text-lg">Well come  to AAU hub</Text>
        </View>
        {/** ============= Profile image/avatar ============ */}
        <View className="bg-bgWhite shadow-xl rounded-xl">
          <Image source={avatar} style={{ height: 62, width: 62 }} />
        </View>
      </View>
      {/** ================ Search Input  ========================= */}
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
          <AdjustmentsVerticalIcon size={28} color={themeColors.darkGrayText} />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" h-full w-full"
      >
        {/** ========================= Teachers Section =========================== */}
        <View className="mt-2">
          <SectionHeader
            title={'Popular professors'}
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
              <SubjectFilter
                filters={subjectFilters}
                onSubjectSelect={filterTeachersBySubject}
              />
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
            title={'AAU Colleges'}
            
          />
          <View
            className={`w-full pt-5`}
          >
            {institutions.map((institution, index) => (
              <InstitutionItem institution={institution} key={index} />
              
            ))}
          
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
