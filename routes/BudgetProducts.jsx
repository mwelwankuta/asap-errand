import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../constants';

export default function BudgetProducts({ navigation }) {
  const [budgets, setBudget] = useState([
    {
      id: '1',
      name: 'Cabbage',
      category: 'Groceries',
      market: 'Soweto',
      image:
        'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=8AzBHNDN',
      description: 'nice as seen',
      amount: '10',
    },
    {
      id: '2',
      name: 'Tomatoes',
      description: 'nice as seen',
      market: 'New Market',
      category: 'Groceries',
      image:
        'https://extension.umn.edu/sites/extension.umn.edu/files/styles/crop_featured_image_crop/public/Solanum-lycopersicum-Crista-fruit1-%281%29.jpg?h=943b9640&itok=Rev7Bp-K',
      amount: '2',
    },
  ]);

  const get = async () => {
    // get budget product
  };

  useEffect(() => get(), []);
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Products in my Budget</Text>
        <View style={styles.budgetHolder}>
          {budgets.map(({ id, image, name, market, amount, description }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MarketStack', {
                  screen: 'Product',
                  params: {
                    id,
                    image,
                    market,
                    name,
                    amount,
                    description,
                  },
                })
              }
              key={id}
              style={styles.budgetItem}
              activeOpacity={0.8}>
              <View style={styles.imageHolder}>
                <Image source={{ uri: image }} style={styles.image} />
              </View>
              <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.amount}>K{amount}</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  activeOpacity={0.8}>
                  <MaterialIcons name='close' color='white' size={25} />
                </TouchableOpacity>
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
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.purpleColor,
    textAlign: 'center',
    marginTop: 20,
  },
  budgetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  imageHolder: {
    marginRight: 10,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  details: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontWeight: '700',
    color: '#333',
    fontSize: 16,
    flex: 1,
  },
  amount: {
    fontWeight: '700',
    color: '#333',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#333',
    borderColor: '#222',
    borderWidth: 2,
    borderRadius: 100,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
});
