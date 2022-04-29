import React, { useState, useContext, Fragment } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons';

import { AccountTypeModal, Button } from '../components';

import { inputStyle } from '../constants';
import userContext from '../context/user';

export default function LoginDetails() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState({
    name: 'Standard',
    account: 'standard',
  });

  const { setUser } = useContext(userContext);
  return (
    <Fragment>
      <ScrollView style={styles.container}>
        <View style={styles.contentHolder}>
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            initialValues={{ name: '', account: selectedAccount }}
            onSubmit={() => {
              setUser({
                id: 123,
                name: 'Mwelwa Nkuta',
                image: 'https://avatars.githubusercontent.com/u/64831126?v=4',
                errand_in_progress: false,
                account: selectedAccount,
                errand: {
                  name: 'Lee Robinson',
                  image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
                  chat: '092',
                },
              });
            }}
            validate={({ name }) => {
              const errors = {};
              if (!name) errors.name = 'a name is required';
              return errors;
            }}>
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <View>
                <Text style={styles.title}>About you</Text>
                <Text style={styles.description}>
                  tell us more about yourself
                </Text>

                <View style={styles.inputHolder}>
                  <TextInput
                    keyboardType='default'
                    autoCapitalize='words'
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    placeholder='Full Name'
                    value={values.name}
                    style={
                      errors.name
                        ? [inputStyle, { borderColor: 'red' }]
                        : inputStyle
                    }
                  />
                  <Text style={styles.errorText}>
                    {errors.name ? errors.name : ''}
                  </Text>
                </View>
                <View style={styles.inputHolder}>
                  <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    activeOpacity={0.8}
                    placeholder='Account Type'
                    style={[inputStyle, styles.country]}>
                    <Text style={{ fontFamily: 'Inter-Regular' }}>
                      {selectedAccount.name}
                    </Text>
                    <AntDesign name='caretdown' size={10} color='#555' />
                  </TouchableOpacity>
                </View>

                <Text style={styles.tip}>
                  By creating an account you agree to the terms and conditions
                  of <Text style={styles.company}>asap errand</Text>
                </Text>
                <Button title='Create Account' onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>

      <AccountTypeModal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        setSelectedAccount={setSelectedAccount}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentHolder: {
    flex: 1,
    padding: 20,
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
    marginVertical: 10,
    color: '#555',
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginBottom: 10,
    marginTop: 15,
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
  company: {
    fontFamily: 'Billabong',
    fontSize: 20,
  },
});
