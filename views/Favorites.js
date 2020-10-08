/* eslint-disable no-unused-vars */
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import StyleProvider, {Container} from 'native-base';
import getTheme from '../theme/components';
import materialTwo from '../theme/variables/materialTwo';

const Favorites = ({navigation}) => {
  return (
    <Container>
      <List navigation={navigation} all={false} />
      <StatusBar style="auto" />
    </Container>
  );
};

Favorites.propTypes = {
  navigation: PropTypes.object,
};

export default Favorites