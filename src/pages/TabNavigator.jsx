import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsList from './ProductsList';
import Cart from './Cart';
import Details from './Details';
import Favorites from './Favorites';
import ProdcutsStack from './ProdcutsStack';
import {CartIcon, FavListIcon, ListIcon} from '../utils/icons';
import {colors} from '../utils/constants';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {totalQuantity} = useSelector(state => state.cart);
  return (
    <Tab.Navigator
      initialRouteName="tiendas"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarInactiveTintColor: colors.balck,
        tabBarActiveTintColor: colors.darkGreen,
        tabBarStyle: {
          paddingBottom: 7,
          paddingTop: 7,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 70,
        },
      })}>
      <Tab.Screen
        name="ProductsStack"
        component={ProdcutsStack}
        options={{
          title: 'Products',
          tabBarIcon: ({size, focused, color}) => {
            return <ListIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Cart',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <View style={styles.cartBox}>
                <CartIcon color={color} size={size} />
                {totalQuantity > 0 && (
                  <View style={styles.badgbox}>
                    <Text style={styles.badgeText}>{totalQuantity}</Text>
                  </View>
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorties',
          tabBarIcon: ({size, focused, color}) => {
            return <FavListIcon color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  cartBox: {
    position: 'relative',
  },
  badgbox: {
    position: 'absolute',
    top: -12,
    right: -14,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.darkGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
  },
});
