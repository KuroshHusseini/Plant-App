
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import {Container} from 'native-base';

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

export default Favorites;
