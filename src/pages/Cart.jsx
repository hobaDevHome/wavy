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
import {DeleteIcon} from '../utils/icons';

import CartItem from '../components/CartItem';
import logo from '../images/logo.png';
import noitems from '../images/noitems3.png';

import {useDispatch, useSelector} from 'react-redux';

import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  resetCart,
} from '../redux/cartSlice';

const Cart = () => {
  const [total, settotal] = useState(0);

  const dispatch = useDispatch();

  const {cartItems} = useSelector(state => state.cart);
  const {totalAmount} = useSelector(state => state.cart);

  return (
    <ScrollView contentContainerStyle={styles.cont}>
      <View style={styles.cont1}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textbox}>
          <Text style={styles.cartTitlte}>Your Cart</Text>
        </View>

        {!cartItems || cartItems.length === 0 ? (
          <>
            <Image source={noitems} style={styles.noitems} />
          </>
        ) : (
          <>
            {cartItems.map(item => {
              return (
                <View key={item.id}>
                  <CartItem item={item} />
                </View>
              );
            })}
            <View style={styles.totalView}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>${totalAmount}</Text>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.btntext}>Proceed to checkout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cont: {
    display: 'flex',

    backgroundColor: 'white',
    height: '100%',
    flex: 1,
    borderColor: 'red',
  },
  cont1: {
    display: 'flex',

    alignItems: 'center',
    backgroundColor: 'white',
  },
  totalView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginTop: 20,
  },
  totalText: {fontSize: 24, fontWeight: 'bold', color: colors.balck},
  itemImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    objectFit: 'cover',
  },
  totalPrice: {fontSize: 24, fontWeight: 'bold', color: colors.darkGreen},
  loginBtn: {
    width: 320,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.darkGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  btntext: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  cartTitlte: {
    fontSize: 24,
    color: colors.balck,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  textbox: {
    display: 'flex',

    width: 320,
    marginTop: 20,
  },
  noitemstext: {
    fontSize: 24,
    padding: 10,
  },
  logo: {
    width: 100,
    height: 60,
    objectFit: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  noitems: {
    width: 350,
    height: 350,
    objectFit: 'contain',
    alignSelf: 'center',
  },
});
