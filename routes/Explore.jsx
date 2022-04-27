import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  View,
  Text,
  Image,
  RefreshControl,
} from 'react-native';
import * as Location from 'expo-location';
import { Button, Stars } from '../components';

const ErrandRunnerCard = ({ item, navigation }) => {
  const { distance, bio, image, name, rating, recommendations } = item;

  return (
    <View style={styles.errandRunnerCard}>
      <View style={styles.upperContent}>
        <View>
          <Image source={{ uri: image }} style={styles.errandAvatar} />
        </View>
        <View>
          <View>
            <Text style={styles.name}>
              {name}
              {' • '}
              {distance}
            </Text>
          </View>
          <View>
            <Stars rating={rating} />
          </View>
        </View>
      </View>
      <Image source={{ uri: image }} style={styles.errandImage} />
      <View style={styles.contentHolder}>
        <View style={styles.text}>
          <Text>{bio}</Text>
        </View>
        <View style={{ marginBottom: 5 }}>
          <Button
            onPress={() =>
              navigation.navigate('Request', {
                title: name,
                name,
                rating,
                recommendations,
                distance,
                image,
                bio,
              })
            }
            loading={false}
            title='Request'
          />
        </View>
        <Text style={styles.recommendations}>
          {recommendations}{' '}
          {recommendations == 1 ? 'recommendation' : 'recommendations'}
        </Text>
      </View>
    </View>
  );
};

export default function Explore({ route, navigation }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      image: 'https://avatars.githubusercontent.com/u/8547538?v=4',
      name: 'Bucky Robers',
      bio: 'let me run your errand while you sit back and relax',
      distance: '500m',
      rating: 5,
      recommendations: 15,
    },
    {
      id: 2,
      image: 'https://avatars.githubusercontent.com/u/1500684?v=4',
      name: 'Kent C Dodds',
      bio: "Hello, I'm  i'll be glad to ran your errand. it'll only take a short period of time",
      distance: '2km',
      rating: 4,
      recommendations: 25,
    },
    {
      id: 3,
      image: 'https://avatars.githubusercontent.com/u/20232062?v=4',
      name: 'Aubrey Zulu',
      bio: 'let me run your errand while you sit back and relax',
      distance: '500m',
      rating: 2,
      recommendations: 15,
    },
  ]);

  const getErrandRunners = () => {
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 2000);
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status != 'granted') {
        console.log('Location is disabled');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getErrandRunners();
  });

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color='#FF0099' size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <ErrandRunnerCard item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        endFillColor={'#1681FF'}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setRefreshing(true);
              getErrandRunners;
            }}
            colors={['#FF0099', '#FF5C00']}
            title='reload feed'
            refreshing={refreshing}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: 'white',
  },
  errandRunnerCard: {
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    marginTop: 10,
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
  errandAvatar: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 100,
  },
  errandImage: {
    width: '100%',
    height: 170,
  },
  text: {
    marginBottom: 10,
    color: '#222',
  },
  recommendations: {
    color: '#1681FF',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
  },
});
