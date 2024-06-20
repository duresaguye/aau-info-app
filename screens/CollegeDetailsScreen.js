import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking, StatusBar } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const CollegeDetailsScreen = ({ route }) => {
  const { institution } = route.params;

  if (!institution) {
    return (
      <View style={styles.container}>
        <Text style={styles.noDataText}>No institution data available</Text>
      </View>
    );
  }

  const navigation = useNavigation();

  const openWebsite = (url) => {
    Linking.openURL(url);
  };

  const getImageSource = (image) => {
    return typeof image === 'string' ? { uri: image } : image;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeftIcon size={20} color="black" />
        <Text style={styles.backButtonText}>HOME</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={getImageSource(institution.image)} style={styles.institutionImage} />
        <Text style={styles.institutionName}>{institution.name}</Text>
        <Text style={styles.institutionDescription}>{institution.description}</Text>
        <Text style={styles.institutionInfo}>Location: {institution.location}</Text>
        <Text style={styles.institutionInfo}>Stream: {institution.stream}</Text>
        <Text style={styles.institutionInfo}>Last Year Cutoff GPA: {institution.gpa}</Text>
        <TouchableOpacity onPress={() => openWebsite(institution.website)}>
          <Text style={[styles.institutionInfo, styles.link]}>Website: {institution.website}</Text>
        </TouchableOpacity>
        {institution.departments && (
          <View style={styles.departmentsContainer}>
            <Text style={styles.departmentsTitle}>Departments:</Text>
            
            {institution.departments.map((department, index) => (
              <View key={index} style={styles.department}>
               <Image source={getImageSource(department.image)} style={styles.institutionImage} />
                <Text style={styles.departmentName}>{department.name}</Text>
                <Text style={styles.departmentDescription}>{department.description}</Text>
                <Text style={styles.departmentInfo}>freshman Office: {department.freshmanOffice}</Text>
              
                <Text style={styles.departmentInfo}>Last Year Entry GPA: {department.gpaEntry}</Text>
                <Text style={styles.departmentInfo}>Years: {department.Years}</Text>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('DepartmentDetails', { department })}
                   className="py-3 bg-bgPurple px-7 rounded-xl w-[267px] max-h-[61px] flex items-center justify-center"
                 
                >
                  <Text className="text-white font-bold">View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
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
  noDataText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#6c757d',
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
  institutionImage: {
    height: 300,
    width: '100%',
    borderRadius: 0,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  institutionName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  institutionDescription: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 10,
    lineHeight: 24,
  },
  institutionInfo: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  link: {
    color: '#1E90FF', 
    textDecorationLine: 'underline',
  },
  departmentsContainer: {
    marginTop: 20,
    paddingLeft: 10,
  },
  departmentsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  department: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  departmentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 5,
  },
  departmentDescription: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  departmentInfo: {
    fontSize: 16,
    color: '#495057',
  },
 
});

export default CollegeDetailsScreen;
