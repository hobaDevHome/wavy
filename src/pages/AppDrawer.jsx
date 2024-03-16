import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Cart from './Cart';

import TabNavigator from './TabNavigator';
import Favorites from './Favorites';
import ProductsList from './ProductsList';
import DrawerPage from './DrawerPage';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerPage {...props} />}>
      <Drawer.Screen name="ProdcutsList" component={TabNavigator} />
      <Drawer.Screen name="CartPage" component={Cart} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
