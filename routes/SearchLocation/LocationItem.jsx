import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LocationItem({ name, location, coordinates }) {
  const navigation = useNavigation();
  const route = useRoute();

  const { latitude, longitude } = coordinates;

  const pickLocation = () => {
    const position = `${latitude}, ${longitude}`;

    navigation.navigate('Request', {
      ...route.params,
      [route.params.title_key]: position,
      title: route.params.name
    });
  };

  return (
    <TouchableOpacity
      onPress={pickLocation}
      style={styles.locationItem}
      activeOpacity={0.8}>
      <View style={styles.locationDetails}>
        <View>
          <MaterialIcons name='location-pin' color='#222' size={24} />
        </View>
        <View style={styles.textHolder}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
      <View style={styles.locationArrow}>
        <MaterialIcons name='arrow-back' size={24} color='#222' />
      </View>
    </TouchableOpacity>
  );
}