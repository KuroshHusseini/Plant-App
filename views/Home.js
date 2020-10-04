import React from "react";
import List from "../components/List";
import PropTypes from "prop-types";

const Home = ({ navigation }) => {
  // const {navigation} = props;
  // const navigation = props.navigation;

  return <List navigation={navigation} all />;
};

Home.propTypes = {
  navigation: PropTypes.object,
};

export default Home;
