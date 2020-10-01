
import React from 'react';
import PropTypes from 'prop-types';
import {Item, Input, View, Label, StyleProvider} from 'native-base';
import material from '../theme/variables/material';
import getTheme from '../theme/components';

const FormTextInput = ({style, error, ...otherProps}) => {
  return (
    <StyleProvider style = {getTheme(material)}>
      <View style={{margin: 0}}>
        <Item>
          <Input {...otherProps} />
        </Item>
        {error !== '' && <Label>{error}</Label>}
      </View>
    </StyleProvider>


FormTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
};

export default FormTextInput;
