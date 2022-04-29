import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from '../../components';

export default function RequestRunnerCard({
  distance,
  bio,
  image,
  name,
  coordinates,
  navigation,
}) {
  const [region, setRegion] = useState({
    latitude: -15.077428,
    longitude: 28.017744,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const gotoRunner = () => {
    navigation.navigate('Runner', { ...item });
  };

  const acceptRequest = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={gotoRunner}
        style={styles.upperContent}>
        <View>
          <Image
            source={{ uri: image, width: 40, height: 40 }}
            style={styles.errandAvatar}
          />
        </View>
        <View>
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View>
            <Text style={styles.name}>{distance}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <MapView
        provider={PROVIDER_GOOGLE}
        scrollEnabled={false}
        style={styles.map}
        clustering={true}
        showsUserLocation
        zoomEnabled={false}
        mapType='standard'
        maxZoomLevel={20}
        showsMyLocationButton={false}
        minZoomLevel={15}
        initialRegion={region}
        loadingIndicatorColor='#555'
        loadingBackgroundColor='white'>
        <Polyline
          coordinates={[
            { latitude: -15.077428, longitude: 28.017744 },
            { latitude: -12.812288, longitude: 28.219802 },
          ]}
          strokeColor='#000' // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
      <View style={styles.contentHolder}>
        <View style={{ marginBottom: 5, height: 44 }}>
          <Button onPress={acceptRequest} title='Accept' />
        </View>
        <View style={{ marginBottom: 5, height: 44 }}>
          <Button alternative onPress={acceptRequest} title='Deny' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#ddd',
    height: '95%',
    width: 300,
    marginRight: 20,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 9,
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-Medium',
    color: '#222',
    fontSize: 16,
  },
  ratingHolder: {
    flexDirection: 'row',
  },
  upperContent: {
    paddingHorizontal: 15,
    padding: 5,
    flexDirection: 'row',
  },
  contentHolder: {
    padding: 15,
  },
  errandImage: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  errandAvatar: {
    marginRight: 10,
    borderRadius: 100,
  },
  text: {
    marginBottom: 10,
    color: '#222',
  },
  recommendations: {
    color: '#888',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
  },
  bio: {
    fontFamily: 'Inter-Regular',
    color: '#222',
  },
  map: {
    width: '90%',
    height: '65%',
    alignSelf: 'center',
  },
});
