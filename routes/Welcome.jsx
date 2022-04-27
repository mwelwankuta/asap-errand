import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgXml as Svg } from 'react-native-svg';
import { Button } from '../components';

//svg import
import logo from '../assets/asap_errand.svg';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topHolder}>
        <View>
          <Svg xml={logo} height='69' width='185' />
        </View>
        <Text style={styles.text}>
          asap errand is they fastest way and easiest way to get your errands
          ran
        </Text>
      </View>
      <View>
        <View style={[styles.buttonHolder, { marginBottom: 10 }]}>
          <Button
            onPress={() => navigation.navigate('Login', { title: '' })}
            title={'Continue'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topHolder: {
    alignItems: 'center',
    marginTop: '50%',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: 'Inter-Regular',
  },
  buttonHolder: {
    width: '100%',
    height: 44,
  },
});
