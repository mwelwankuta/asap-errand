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
import { login } from '../api';

export default function Login({ navigation }) {
  const handleValidate = ({ emailphone, password }) => {
    const errors = {};
    if (!emailphone) errors.emailphone = '1';
    if (!password) errors.password = '1';

    return errors;
  };

  const handleSubmit = async ({ emailphone, password }) => {
    const response = await login({ emailphone, password });
    console.log(response.json());
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Log in</Text>
        <Formik
          validate={handleValidate}
          onSubmit={handleSubmit}
          initialValues={{
            emailphone: '',
            password: '',
          }}>
          {({ errors, values, handleChange, handleSubmit }) => (
            <View>
              <View
                style={
                  errors.title
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Email/Phone'
                  keyboardType='email-address'
                  value={values.title}
                  style={{ padding: 5 }}
                  autoCorrect={false}
                  autoFocus={true}
                  returnKeyType='next'
                  onChangeText={handleChange('emailphone')}
                />
              </View>
              <View
                style={
                  errors.description
                    ? [styles.input, { borderBottomColor: 'red' }]
                    : styles.input
                }>
                <TextInput
                  placeholder='Password'
                  value={values.description}
                  autoCorrect={false}
                  secureTextEntry={true}
                  keyboardType={'visible-password'}
                  style={{ padding: 5 }}
                  onChangeText={handleChange('password')}
                />
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('AuthStack', { screen: 'CreateAccount' })
                }
                activeOpacity={0.8}>
                <Text style={styles.createAccountText}>
                  Does not have account?{' '}
                  <Text style={{ color: colors.purpleColor }}>create one</Text>
                </Text>
              </TouchableOpacity>
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
  },
  input: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 3,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.blueColor,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    color: colors.purpleColor,
    marginTop: 20,
  },
  createAccountText: {
    marginTop: 10,
  },
});
