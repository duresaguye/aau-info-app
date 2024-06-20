import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar, Image } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const DepartmentDetailsScreen = ({ route }) => {
  const { department } = route.params;

   const getImageSource = (image) => {
    return typeof image === 'string' ? { uri: image } : image;
  };

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
         <Image source={getImageSource(department.image)} style={styles.institutionImage} />
        <Text style={styles.departmentName}>{department.name}</Text>
        <Text style={styles.departmentDescription}>{department.description}</Text>
        <Text style={styles.departmentInfo}>General Objectives: {department.GeneralObjectives}</Text>
        <Text style={styles.departmentInfo}>GPA Entry: {department.gpaEntry}</Text>
        <Text style={styles.departmentInfo}>GPA Percentage: {department.gpaPercentage}</Text>
        <Text style={styles.departmentInfo}>Years: {department.Years}</Text>
        <Text style={styles.departmentInfo}>freshman_office: {department.freshman_office}</Text>
        <Text style={styles.departmentInfo}>freshmanSemesters: {department.freshmanSemesters}</Text>
        <Text style={styles.departmentInfo}>Degree: {department.degree}</Text>
        {/* Render List of Modules and Courses */}
         <Text style={styles. backButtonText}> modules and courses</Text>
        {department.ModulesAndCourses && Array.isArray(department.ModulesAndCourses) ? (
  department.ModulesAndCourses.map((module, index) => (
    <View key={index} style={styles.moduleContainer}>
      <Text style={styles.moduleTitle}>{module['Module Code ']} - {module['Module Name']}</Text>
      <Text style={styles.courseInfo}>Course Code: {module['Course Code']}</Text>
      <Text style={styles.courseInfo}>Course Name: {module['Course Name']}</Text>
      <Text style={styles.courseInfo}>ECTS: {module['Module ECTS']}</Text>
    </View>
  ))
) : (
  <Text>No modules and courses data available</Text>
)}
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
   institutionImage: {
    height: 330,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
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
  moduleContainer: {
    marginBottom: 15,
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
