/* eslint-disable no-undef */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ImageIcon = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={require('../assets/img/holdingPlant.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 80,
    margin: 20,
  },

  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  img: {
    height: 200,
    width: 200,
  },
});

export default ImageIcon;
