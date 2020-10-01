/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';
import {StyleProvider} from 'native-base';
import getTheme from '../theme/components';

const MyFiles = ({navigation}) => {
  return (
    <StyleProvider style = {getTheme(material)}>
      <List navigation={navigation} all={false} />
      <StatusBar style="auto" />
    </StyleProvider>
  );
};


MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
