import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml as Svg } from 'react-native-svg';

import asap from '../assets/asap.svg';

export default function Header({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View>
          <Svg style={styles.headerLogo} xml={asap} width={50} height={50} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.8}>
          <Image
            style={styles.userAvatar}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/64831126?v=4',
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
  },
  userAvatar: {
    height: 35,
    width: 35,
    borderRadius: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    resizeMode: 'cover',
  },
});
