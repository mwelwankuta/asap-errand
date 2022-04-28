import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Button, Stars } from '../components';

export default function Runner({ route, navigation }) {
  const { distance, bio, image, name, rating, recommendations } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Image
            source={{ uri: image, width: 100, height: 100 }}
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.starsHolder}>
          <Stars rating={rating} />
        </View>
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
        <Text style={styles.recommendations}>
          {recommendations}{' '}
          {recommendations == 1 ? 'recommendation' : 'recommendations'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    backgroundColor: '#ddd',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
  bio: {
    fontFamily: 'Inter-Regular',
    color: '#222',
    textAlign: 'center',
  },
  starsHolder: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  recommendations: {
    color: '#888',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    marginTop: 10,
  },
});
