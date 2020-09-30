/* eslint-disable max-len */
import React, {useContext} from 'react';
import {
  FlatList,
} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import {useLoadMedia} from '../hooks/APIhooks';
import {AuthContext} from '../contexts/AuthContext';
import {StyleProvider, Container} from 'native-base';
import getTheme from '../theme/components';
import material from '../theme/variables/material';
const List = ({navigation, all}) => {
  const {user} = useContext(AuthContext);
  // console.log(user);
  const mediaArray = useLoadMedia(all, user.user_id);

  return (
    <StyleProvider style = {getTheme(material)}>
      <Container>
        <FlatList
          data={mediaArray}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
            <ListItem singleMedia={item} navigation={navigation} editable={!all}/>
          }
        />
      </Container>
    </StyleProvider>
  );
};

List.propTypes = {
  navigation: PropTypes.object,
  all: PropTypes.bool,
};

export default List;
