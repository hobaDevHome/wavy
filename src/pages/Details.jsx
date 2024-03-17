import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants';
import {tempImages} from '../utils/data';

import ItemGallery from '../components/ItemGallery';
import AddToCartBtn from '../components/AddToCartBtn';
import {SafeAreaView} from 'react-native-safe-area-context';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  console.log('detala', item.thumbs);
  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <View style={styles.container}>
          <View>
            <View>
              <ItemGallery itemImages={item.thumbs} />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.subtitle ? item.subtitle : ''}</Text>
              {item.details && (
                <>
                  <Text
                    style={{fontWeight: 'bold', marginTop: 10, fontSize: 16}}>
                    Details
                  </Text>
                  <Text style={{marginTop: 10}}>{item.details}</Text>
                </>
              )}
            </View>
          </View>

          <View>
            <AddToCartBtn />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,

    justifyContent: 'space-between',
    minHeight: '100%',
    borderWidth: 1,
    marginBottom: 70,
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
