import React from 'react';
import { View, Text, Image } from 'react-native';

const CollegeDetailsScreen = ({ route }) => {
  const { institution } = route.params;

  if (!institution) {
    return (
      <View>
        <Text>No institution data available</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={institution.image} style={{ height: 250, width: 300, marginBottom: 20 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{institution.name}</Text>
      <Text style={{ fontSize: 16 }}>{institution.description}</Text>
      <Text style={{ fontSize: 16 }}>Location: {institution.location}</Text>
      <Text style={{ fontSize: 16 }}>Stream: {institution.stream}</Text>
      <Text style={{ fontSize: 16 }}>Last Year Cutoff GPA: {institution.gpa}</Text>
      <Text style={{ fontSize: 16 }}>Website: {institution.website}</Text>
      {institution.departments && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Departments:</Text>
          {institution.departments.map((department) => (
            <View key={department.id} style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{department.name}</Text>
              <Text style={{ fontSize: 16 }}>{department.description}</Text>
              <Text style={{ fontSize: 16 }}>Entry GPA: {department.gpaEntry}</Text>
              <Text style={{ fontSize: 16 }}>Years: {department.Years}</Text>
              {/* Add more department details as needed */}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default CollegeDetailsScreen;
