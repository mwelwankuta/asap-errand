import React, { useState, useEffect, Fragment } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { getMarkets } from '../api';
import { colors } from '../constants';

export default function Market({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [markets, setMarkets] = useState([
    {
      id: '1',
      name: 'Soweto Market',
      location: 'Lusaka',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/2e/d4/6f/new-soweto-market.jpg?w=1200&h=-1&s=1',
    },
  ]);

  // get markets
  const get = async () => {
    // const response = await getMarkets();
    // if (response.ok) setMarkets(response.json());
  };

  useEffect(() => get(), []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Available Markets</Text>
        <View style={styles.input}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            style={{ padding: 8 }}
            placeholder='Search for market...'
          />
        </View>
        <View>
          {markets.map(({ id, image, location, name }) => (
            <Fragment>
              {name.toLowerCase().includes(searchText.toLowerCase()) ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MarketDetails', { name, id })
                  }
                  style={styles.marketItem}
                  key={id}
                  activeOpacity={0.8}>
                  <View style={styles.marketImageHolder}>
                    <Image style={styles.marketImage} source={{ uri: image }} />
                  </View>
                  <View>
                    <Text style={styles.marketName}>{name}</Text>
                    <Text style={styles.marketLocation}>{location}</Text>
                  </View>
                </TouchableOpacity>
              ) : null}
            </Fragment>
          ))}
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
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.purpleColor,
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1.8,
    borderRadius: 15,
    marginVertical: 10,
  },
  marketItem: {
    flexDirection: 'row',
    flex: 1,
  },
  marketImageHolder: {
    marginRight: 10,
    marginBottom: 10,
  },
  marketImage: {
    width: 120,
    height: 120,
    borderRadius: 4,
    backgroundColor: 'black',
  },
  marketName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  marketLocation: {
    color: '#333',
  },
});
