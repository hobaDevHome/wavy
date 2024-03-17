import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants';
import {ArrowRidhtDouble} from '../utils/icons';
import cta from '../images/CTA.png';

const AddToCartBtn = ({price}) => {
  return (
    <View style={styles.cont}>
      <Image source={cta} style={styles.cta} />
      <View style={styles.textrow}>
        <Text style={styles.price}>AddToCartBtn</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

export default AddToCartBtn;

const styles = StyleSheet.create({
  cont: {
    position: 'relative',
  },
  cta: {
    width: 340,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    objectFit: 'cover',
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  textrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: 270,
    left: 50,
    top: 35,
    paddign: 0,
  },
  price: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: -18,
  },
});
