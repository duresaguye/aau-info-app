import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ClassWorkScreen = () => {
  return (
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>AAUHub</Text>
      <Text style={styles.description}>
        AAUHub is your ultimate platform for accessing comprehensive information about Addis Ababa University, including details about colleges, departments, and instructors. Our goal is to provide students with easy access to educational resources tailored to their needs.
      </Text>
      <Text style={styles.mission}>
        Our mission is to bridge the gap between students and educational resources, creating a vibrant learning community where knowledge is readily available and opportunities for growth are abundant.
      </Text>
      <Text style={styles.joinUs}>
        Join us in shaping the future of education at Addis Ababa University, where every student has the tools and support needed to succeed.
      </Text>
      <Text style={styles.explore}>
        Explore, engage, and excel with AAUHub. Welcome aboard!
      </Text>
      <Text style={styles.developedBy}>
  Developed by Duresa Guye and Team
</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 48, 
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 20

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
  developedBy: {
    fontSize: 14,
    marginTop: 24,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default ClassWorkScreen;
