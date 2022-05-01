import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LocationItem from "./LocationItem";

import { inputStyle } from "../../constants";

export default function SearchLocation({ navigation, route }) {
  const { pickup, destination } = route.params;
  const inputPlaceholder = pickup ? pickup : destination;

  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([
    {
      id: 1,
      name: "Pep stores",
      location: "Mbala, Zambia",
      coordinates: {
        longitude: "0.00000",
        latitude: "1.00000",
      },
    },
    {
      id: 2,
      name: "Mbala School of Nursing",
      location: "Mbala, Zambia",
      coordinates: {
        longitude: "0.00000",
        latitude: "1.00000",
      },
    },
    {
      id: 3,
      name: "Mbala Secondary School",
      location: "Mbala, Zambia",
      coordinates: {
        longitude: "0.00000",
        latitude: "1.00000",
      },
    },
  ]);

  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.id}
      data={locations}
      ListHeaderComponentStyle={styles.listHeader}
      ListHeaderComponent={() => (
        <View activeOpacity={0.8} style={[inputStyle, { height: 50 }]}>
          <View style={styles.inputContent}>
            <TextInput
              value={searchTerm}
              style={styles.input}
              onChangeText={setSearchTerm}
              textContentType="location"
              placeholder={inputPlaceholder}
            />
            <TouchableOpacity
              style={styles.mapButton}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("Map", {
                  ...route.params,
                  title: "Pick-up point",
                  title_key: "pickup",
                })
              }
            >
              <MaterialIcons name="location-pin" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      )}
      renderItem={({ item }) => (
        <LocationItem
          location={item.location}
          name={item.name}
          coordinates={item.coordinates}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listHeader: {
    marginBottom: 20,
  },
  mapButton: {
    padding: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  inputContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
});
