import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsList from './ProductsList';
import Cart from './Cart';
import Details from './Details';
import Favorites from './Favorites';
import ProdcutsStack from './ProdcutsStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="ProductsStack" component={ProdcutsStack} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
