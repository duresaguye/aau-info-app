import { View, Text, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import StreamScreen from '../screens/StreamScreen';
import ClassWorkScreen from '../screens/ClassWorkScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CollegeDetailsScreen from '../screens/CollegeDetailsScreen'; 
import DepartmentDetailsScreen from '../screens/DepartmentDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themeColors } from '../theme';
import { images } from '../assets';
import ProfessorsScreen from '../screens/ProfessorsScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

{
  /** ============== App Navigator =================== */
}
export default function AppNavigation() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        
  <Stack.Screen
          name="CollegeDetails"
          options={{ headerShown: false }}
          component={CollegeDetailsScreen} 
        />
        <Stack.Screen
          name='DepartmentDetails'
          options={{ headerShown: false }}
          component={DepartmentDetailsScreen}
        
        />
        <Stack.Screen
          name='Professors'
           options={{ headerShown: false }}
          component={ProfessorsScreen}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

{
  /** ============== Bottom Tab Navigator =================== */
}

const { streamIcon, classWorkIcon, exploreIcon } = images;
const extraTabOptions = {
  tabBarLabelStyle: { fontFamily: 'exo' },
  tabBarStyle: { borderTopRightRadius: 12, borderTopLeftRadius: 12 },
  tabBarActiveTintColor: themeColors.bgPurple,
  tabBarInactiveTintColor: themeColors.darkGrayText,
};
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Explore">
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={exploreIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={StreamScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={streamIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          ...extraTabOptions,
        }}
      />
      <Tab.Screen
        name="About"
        component={ClassWorkScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return (
              // Custom tab bar icon
              <Image
                source={classWorkIcon}
                style={{
                  tintColor: props.color,
                  width: props.size,
                  height: props.size,
                }}
                {...props}
              />
            );
          },
          
          ...extraTabOptions,
        }}
      />
      
    </Tab.Navigator>
  );
}
