import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View,Text } from "react-native";
import List from "../components/List";
import PropTypes from "prop-types";
import { StyleProvider } from "native-base";

const Favorites = ({ navigation }) => {
<View style={styles.container}>
<Text>Favorites Screen</Text>
</View>
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});

Favorites.propTypes = {
  navigation: PropTypes.object,
};

export default Favorites;
