import React, { useState, useEffect } from 'react';
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

export default function Category({ navigation, route }) {
  const { name } = route.params;
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Bic Pens',
      description: 'Discount K7 2 cases',
      amount: '50',
      market: 'Soweto',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/2e/d4/6f/new-soweto-market.jpg?w=1200&h=-1&s=1',
    },
    {
      id: '2',
      name: 'A4 Paper',
      description: 'K50 per box',
      amount: '70',
      market: 'Soweto',
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/2e/d4/6f/new-soweto-market.jpg?w=1200&h=-1&s=1',
    },
    {
      id: '3',
      name: 'Cabbage',
      description: 'fresh as seen',
      amount: 10,
      market: 'Soweto Market',
      image:
        'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=8AzBHNDN',
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
        <Text style={styles.title}>{name} Category</Text>
        <View>
          {products.map(({ id, image, amount, description, market, name }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MarketStack', {
                  screen: 'Product',
                  params: {
                    id,
                    name,
                    amount,
                    description,
                    market,
                    image,
                  },
                })
              }
              style={styles.marketItem}
              key={id}
              activeOpacity={0.8}>
              <View style={styles.marketImageHolder}>
                <Image style={styles.marketImage} source={{ uri: image }} />
              </View>
              <View>
                <Text style={styles.marketName}>{name}</Text>
                <Text style={styles.marketAmount}>K{amount}</Text>
                <Text style={styles.marketLocation}>{market}</Text>
              </View>
            </TouchableOpacity>
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
    marginVertical: 20,
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
    marginRight: 15,
    marginBottom: 10,
  },
  marketImage: {
    width: 100,
    height: 100,
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
  marketAmount: {
    fontWeight: '700',
    fontSize: 18,
  },
});
