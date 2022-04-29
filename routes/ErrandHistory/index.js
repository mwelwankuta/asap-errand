import React, { useState, useContext } from 'react';
import {
  Alert,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import userContext from '../../context/user';
import HistoryItem from './HistoryItem';

export default function ErrandHistory() {
  const { user } = useContext(userContext);

  const [errands, setErrands] = useState([
    {
      id: 1,
      hirer_name: 'Mwelwa Nkuta',
      hirer_image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
      amount: 14,
      description: 'talk to john about my mouse and come back with it',
      runner_name: 'Peter Books',
      runner_image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
    },
    {
      id: 2,
      hirer_name: 'Mwelwa Nkuta',
      hirer_image: 'https://avatars.githubusercontent.com/u/9113740?v=4',
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
      renderItem={({ item }) => <HistoryItem {...item} />}
      ListHeaderComponent={() => (
        <View style={styles.titleHolder}>
          <Text style={styles.title}>
            Previous{' '}
            {user.account && user.account.type == 'standard'
              ? 'errand runners'
              : 'hirers'}
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
