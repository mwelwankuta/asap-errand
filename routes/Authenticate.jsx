import React, { useState, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { inputStyle } from '../constants';
import { Button, CountryModal } from '../components';

export default function Authenticate({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    dial_code: '+260',
    name: 'Zambia',
  });

  function handleValidation({ phone }) {
    const errors = {};
    if (!phone) errors.phone = 'a phone number is required';
    return errors;
  }

  function handleSubmit({ phone, code }) {
    navigation.navigate('VerifyCode', { phone, code });
  }

  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Formik
            onSubmit={handleSubmit}
            validate={handleValidation}
            initialValues={{ code: selectedCountry.dial_code, phone: '' }}>
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <View>
                <Text style={styles.title}>Enter your phone number</Text>
                <Text style={styles.description}>
                  enter your phone number and region to register for an account
                </Text>
                <View style={styles.inputHolder}>
                  <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    activeOpacity={0.8}
                    placeholder='Phone number'
                    style={[inputStyle, styles.country]}>
                    <Text style={{ fontFamily: 'Inter-Regular' }}>
                      {selectedCountry.name} ({selectedCountry.dial_code})
                    </Text>
                    <AntDesign name='caretdown' size={10} color='#555' />
                  </TouchableOpacity>
                </View>
                <View style={styles.inputHolder}>
                  <TextInput
                    keyboardType='phone-pad'
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    placeholder='Phone number'
                    value={values.phone}
                    style={
                      errors.phone
                        ? [inputStyle, { borderColor: 'red' }]
                        : inputStyle
                    }
                    maxLength={10}
                  />
                  <Text style={styles.errorText}>
                    {errors.phone ? errors.phone : ''}
                  </Text>
                </View>
                <Text style={styles.tip}>
                  By continuing you agree that you are authorized to receive
                  texts on this number.
                </Text>
                <Button title='Send Code' onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </SafeAreaView>
      </ScrollView>

      <CountryModal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        setSelectedCountry={setSelectedCountry}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  description: {
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
    color: '#555',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#222',
  },
  formHolder: {
    marginTop: 20,
  },
  tip: {
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 10,
    color: '#555',
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginBottom: 10,
    marginTop: 15,
  },
  inputHolder: {
    marginBottom: 10,
  },
  country: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
  },
});
