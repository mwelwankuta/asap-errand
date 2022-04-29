import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  RefreshControl,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import RequestRunnerCard from './RequestRunnerCard';

export default function Runner({ data }) {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const getErrandRunners = () => {
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate='normal'
        renderItem={({ item }) => (
          <RequestRunnerCard {...item} navigation={navigation} />
        )}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setRefreshing(true);
              getErrandRunners;
            }}
            colors={['#FF0099', '#FF5C00']}
            title='reload feed'
            refreshing={refreshing}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
    height: Dimensions.get('window').height - 200,
    width: Dimensions.get('window').width,
  },
});
