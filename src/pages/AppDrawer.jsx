import * as React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Cart from './Cart';

import TabNavigator from './TabNavigator';
import Favorites from './Favorites';
import ProductsList from './ProductsList';
import DrawerPage from './DrawerPage';
import Login from './Login';
import Home from './Home';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerPage {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ProdcutsList" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
