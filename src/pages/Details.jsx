import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants';
import {tempImages} from '../utils/data';

import ItemGallery from '../components/ItemGallery';
import AddToCartBtn from '../components/AddToCartBtn';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  console.log('detala', item.thumbs);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View>
            <ItemGallery itemImages={item.thumbs} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>Accent Chair</Text>
            <Text style={{fontWeight: 'bold', marginTop: 10}}>Details</Text>
            <Text style={{marginTop: 10}}>
              Bring a sense of the outdoors inside with this reclaimed teak wood
              accent chair. Featuring a caned back and a sculptural silhouette
              that showcases its natural grain patterns, it's well-suited for
              sun rooms, reading nooks, and minimalist living spaces.
            </Text>
          </View>
        </View>
        <View>
          <View>
            <AddToCartBtn />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  textBox: {
    padding: 20,
  },
  title: {
    color: colors.balck,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
