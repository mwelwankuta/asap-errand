import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { colors } from '../constants';
import { signup } from '../api';
import { StatusBar } from 'expo-status-bar';

export default function CreateAccount({ navigation }) {
  const handleValidate = ({ name, email, phone, password, confirm }) => {
    const errors = {};

    if (!name) errors.name = '1';
    if (!email) errors.email = '1';
    if (!phone) errors.phone = '1';
    if (confirm != password) {
      errors.confirm = '1';
      errors.password = '1';
    }

    return errors;
  };

  const handleSubmit = async values => {
    const response = await signup({ ...values });
    console.log(response.json());
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor='white' />
        <Text style={styles.title}>Create Account</Text>
        <Formik
          validate={handleValidate}
          onSubmit={handleSubmit}
          initialValues={{
            name: '',
            email: '',
            phone: '',
            confirm: '',
            password: '',
          }}>
          {({ errors, values, handleChange, handleSubmit }) => (
            <View>
              <View
                style={
                  errors.name
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Full names'
                  keyboardType='email-address'
                  value={values.name}
                  style={{ padding: 5, backgroundColor: '#eee' }}
                  autoCorrect={false}
                  returnKeyType='next'
                  onChangeText={handleChange('name')}
                />
              </View>
              <View
                style={
                  errors.email
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Email'
                  keyboardType='email-address'
                  value={values.email}
                  style={{ padding: 5, backgroundColor: '#eee' }}
                  autoCorrect={false}
                  returnKeyType='next'
                  onChangeText={handleChange('email')}
                />
              </View>
              <View
                style={
                  errors.phone
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Phone'
                  keyboardType='email-address'
                  value={values.phone}
                  style={{ padding: 5, backgroundColor: '#eee' }}
                  autoCorrect={false}
                  returnKeyType='next'
                  onChangeText={handleChange('phone')}
                />
              </View>
              <View
                style={
                  errors.password
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Password'
                  value={values.password}
                  autoCorrect={false}
                  secureTextEntry={true}
                  keyboardType={'visible-password'}
                  style={{ padding: 5, backgroundColor: '#eee' }}
                  onChangeText={handleChange('password')}
                />
              </View>
              <View
                style={
                  errors.confirm
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Confirm Password'
                  value={values.confirm}
                  autoCorrect={false}
                  secureTextEntry={true}
                  keyboardType={'visible-password'}
                  style={{ padding: 5, backgroundColor: '#eee' }}
                  onChangeText={handleChange('confirm')}
                />
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('AuthStack', { screen: 'Login' })
                }
                activeOpacity={0.8}>
                <Text style={styles.loginText}>
                  Already have an have account?
                  <Text style={{ color: colors.purpleColor }}> Log in</Text>
                </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.createAccountText}>
                  By click on "Create Account" you agree to MyBudget App terms
                  and conditions
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  input: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.purpleColor,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    color: colors.purpleColor,
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 12,
    marginTop: 10,
  },
  createAccountText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#444',
    fontSize: 12,
  },
});
