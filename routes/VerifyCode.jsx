import React from "react";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "../components";
import { inputStyle } from "../constants";

export default function VerifyCode({ route, navigation }) {
  const { phone, code } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        validate={({ code }) => {
          const errors = {};
          if (!code) errors.code = "a code is needed to continue";
          else if (code.length < 4) errors.code = "invalid verification code";
          return errors;
        }}
        onSubmit={() => {
          navigation.navigate("LoginDetails");
        }}
        initialValues={{ code: "" }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <View>
            <Text style={styles.title}>Verify Code</Text>
            <Text style={styles.description}>
              a code has been sent to {code} {phone} enter it to continue
            </Text>
            <View style={styles.inputHolder}>
              <TextInput
                keyboardType="phone-pad"
                textContentType="oneTimeCode"
                autoComplete="sms-otp"
                placeholder="Code"
                maxLength={4}
                autoFocus
                onChangeText={handleChange("code")}
                onBlur={handleBlur("code")}
                value={values.code}
                style={
                  errors.code
                    ? [inputStyle, { borderColor: "red" }]
                    : inputStyle
                }
              />
              <Text style={styles.errorText}>
                {touched.code ? errors.code : ""}
              </Text>
              <TouchableOpacity style={styles.resend}>
                <Text>Didn't receive a code? </Text>
                <Text style={styles.resendText}>Resend Code</Text>
              </TouchableOpacity>
            </View>
            <Button title="Verify Code" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 20,
  },
  description: {
    marginBottom: 10,
    fontFamily: "Inter-Regular",
    color: "#555",
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    color: "#222",
  },
  formHolder: {
    marginTop: 20,
  },
  tip: {
    fontFamily: "Inter-Regular",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10,
    color: "#555",
  },
  inputLabel: {
    fontSize: 13,
    fontFamily: "Inter-Regular",
    marginBottom: 10,
    marginTop: 15,
  },
  inputHolder: {
    marginBottom: 10,
  },
  country: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  errorText: {
    fontFamily: "Inter-Regular",
    fontSize: 13,
    color: "red",
  },
  resend: {
    flexDirection: "row",
    margin: 2,
  },
  resendText: {
    color: "#1681FF",
    marginLeft: 4,
  },
});
