import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = ({ label, placeholder, last = false, Icon, value, onChange }) => {
  return (
    <View style={[styles.container, last && { marginBottom: 0 }]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          secureTextEntry={label === 'Password'}
        />
        {Boolean(Icon) && <Icon style={styles.icon} size={20} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  label: {
    fontFamily: 'exo',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontFamily: 'exo',
    fontSize: 14,
    color: '#333', 
  },
  icon: {
    marginRight: 8,
    color: '#2D3748', 
  },
});

export default Input;
