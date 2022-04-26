import React, { useContext } from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { SvgXml as Svg } from 'react-native-svg';

import compass from '../assets/icons/compass.svg';
import compass_active from '../assets/icons/compass_active.svg';
import messages from '../assets/icons/messages.svg';
import messages_active from '../assets/icons/messages_active.svg';
import plus from '../assets/icons/plus.svg';
import plus_active from '../assets/icons/plus.svg';
import profile from '../assets/icons/profile.svg';
import profile_active from '../assets/icons/profile_active.svg';
import menu from '../assets/icons/menu.svg';
import menu_active from '../assets/icons/menu_active.svg';

import locationContext from '../context/location';

export default function TabBar({ navigation }) {
  const { location: name } = useContext(locationContext);
  const scrollToTop = () => {};
  return (
    <View style={styles.tabBar}>
      {name == 'Explore' ? (
        <TouchableNativeFeedback
          onPress={scrollToTop}
          style={styles.tabBarItem}>
          <Svg xml={compass_active} width={24} height={24} />
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Explore')}
          style={styles.tabBarItem}>
          <Svg xml={compass} width={24} height={24} />
        </TouchableNativeFeedback>
      )}
      {name == 'Messages' ? (
        <TouchableNativeFeedback style={styles.tabBarItem}>
          <Svg xml={messages_active} width={24} height={24} />
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Messages')}
          style={styles.tabBarItem}>
          <Svg xml={messages} width={24} height={24} />
        </TouchableNativeFeedback>
      )}
      {name == 'AddErrand' ? (
        <TouchableNativeFeedback style={styles.tabBarItem}>
          <Svg xml={plus_active} width={24} height={24} />
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('AddErrand')}
          style={styles.tabBarItem}>
          <Svg xml={plus} width={24} height={24} />
        </TouchableNativeFeedback>
      )}
      {name == 'Profile' ? (
        <TouchableNativeFeedback style={styles.tabBarItem}>
          <Svg xml={profile_active} width={24} height={24} />
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Profile')}
          style={styles.tabBarItem}>
          <Svg xml={profile} width={24} height={24} />
        </TouchableNativeFeedback>
      )}
      <TouchableNativeFeedback style={styles.tabBarItem}>
        <Svg xml={menu} width={24} height={24} />
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderTopColor: '#ddd',
    borderTopWidth: 0.5,
  },
  tabBarItem: {
    borderRadius: 100,
  },
});
