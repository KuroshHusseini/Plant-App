import React from "react";
import PropTypes from "prop-types";
import { Item, Input, View, Label } from "native-base";

const FormTextInput = ({ style, error, ...otherProps }) => {
  return (
    <View style={{margin: 0}}>
      <Item>
        <Input {...otherProps} />
      </Item>
      {error !== "" && <Label>{error}</Label>}
    </View>
  );
};


FormTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
};

export default FormTextInput;
