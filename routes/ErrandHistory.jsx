import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import userContext from '../context/user';

function HistoryItem({ item }) {
  const { user } = useContext(userContext);
  const { runner_name, runner_image, hirer_image, description, amount } = item;

  return (
    <View style={styles.listItem}>
      <View style={styles.imageHolder}>
        <Image
          source={{
            uri: user.account == 'standard' ? runner_image : hirer_image,
            height: 50,
            width: 50,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsHolder}>
        <Text style={styles.name}>
          {user.account == 'standard' ? runner_name : hirer_image}
          {' • '}
          <Text style={{ fontFamily: 'Inter-SemiBold' }}> {amount} Tokens</Text>
        </Text>
        <Text style={styles.description}>
          {user.account == 'standard' ? description : ''}
        </Text>
      </View>
    </View>
  );
}

export default function ErrandHistory() {
  const { user } = useContext(userContext);

  const [errands, setErrands] = useState([
    {
      id: 1,
      hirer: 'Mwelwa Nkuta',
      hirer_image: '',
      amount: 14,
      description: 'talk to john about my mouse and come back with it',
      runner_name: 'Peter Books',
      runner_image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
    },
    {
      id: 2,
      hirer: 'Mwelwa Nkuta',
      hirer_image: '',
      amount: 10,
      description:
        'go and tell the people building my wall, to build it faster',
      runner_name: 'Donald Trump',
      runner_image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
    },
  ]);

  const showAlert = () => {
    Alert.alert(
      'Clear history',
      'are you sure you want to clear your history, you might need it later',
      [
        { text: 'Yes', onPress: () => null, style: 'destructive' },
        { text: 'No', onPress: () => null, style: 'cancel' },
      ]
    );
  };


  return (
    <FlatList
      data={errands}
      style={styles.container}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <View style={styles.titleHolder}>
          <Text style={styles.title}>
            Previous {user.account == 'standard' ? 'errand runners' : 'hirers'}
          </Text>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={showAlert}
              style={styles.clearButton}>
              <Text style={styles.clearText}>clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      renderItem={({ item }) => <HistoryItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
  titleHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#222',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 0.5,
    paddingVertical: 5,
  },
  imageHolder: {
    marginRight: 5,
  },
  image: {
    borderRadius: 100,
  },
  detailsHolder: {
    flex: 1,
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: 15,
    color: '#222',
  },
  description: {
    color: '#333',
    fontSize: 13,
    overflow: 'visible',
  },
  clearButton: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: '#ddd',
    borderRadius: 100,
  },
  clearText: {
    fontFamily: 'Inter-Regular',
    color: '#222',
    fontSize: 13,
  },
});
