import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Stars } from "../../components";

export default function ErrandRunnerCard({
  distance,
  bio,
  image,
  name,
  rating,
  recommendations,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate("Runner", {
            distance,
            bio,
            image,
            name,
            rating,
            recommendations,
          });
        }}
        style={styles.upperContent}
      >
        <View>
          <Image
            source={{ uri: image, width: 40, height: 40 }}
            style={styles.errandAvatar}
          />
        </View>
        <View>
          <View>
            <Text style={styles.name}>
              {name}
              {" • "}
              {distance}
            </Text>
          </View>
          <View>
            <Stars rating={rating} />
          </View>
        </View>
      </TouchableOpacity>
      <Image
        resizeMethod="resize"
        resizeMode="cover"
        source={{
          uri: image,
          height: undefined,
          width: "100%",
          cache: "reload",
        }}
        style={styles.errandImage}
      />
      <View style={styles.contentHolder}>
        <View style={styles.text}>
          <Text style={styles.bio}>{bio}</Text>
        </View>
        <View style={{ marginBottom: 5 }}>
          <Button
            onPress={() =>
              navigation.navigate("Request", {
                title: name,
                name,
                rating,
                recommendations,
                distance,
                image,
                bio,
              })
            }
            loading={false}
            title="Request"
          />
        </View>
        <Text style={styles.recommendations}>
          {recommendations}{" "}
          {recommendations == 1 ? "recommendation" : "recommendations"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
  name: {
    fontFamily: "Inter-Medium",
    color: "#222",
    fontSize: 16,
  },
  ratingHolder: {
    flexDirection: "row",
  },
  upperContent: {
    paddingHorizontal: 15,
    padding: 5,
    flexDirection: "row",
  },
  contentHolder: {
    padding: 15,
  },
  errandImage: {
    backgroundColor: "#000",
    height: undefined,
    width: "100%",
    aspectRatio: 2 / 1,
  },
  errandAvatar: {
    marginRight: 10,
    borderRadius: 100,
  },
  text: {
    marginBottom: 10,
    color: "#222",
  },
  recommendations: {
    color: "#888",
    fontFamily: "Inter-Regular",
    fontSize: 13,
  },
  bio: {
    fontFamily: "Inter-Regular",
    color: "#222",
  },
});
