import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SvgXml as Svg } from 'react-native-svg';
import userContext from '../context/user';

import empty_illustration from '../assets/images/empty_illustration.svg';

export default function Messages() {
  const { user } = useContext(userContext);

  if (user && user.errand_in_progress) {
    const { name, image } = user && user.errand;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View>
            <Image
              source={{
                uri: image,
                cache: 'reload',
                width: 100,
                height: 100,
              }}
              style={styles.profile}
            />
          </View>
          <Text style={styles.name}>{name}</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <View
      style={[
        styles.container,
        { alignItems: 'center', justifyContent: 'center' },
      ]}>
      <Svg xml={empty_illustration} width={'50%'} height={'25%'} />
      <Text style={styles.noMessageLabel}>No Messages</Text>
      <Text style={styles.noMessageDescription}>
        you have no errand request in progress
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noMessageLabel: {
    marginTop: 10,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#222',
  },
  noMessageDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  profile: {
    borderRadius: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  name: {
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
  },
});
