import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ClassWorkScreen = () => {
  return (
     <ScrollView style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to AAUHub, your comprehensive platform for accessing a wealth of educational resources tailored specifically to the needs of Addis Ababa University students. At AAUHub, we are dedicated to providing a seamless and enriching experience that empowers students to excel in their academic journey.
      </Text>
      <Text style={styles.mission}>
        Our mission is to bridge the gap between students and educational resources, fostering a vibrant learning community where knowledge is easily accessible and opportunities for growth are abundant. Whether you're seeking study materials, departmental information, or collaborative tools, AAUHub is your go-to destination.
      </Text>
      <Text style={styles.joinUs}>
        Join us in shaping the future of education at Addis Ababa University, where every student has the tools and support needed to succeed.
      </Text>
      <Text style={styles.explore}>
        Explore, engage, and excel with AAUHub. Welcome aboard!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 16,
  },
  mission: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 16,
  },
  joinUs: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 16,
  },
  explore: {
    fontSize: 18,
    lineHeight: 24,
  },
});

export default ClassWorkScreen;
