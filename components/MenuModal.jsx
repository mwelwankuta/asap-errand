import React, { useContext } from "react";
import {
  View,
  Text,
  Linking,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
  Switch,
} from "react-native";
import ReactModal from "react-native-modalbox";

import Button from "./Button";
import modalContext from "../context/modal";
import userContext from "../context/user";

import { colors, developerEmail } from "../constants";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../context/theme";

function ListItem({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export default function MenuModal() {
  const navigation = useNavigation();
  const { modalVisible, setModalVisible } = useContext(modalContext);
  const { setUser, user } = useContext(userContext);
  const { theme, setTheme } = useContext(themeContext);

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const logout = () => {
    Alert.alert("Logout", "are you sure you want to logout", [
      {
        title: "No",
        onPress: () => null,
      },
      {
        title: "Yes",
        style: "destructive",
        onPress: () => setUser(null),
      },
    ]);
  };

  const share = () => {
    setModalVisible(false);
    Share.share(
      {
        title: "Invite a friend",
        message:
          "Download the app and be able to find someone to ran your errands within minutes. https://play.google.com/store/apps/details?id=com.asaperrand.app",
        url: "https://play.google.com/store/apps/details?id=com.asaperrand.app",
      },
      {
        dialogTitle: "Invite a friend",
        excludedActivityTypes: ["com.apple.UIKit.activity.SaveToCameraRoll"],
      }
    );
  };

  const feedback = async () => {
    setModalVisible(false);
    await Linking.openURL(
      `mailto:${developerEmail}?subject=asap%20errand%20|%20user%20feedback`
    );
  };

  const profile = () => {
    setModalVisible(false);
    navigation.navigate("Profile");
  };

  return (
    <ReactModal
      swipeToClose
      backButtonClose
      backdropPressToClose
      swipeThreshold={50}
      backdropOpacity={0.2}
      position="top"
      isOpen={modalVisible}
      style={styles.container}
      onClosed={() => setModalVisible(false)}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 5,
            width: 100,
            borderRadius: 100,
            backgroundColor: "#ddd",
            padding: 2,
            alignSelf: "center",
            marginTop: 6,
          }}
        ></View>
        <Text style={styles.title}>Menu</Text>
        <TouchableOpacity
          onPress={profile}
          activeOpacity={0.8}
          style={[styles.listItem, styles.user]}
        >
          <View>
            <Image
              source={{ uri: user.image, height: 70, width: 70 }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.account}>
              {user.account && user.account.name}
            </Text>
          </View>
        </TouchableOpacity>
        <ListItem children={<Text>Invite a friend</Text>} onPress={share} />
        <ListItem children={<Text>Give Feedback</Text>} onPress={feedback} />
        <ListItem onPress={feedback}>
          <View style={styles.themeChange}>
            <Text>Dark Mode</Text>
            <View>
              <Switch
                thumbColor={colors.blue}
                trackColor={colors.blue}
                value={theme == "light"}
                onChange={changeTheme}
              />
            </View>
          </View>
        </ListItem>
        <View style={{ height: 40 }}>
          <Button alternative title="Logout" onPress={logout} />
        </View>
      </View>
    </ReactModal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: "auto",
    height: "65%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    marginBottom: 10,
  },
  listItem: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5,
    marginBottom: 10,
    paddingVertical: 10,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
    color: "#222",
  },
  account: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: "#333",
  },
  themeChange: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
