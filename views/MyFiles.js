/* eslint-disable no-unused-vars */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';

const MyFiles = ({navigation}) => {
  return (
    <View style={styles.container}>
      <List navigation={navigation} all={false} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
});

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
