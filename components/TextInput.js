import React from 'react';
import {StyleSheet} from 'react-native';

const TextInput = () => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default TextInput;
