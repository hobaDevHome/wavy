import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {tempImages} from '../utils/data';

const ItemGallery = () => {
  return (
    <View style={styles.cont}>
      <Image source={tempImages[0]} style={styles.image} />
    </View>
  );
};

export default ItemGallery;

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    margin: 20,
  },
  image: {
    width: 350,
    height: 400,
    objectFit: 'cover',
  },
});
