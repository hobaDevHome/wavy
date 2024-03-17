/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../utils/constants';
import {tempData} from '../utils/data';
import ListItem from '../components/ListItem';
import {useSelector} from 'react-redux';

import favPic from '../images/fav.png';

const Favorites = () => {
  const {favList} = useSelector(state => state.products);

  console.log('from vav', favList.length);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.image}>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>Your favorites</Text>
          </View>
          <Image source={favPic} style={styles.favPic} />

          {favList.length === 0 ? (
            <Text>no items in this list</Text>
          ) : (
            <FlatList
              data={favList}
              renderItem={({item}) => <ListItem item={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              scrollEnabled={false}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

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
  favPic: {
    width: 320,
    height: 180,
    alignSelf: 'center',
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
  iconsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    padding: 10,
    marginTop: 40,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f3eed8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greet: {
    color: colors.balck,
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
  typeButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  typeButtonActive: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: colors.darkGreen,
    color: colors.white,
    margin: 10,
    borderRadius: 15,
  },
});
