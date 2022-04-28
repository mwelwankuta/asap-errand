import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { inputStyle } from '../constants';

function LocationItem({ name, location, coordinates }) {
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

export default function SearchLocation({ navigation, route }) {
  const { pickup, destination, title_key } = route.params;
  const inputPlaceholder = pickup ? pickup : destination;

  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: 'Pep stores',
      location: 'Mbala, Zambia',
      coordinates: {
        longitude: '0.00000',
        latitude: '1.00000',
      },
    },
    {
      id: 2,
      name: 'Mbala School of Nursing',
      location: 'Mbala, Zambia',
      coordinates: {
        longitude: '0.00000',
        latitude: '1.00000',
      },
    },
    {
      id: 3,
      name: 'Mbala Secondary School',
      location: 'Mbala, Zambia',
      coordinates: {
        longitude: '0.00000',
        latitude: '1.00000',
      },
    },
  ]);

  return (
    <FlatList
      style={styles.container}
      keyExtractor={item => item.id}
      data={locations}
      ListHeaderComponentStyle={styles.listHeader}
      ListHeaderComponent={() => (
        <View activeOpacity={0.8} style={[inputStyle, { height: 50 }]}>
          <View style={styles.inputContent}>
            <TextInput
              value={searchTerm}
              style={styles.input}
              onChangeText={setSearchTerm}
              textContentType='location'
              placeholder={inputPlaceholder}
            />
            <TouchableOpacity
              style={styles.mapButton}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('Map', {
                  ...route.params,
                  title: 'Pick-up point',
                  title_key: 'pickup',
                })
              }>
              <MaterialIcons name='location-pin' size={20} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      renderItem={({ item }) => (
        <LocationItem
          location={item.location}
          name={item.name}
          coordinates={item.coordinates}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listHeader: {
    marginBottom: 20,
  },
  mapButton: {
    padding: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  locationItem: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  locationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationArrow: {
    transform: [
      {
        rotateZ: '45deg',
      },
    ],
  },
  textHolder: {
    marginLeft: 10,
  },
  name: {
    fontFamily: 'Inter-Medium',
    color: '#222',
  },
  location: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#333',
  },
  input: {
    flex: 1,
  },
});
