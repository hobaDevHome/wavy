import React from 'react';

import Home from './src/pages/Home';
import Details from './src/pages/Details';
import ProductsList from './src/pages/ProductsList';
import Login from './src/pages/Login';
import DrawerPage from './src/pages/DrawerPage';
import Cart from './src/pages/Cart';
import TabNavigator from './src/pages/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import ProductsStack from './src/pages/ProdcutsStack';
import AppDrawer from './src/pages/AppDrawer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
