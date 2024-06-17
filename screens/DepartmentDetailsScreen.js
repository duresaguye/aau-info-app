import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const DepartmentDetailsScreen = ({ route }) => {
  const { department } = route.params;

  if (!department) {
    return <Text>No department data available</Text>;
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeftIcon size={20} color="black" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.departmentName}>{department.name}</Text>
        <Text style={styles.departmentDescription}>{department.description}</Text>
        <Text style={styles.departmentInfo}>General Objectives: {department.GeneralObjectives}</Text>
        <Text style={styles.departmentInfo}>GPA Entry: {department.gpaEntry}</Text>
        <Text style={styles.departmentInfo}>GPA Percentage: {department.gpaPercentage}</Text>
        <Text style={styles.departmentInfo}>Years: {department.Years}</Text>
        {/*
        {/* Render Admission Requirements   <Text style={styles.sectionTitle}>Admission Requirements</Text>
        <Text style={styles.admissionInfo}>Regular: {department.Admissionrequirements.Regular}</Text>
        <Text style={styles.admissionInfo}>Evening: {department.Admissionrequirements.Evening}</Text>
        <Text style={styles.admissionInfo}>Advanced Standing: {department.Admissionrequirements['Advanced Standing']}</Text>
         */}
       
       {/* Render List of Modules and Courses  <Text style={styles.sectionTitle}>List of Modules and Courses</Text>
        {department['List of Modules and Courses']['General Education Modules'].map((module, index) => (
          <View key={index}>
            <Text style={styles.moduleTitle}>{module.Module}</Text>
            {module.Courses.map((course, idx) => (
              <Text key={idx} style={styles.courseInfo}>
                Course Code: {course['Course Code']}, Course Title: {course['Course Title']}, ECTS: {course.ECTS}, Cr.hr: {course['Cr.hr']}
              </Text>
            ))}
          </View>
        ))}
       */}
         
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
    color: '#343a40',
  },
  scrollViewContent: {
    padding: 15,
  },
  departmentName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  departmentDescription: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 10,
    lineHeight: 24,
  },
  departmentInfo: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
    marginTop: 20,
    marginBottom: 10,
  },
  admissionInfo: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 5,
  },
  courseInfo: {
    fontSize: 16,
    color: '#495057',
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default DepartmentDetailsScreen;
