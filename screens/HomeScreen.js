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
import { teacherData } from '../assets/data/data';

const { avatar } = images;

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    console.log(text);
    setSearchQuery(text);
  };
  return (
    <SafeAreaView className="bg-bgWhite p-8 flex flex-1">
      {/**============= Header Area =================== */}
      <View className="flex flex-row items-center justify-between">
        <View className="">
          <HeaderText text={getLocalGreeting()} />
          <Text className="font-exo font-semibold text-lg">Hardline Scott</Text>
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
          <AdjustmentsVerticalIcon size={28} color={themeColors.darkGrayText} />
        </Pressable>
      </View>

      {/** ========================= Teachers Section =========================== */}
      <View className="mt-2">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-exoSemibold text-lg capitalize">
            Popular Teachers
          </Text>
          <Pressable className="">
            <FunnelIcon size={28} color={themeColors.darkGrayText} />
          </Pressable>
        </View>

        {/** ========================= Render List of Teachers =========================== */}

        <FlatList
          data={teacherData}
          horizontal={true}
          className="w-full py-4 bg-transparent"
          renderItem={({ item }) => <TeacherItem teacher={item} />}
          keyExtractor={(item, index) => item.name}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/** ========================= Institutions Section =========================== */}
      <View className="mt-2">
        <View className="flex flex-row items-center justify-between">
          <Text className="font-exoSemibold text-lg capitalize">
            Popular Institutions
          </Text>
          <Pressable className="">
            <FunnelIcon size={28} color={themeColors.darkGrayText} />
          </Pressable>
        </View>

        {/** ========================= Render List of Teachers =========================== */}
        <View className=""></View>
      </View>
    </SafeAreaView>
  );
}
