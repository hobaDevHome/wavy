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
import React, {useState} from 'react';
import {colors} from '../utils/constants';
import {tempData} from '../utils/data';
import ListItem from '../components/ListItem';
import {MenuIcon, Lense} from '../utils/icons';

const types = ['all', 'chairs', 'sofas', 'beds'];

const Favorites = () => {
  const [selectedType, setSelectedType] = useState('all');

  const TypeButton = ({type}) => {
    return (
      <Pressable onPress={() => setSelectedType(type)}>
        <Text
          style={
            type === selectedType ? styles.typeButtonActive : styles.typeButton
          }>
          {type}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../images/Home.png')}
        style={styles.image}>
        <ScrollView>
          <View style={styles.iconsRow}>
            <Pressable style={styles.iconBox}>
              <MenuIcon size={20} color={colors.balck} />
            </Pressable>
            <Text style={styles.greet}>Hello, John Honai</Text>
            <Pressable
              style={[styles.iconBox, {backgroundColor: colors.balck}]}>
              <Lense size={24} color={colors.white} />
            </Pressable>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>
              Find <Text style={styles.span}>perfect</Text>
            </Text>
            <Text style={styles.title}>furniture for you.</Text>
          </View>
          <View style={{marginTop: 30, marginBottom: 20}}>
            <FlatList
              data={types}
              renderItem={({item}) => <TypeButton type={item} />}
              keyExtractor={item => item}
              horizontal
            />
          </View>

          <FlatList
            data={tempData}
            renderItem={({item}) => <ListItem item={item} />}
            keyExtractor={item => item.id}
            numColumns={2}
            scrollEnabled={false}
          />
        </ScrollView>
      </ImageBackground>
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
