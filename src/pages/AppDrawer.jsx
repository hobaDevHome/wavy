import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProdcutsStack from './ProdcutsStack';
import Cart from './Cart';
import Details from './Details';
import TabNavigator from './ProdcutsStack';
import Favorites from './Favorites';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ProdcutsStack" component={TabNavigator} />
      <Drawer.Screen name="CartPage" component={Cart} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({});
