import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import Color from "../constants/Colors";

const Custombtn = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Color.green,
    paddingVertical: 10,
    paddingHorizontal: 10,

    alignItems: "center",
    borderRadius: 10,
  },
  btnText: {
    alignItems: "center",
    color: "white",
    fontSize: 15,
  },
});

export default Custombtn;
