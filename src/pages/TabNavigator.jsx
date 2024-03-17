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

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          title: 'Products',
          tabBarIcon: ({size, focused, color}) => {
            return <CartIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Products',
          tabBarIcon: ({size, focused, color}) => {
            return <FavListIcon color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
