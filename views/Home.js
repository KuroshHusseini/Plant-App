
import React from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';
import {StyleProvider} from 'native-base';
import getTheme from '../theme/components';
import material from '../theme/variables/material';


const Home = ({navigation}) => {
  // const {navigation} = props;
  // const navigation = props.navigation;
  return (
    <StyleProvider style = {getTheme(material)}>

      <List navigation={navigation} all />

    </StyleProvider>
  );
};

Home.propTypes = {
  navigation: PropTypes.object,
};


export default Home;
