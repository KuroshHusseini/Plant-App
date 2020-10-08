/* eslint-disable no-unused-vars */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import {Container} from 'native-base';

const MyFiles = ({navigation}) => {
  return (
    <Container>
      <List navigation={navigation} all={false} />
      <StatusBar style="auto" />
    </Container>
  );
};

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
