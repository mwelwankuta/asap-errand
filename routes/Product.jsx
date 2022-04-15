import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../constants';

export default function Product({ route }) {
  const { market, name, image, description, amount } = route.params;
  const questionBudget = () => {
    Alert.alert(
      'Do you want to add to monthly budget',
      'you can always remove items later',
      [
        {
          text: 'Monthly',
          onPress: () => null,
        },
        {
          text: 'Daily',
          onPress: () => null,
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View>
          <Image style={styles.productImage} source={{ uri: image }} />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.location}>
            <MaterialIcons name='location-pin' size={24} color='#333' />
            <Text style={styles.locationText}>{market}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.amount}>K{amount}</Text>
          <View style={styles.buttonsHolder}>
            <TouchableOpacity style={styles.buyButton} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={questionBudget}
              style={styles.addButton}
              activeOpacity={0.8}>
              <Text style={styles.buttonText}>Add to Budget</Text>
            </TouchableOpacity>
          </View>
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
  productImage: {
    width: '100%',
    height: 250,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    color: '#333',
    marginTop: 10,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontWeight: '700',
    color: '#333',
  },
  description: {
    marginVertical: 7,
    fontSize: 16,
    color: '#777',
  },
  amount: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 40,
  },
  buttonsHolder: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buyButton: {
    padding: 10,
    backgroundColor: colors.purpleColor,
    width: '46%',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
    flex: 1,
  },
  addButton: {
    padding: 10,
    backgroundColor: colors.blueColor,
    width: '46%',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
