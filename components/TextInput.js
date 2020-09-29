import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Color from "../constants/Colors";

const TextInput = (props) => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default TextInput;
