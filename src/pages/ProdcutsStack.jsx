import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsList from './ProductsList';

import Details from './Details';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack2 = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack2.Navigator screenOptions={{headerShown: false}}>
      <Stack2.Screen name="ProductsHome" component={ProductsList} />
      <Stack2.Screen name="Details" component={Details} />
    </Stack2.Navigator>
  );
};

export default ProductsStack;

const styles = StyleSheet.create({});
