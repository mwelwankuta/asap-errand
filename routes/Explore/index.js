import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Platform,
  View,
  RefreshControl,
} from "react-native";
import * as Location from "expo-location";

import ErrandRunnerCard from "./ErrandRunnerCard";

export default function Explore({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://avatars.githubusercontent.com/u/8547538?v=4",
      name: "Bucky Roberts",
      bio: "let me run your errand while you sit back and relax",
      distance: "500m",
      rating: 5,
      recommendations: 15,
    },
    {
      id: 2,
      image: "https://avatars.githubusercontent.com/u/1500684?v=4",
      name: "Kent C Dodds",
      bio: "Hello, I'm  i'll be glad to ran your errand. it'll only take a short period of time",
      distance: "2km",
      rating: 4,
      recommendations: 25,
    },
    {
      id: 3,
      image: "https://avatars.githubusercontent.com/u/20232062?v=4",
      name: "Aubrey Zulu",
      bio: "let me run your errand while you sit back and relax",
      distance: "500m",
      rating: 2,
      recommendations: 15,
    },
  ]);

  const getErrandRunners = () => {
    setTimeout(() => {
      setRefreshing(false);
      setLoading(false);
    }, 2000);
  };

  const getLocation = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();
    if (status == "denied") {
      return;
    }

    try {
      await Location.requestForegroundPermissionsAsync();
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  useLayoutEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
    getErrandRunners();
  });

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          color="#FF0099"
          size={Platform.OS == "android" ? "large" : "small"}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <ErrandRunnerCard {...item} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setRefreshing(true);
              getErrandRunners;
            }}
            colors={["#FF0099"]}
            title="reload feed"
            refreshing={refreshing}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: "white",
  },
});
