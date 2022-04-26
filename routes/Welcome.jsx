import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml as Svg } from 'react-native-svg';
import { Button } from '../components';

import userContext from '../context/user';
//svg import
import logo from '../assets/asap_errand.svg';

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(userContext);

  const login = async () => {
    setLoading(true);
    setLoading(false);
    setUser({ name: 'Mwelwa', bio: 'Hello world' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHolder}>
        <View>
          <Svg xml={logo} height='69' width='185' />
        </View>
        <Text style={styles.text}>
          asap errand is they fastest way and easiest way to get your errands
          ran
        </Text>
      </View>
      <View style={{ width: '100%', height: 44 }}>
        <Button
          loading={loading}
          onPress={login}
          title={'Continue with Facebook'}
        />
      </View>
    </SafeAreaView>
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
});
