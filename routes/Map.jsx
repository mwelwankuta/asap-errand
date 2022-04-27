import React, { useLayoutEffect, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SvgXml as Svg } from 'react-native-svg';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

import { Button } from '../components';

import location_picker from '../assets/location_picker.svg';
import current_location from '../assets/icons/current_location.svg';

export default React.memo(function Map({ navigation, route }) {
  const [region, setRegion] = useState({
    latitude: -15.077428,
    longitude: 28.017744,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const pickLocation = () => {
    const coordinates = `${region.latitude}, ${region.longitude}`;
    navigation.navigate('Request', {
      [route.params.title_key]: coordinates,
      ...route.params,
    });
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status == 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <StatusBar backgroundColor={'transparent'} />
      <MapView
        clustering={true}
        showsUserLocation
        mapType='standard'
        style={{ flex: 1, width: '100%', height: '100%' }}
        maxZoomLevel={20}
        showsMyLocationButton={false}
        minZoomLevel={15}
        region={region}
        onRegionChangeComplete={setRegion}
        loadingIndicatorColor='#555'
        loadingBackgroundColor='white'></MapView>
      <View style={styles.marker}>
        <Svg xml={location_picker} width={20} height={20} />
      </View>
      <View style={styles.bottomButton}>
        <Button title='Set Location' onPress={pickLocation} />
        <TouchableOpacity
          onPress={getLocation}
          activeOpacity={0.8}
          style={styles.picker}>
          <Svg xml={current_location} width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  search: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  section: {
    marginTop: 10,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    paddingHorizontal: 20,
  },
  popularCard: {
    flex: 1,
    borderRadius: 5,
    borderColor: '#e7e7e0',
    borderWidth: 1,
    marginRight: 10,
    width: 200,
  },
  popularName: {
    fontWeight: '700',
    fontSize: 15,
  },
  popularAmount: {},
  popularRestaurant: {
    flexDirection: 'row',
  },
  popularImage: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 70,
    width: '100%',
  },
  restaurantCard: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 5,
    borderColor: '#e7e7e0',
    borderWidth: 1,
    marginRight: 10,
  },
  restaurantName: {
    fontWeight: '700',
    fontSize: 18,
  },
  restaurantImage: {
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    width: '100%',
  },
  marker: {
    position: 'absolute',
    top: '48%',
    left: Dimensions.get('window').width / 2.12,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  picker: {
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    marginLeft: 4,
    borderRadius: 9,
  },
});
