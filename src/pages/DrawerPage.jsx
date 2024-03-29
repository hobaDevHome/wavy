import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/constants';
import {CartIcon, ListIcon, FavListIcon, LogOutIcon} from '../utils/icons';
import {Divider, Avatar} from 'react-native-paper';
import {signOut} from 'firebase/auth';
import {auth} from '../../config/firebase';
import useAuth from '../hooks/useAuth';

const DrawerPage = ({navigation}) => {
  const {user} = useAuth();
  const logout = async () => {
    await signOut(auth);
    navigation.navigate('Login');
  };
  return (
    <View>
      <View style={styles.avatarview}>
        <Avatar.Text size={64} label="HA" />
        <Divider />
      </View>
      <TouchableOpacity
        style={styles.listItemBox}
        onPress={() => navigation.navigate('ProductsHome')}>
        <View style={styles.iconBox}>
          <ListIcon color={colors.darkGreen} size={30} />
        </View>
        <Text style={styles.itemText}>Products List</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={styles.listItemBox}
        onPress={() => navigation.navigate('Favorites')}>
        <View style={styles.iconBox}>
          <FavListIcon color={colors.darkGreen} size={30} />
        </View>
        <Text style={styles.itemText}>Favorite List</Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={styles.listItemBox}
        onPress={() => navigation.navigate('Cart')}>
        <View style={styles.iconBox}>
          <CartIcon color={colors.darkGreen} size={30} />
        </View>
        <Text style={styles.itemText}>Cart </Text>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.listItemBox} onPress={logout}>
        <View style={styles.iconBox}>
          <LogOutIcon color={colors.darkGreen} size={30} />
        </View>
        <Text style={styles.itemText}>Log out</Text>
      </TouchableOpacity>

      <Divider />
    </View>
  );
};

export default DrawerPage;

const styles = StyleSheet.create({
  avatarview: {
    padding: 20,
    display: 'flex',
    height: 150,
    justifyContent: 'space-between',
  },
  listItemBox: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    color: colors.balck,
    marginLeft: 10,
  },
  iconBox: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
