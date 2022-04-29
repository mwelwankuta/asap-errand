import React, {useContext} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import userContext from "../../context/user";

export default function RunnerView() {
  const { user } = useContext(userContext);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
