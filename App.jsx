import React from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/pages/Home';
import Details from './src/pages/Details';
import ProductsList from './src/pages/ProductsList';
import Login from './src/pages/Login';
import DrawerPage from './src/pages/DrawerPage';
import Cart from './src/pages/Cart';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <Home /> */}
      {/* <Details /> */}
      {/* <ProductsList /> */}
      {/* <Login /> */}
      {/* <DrawerPage /> */}
      <Cart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
