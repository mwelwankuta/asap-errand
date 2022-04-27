import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Stars } from '../components';

import { inputStyle } from '../constants';

export default function Request({ navigation, route }) {
  const { image, rating, recommendations, bio, name, pickup, destination } =
    route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingBottom: 20 }}>
        <View style={styles.userInfoHolder}>
          <View>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View>
            <Stars rating={rating} />
            <Text style={styles.recommendations}>
              {recommendations}{' '}
              {recommendations == 1 ? 'recommendation' : 'recommendations'}
            </Text>
          </View>
        </View>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.formHolder}>
          <Text style={styles.title}>Requesting to ran errand</Text>
          <Text style={styles.tip}>
            this request can only be cancelled {name} rejects it
          </Text>
          <View>
            <Text style={styles.inputLabel}>Pick-up location</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              autoComplete='off'
              style={[inputStyle, { height: 50 }]}>
              <View style={styles.inputContent}>
                <Text>{pickup ? pickup : ''}</Text>
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
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.inputLabel}>Destination</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              autoComplete='off'
              style={[inputStyle, { height: 50 }]}>
              <View style={styles.inputContent}>
                <Text>{destination ? destination : ''}</Text>
                <TouchableOpacity
                  style={styles.mapButton}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate('Map', {
                      ...route.params,
                      title: 'Destination',
                      title_key: 'destination',
                    })
                  }>
                  <MaterialIcons name='location-pin' size={20} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.noteHolder}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              multiline
              textAlignVertical='top'
              placeholderTextColor={'#888'}
              numberOfLines={5}
              style={inputStyle}
              placeholder='e.g ask john for a car battery'></TextInput>
          </View>
          <Text style={styles.costText}>
            COST: <Text style={styles.cost}>15 Tokens</Text>
          </Text>
          <Button title='Request' />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  recommendations: {
    marginTop: 4,
    color: '#1681FF',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  userInfoHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  bio: {
    maxWidth: '70%',
    marginTop: 5,
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    marginTop: 10,
    color: '#222',
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
    marginTop: 5,
    color: '#222',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: 'Inter-Regular',
    marginBottom: 10,
    marginTop: 15,
  },
  noteHolder: {
    marginBottom: 10,
  },
  costText: {
    marginBottom: 10,
    fontFamily: 'Inter-Regular',
  },
  cost: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FF5C00',
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
});
