import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../utils/constants';

import {useDispatch, useSelector} from 'react-redux';

import {addItem, decreaseItemQuantity, deleteItem} from '../redux/cartSlice';
import {DeleteIcon} from '../utils/icons';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const {cartItems} = useSelector(state => state.cart);
  const handleAddToCart = () => {
    dispatch(addItem(item));
  };
  const handleRmoveFromCart = () => {
    dispatch(decreaseItemQuantity(item));
  };
  const deleteItemFromCart = () => {
    dispatch(deleteItem(item.id));
  };
  return (
    <View style={styles.cont}>
      <View>
        <Image source={{uri: item.image}} style={styles.itemImage} />
      </View>
      <View style={styles.rightcol}>
        <View style={styles.itemdetails}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemprice}>${item.price}</Text>
        </View>
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={deleteItemFromCart} style={styles.iconBox}>
            <DeleteIcon color={colors.maroon} size={20} />
          </TouchableOpacity>

          <View style={styles.counter}>
            <TouchableOpacity onPress={handleRmoveFromCart}>
              <Text style={styles.add}>-</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={handleAddToCart}>
              <Text style={styles.add}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cont: {
    width: 350,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#dee7e4',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    objectFit: 'cover',
  },
  rightcol: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  itemdetails: {
    display: 'flex',
    marginLeft: 10,
  },
  counter: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    width: 75,
    height: 25,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  add: {
    fontSize: 20,
    color: colors.darkGreen,
    marginHorizontal: 5,
  },
  itemTitle: {
    fontSize: 16,
    color: colors.balck,
    marginBottom: 5,
  },
  itemprice: {
    fontSize: 18,
    color: colors.darkGreen,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});
