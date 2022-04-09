import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Fragment, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import { cards, categories, colors } from '../constants';

const Card = ({ idx, title, icon, color = 'white' }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[
      styles.card,
      { backgroundColor: color, marginRight: idx != 1 || idx != 3 ? 10 : 0 },
    ]}>
    <Fragment>
      {icon}
      <Text style={styles.cardText}>{title}</Text>
    </Fragment>
  </TouchableOpacity>
);

const CategoryItem = ({ icon, name }) => (
  <TouchableOpacity style={styles.categoryItem} activeOpacity={0.8}>
    <Fragment>
      <View style={styles.categoryCardIcon}>{icon}</View>
      <Text style={styles.categoryCardText}>{name}</Text>
    </Fragment>
  </TouchableOpacity>
);

const FeaturedCard = ({ id, title, description, price, image }) => (
  <TouchableOpacity style={styles.featuredCard} activeOpacity={0.8}>
    <Fragment>
      <View style={styles.featuredCardImageHolder}>
        <Image
          style={styles.featuredImage}
          source={{ uri: image }}
          resizeMode='cover'
          width={120}
          height={120}
        />
      </View>
      <View style={styles.featuredCardInfo}>
        <Text style={styles.featuredName}>{title}</Text>
        <Text style={styles.featuredDescription}>{description}</Text>
        <Text style={styles.featuredPrice}>K{price}</Text>
        <View>
          <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
            <MaterialCommunityIcons name='plus' color='white' size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  </TouchableOpacity>
);

export default function Home() {
  const [featured, setFeatured] = useState([
    {
      id: 1,
      title: 'Cabbage',
      description: 'Straight from the garden, fresh as seen',
      price: '10',
      image:
        'https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=8AzBHNDN',
    },
    {
      id: 2,
      title: 'Tomatoes',
      description: 'Fresh tomatoes from the garden',
      price: '8',
      image:
        'https://extension.umn.edu/sites/extension.umn.edu/files/styles/crop_featured_image_crop/public/Solanum-lycopersicum-Crista-fruit1-%281%29.jpg?h=943b9640&itok=Rev7Bp-K',
    },
    {
      id: 3,
      title: 'Carrots',
      description: 'Fresh carrots from the garden',
      price: '5',
      image: 'https://thumbs.dreamstime.com/b/carots-market-29328226.jpg',
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.cardHolder}>
          {cards.map(({ title, icon, color }, idx) => (
            <Card key={idx} idx={idx} icon={icon} title={title} color={color} />
          ))}
        </View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categoryHolder}>
          {categories.map(({ name, icon }, idx) => (
            <CategoryItem key={idx} icon={icon} name={name} />
          ))}
        </View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.featuredHolder}>
          {featured.map(({ title, image, description, price, id }, idx) => (
            <FeaturedCard
              key={id}
              image={image}
              title={title}
              description={description}
              price={price}
              id={id}
            />
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
  cardHolder: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    maxWidth: 400,
    borderBottomColor: '#eee',
    borderBottomWidth: 4,
    paddingBottom: 20,
  },
  card: {
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    width: '47%',
    marginBottom: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  categoryHolder: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 4,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    color: '#555',
    fontSize: 18,
    marginTop: 10,
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
  featuredHolder: {},
  featuredCard: {
    flexDirection: 'row',
    padding: 10,
  },
  featuredCardImageHolder: {
    marginRight: 12,
  },
  featuredImage: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
  featuredCardInfo: {
    flex: 1,
  },
  featuredDescription: {
    color: '#555',
    fontSize: 13,
  },
  featuredPrice: {
    fontSize: 18,
    color: 'orange',
    fontWeight: '700',
    flex: 1,
  },
  addBtn: {
    backgroundColor: colors.blueColor,
    borderRadius: 100,
    padding: 2,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
