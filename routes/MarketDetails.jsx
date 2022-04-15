import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// import { getProducts } from '../api';
import { categories, colors } from '../constants';

const Product = props => {
  const { id, market, image, name, description, amount, navigation } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Product', {
          id,
          market,
          name,
          image,
          description,
          amount,
        })
      }
      activeOpacity={0.8}
      style={[styles.product, { marginLeft: id % 2 == 0 ? 28 : 0 }]}>
      <View>
        <Image source={{ uri: image }} style={styles.productImage} />
      </View>
      <View>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDesc}>{description}</Text>
        <Text style={styles.amount}>K{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function MarketDetails({ route, navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Cabbage',
      description: 'fresh as seen',
      amount: 10,
      category: 'Groceries',
      image:
        'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=8AzBHNDN',
    },
    {
      id: 2,
      name: 'Cabbage',
      description: 'fresh as seen',
      category: 'Groceries',
      amount: 10,
      image:
        'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=8AzBHNDN',
    },
    {
      id: 3,
      name: 'Cabbage',
      description: 'fresh as seen',
      amount: 10,
      category: 'Groceries',
      image:
        'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=8AzBHNDN',
    },
  ]);
  const { name, id } = route.params;

  const get = async () => {
    // const data = await getProducts(id);
    // setProducts(data.json());
  };

  useEffect(() => get(), []);
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Products in {name}</Text>
        <View style={styles.categories}>
          {categories.map(({ icon, name }) => (
            <TouchableOpacity
              key={name}
              style={[
                styles.categoryItem,
                {
                  borderColor:
                    selectedCategory == name
                      ? colors.purpleColor
                      : 'transparent',
                  borderBottomWidth: selectedCategory == name ? 2 : 0,
                },
              ]}
              activeOpacity={0.8}
              onPress={() => setSelectedCategory(name)}>
              <Fragment>
                <View style={styles.categoryCardIcon}>{icon}</View>
                <Text style={styles.categoryCardText}>{name}</Text>
              </Fragment>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.productHolder}>
          {products.map(props => (
            <Fragment>
              {selectedCategory == 'All' ? (
                <Product
                  key={props.id}
                  {...props}
                  navigation={navigation}
                  market={name}
                />
              ) : props.category == selectedCategory ? (
                <Product
                  key={props.id}
                  {...props}
                  navigation={navigation}
                  market={name}
                />
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
  categories: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryHolder: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 4,
    paddingBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginBottom: 5,
    width: '25%',
  },
  categoryCardText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  categoryCardIcon: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 100,
  },
  productHolder: {
    marginTop: 40,
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
  product: {
    width: '45%',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  productName: {
    fontWeight: '700',
    color: '#333',
    fontSize: 16,
    marginTop: 5,
  },
  productDesc: {
    fontSize: 12,
    color: '#444',
  },
  amount: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 15,
  },
});
