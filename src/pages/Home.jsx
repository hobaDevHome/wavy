/* eslint-disable prettier/prettier */
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';
import button from '../images/Button.png';
import {colors} from '../utils/constants';

const Home = () => {
  return (
    <ImageBackground
      source={require('../images/Onboarding.jpg')}
      style={styles.image}>
      <View style={styles.titlecontinaer}>
        <Text style={styles.title}>
          Make <Text style={styles.span}>your</Text>
        </Text>
        <Text style={styles.title}>
          interior <Text style={styles.span}>minimal</Text>
        </Text>
        <Text style={styles.title}>
          {' '}
          <Text style={styles.span}>and modern.</Text>
        </Text>
        <Text style={styles.subTitle}>
          Furniture and inspiration for a better everyday life at home
        </Text>
        <Image source={button} />
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 150,
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titlecontinaer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: colors.balck,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 25,
  },
  subTitle: {
    color: colors.balck,
    fontSize: 12,
    textAlign: 'center',
    marginHorizontal: 40,
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  span: {
    color: colors.lightGreen,
  },
});
