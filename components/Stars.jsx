import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgXml as Svg } from 'react-native-svg';

import star from '../assets/icons/star.svg';
import star_outline from '../assets/icons/star_outline.svg';

export default function Stars({ rating }) {
  const stars = [];
  const outlinedStars = [];

  for (let i = 0; i < rating; i++) stars.push(1);
  for (let i = 0; i < 5 - stars.length; i++) outlinedStars.push(1);

  if (rating < 5) {
    return (
      <View style={styles.stars}>
        {stars.map((_, key) => {
          return <Svg key={key} xml={star} width={15} height={15} />;
        })}
        {outlinedStars.map((_, key) => (
          <Svg key={key} xml={star_outline} height={15} width={15} />
        ))}
      </View>
    );
  }

  return (
    <View style={styles.stars}>
      {stars.map((_, key) => {
        return <Svg key={key} xml={star} width={15} height={15} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
});
