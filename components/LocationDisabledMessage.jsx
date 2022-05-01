import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Location from "expo-location";
import { colors } from "../constants";

function EnableLocationButton() {
  return (
    <Pressable
      activeOpacity={0.5}
      onPressOut={async () =>
        await Location.requestForegroundPermissionsAsync()
      }
    >
      <Text style={styles.buttonText}>enable it</Text>
    </Pressable>
  );
}

export default function LocationDisabledMessage() {
  const [locationDenied, setLocationDenied] = useState(false);

  useEffect(async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status == "denied") {
        return setLocationDenied(true);
      }
      setLocationDenied(false)
    } catch (error) {
      setLocationDenied(true);
    }
  }, []);

  if (!locationDenied) return <></>;
  else
    return (
      <View stylele={styles.container}>
        <Text style={styles.text}>
          Access to your device's location has been denied, enable it from
          settings
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    fontFamily: "Inter-Medium",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    color: "#222",
    backgroundColor: "white",
    padding: 5,
  },
  buttonText: {
    fontFamily: "Inter-Medium",
    color: colors.blue,
  },
});
