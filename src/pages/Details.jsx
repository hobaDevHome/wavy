import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/constants';
import {tempImages} from '../utils/data';

import ItemGallery from '../components/ItemGallery';
import AddToCartBtn from '../components/AddToCartBtn';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useDispatch, useSelector} from 'react-redux';

import {addItem} from '../redux/cartSlice';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <SafeAreaView>
      <ScrollView>
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

          <TouchableOpacity onPress={handleAddToCart}>
            <AddToCartBtn price={item.price} />
          </TouchableOpacity>
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
