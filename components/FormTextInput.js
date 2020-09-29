import React from "react";
import PropTypes from "prop-types";
import { Item, Input, View, Label } from "native-base";
import Color from "../constants/Colors";
const FormTextInput = ({ style, error, ...otherProps }) => {
  return (
    <View
      style={{
        height: 40,

        borderBottomWidth: 1,
        borderColor: Color.rose,
        marginBottom: 5,
        paddingBottom: 10,
      }}
    >
      <Item >
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
