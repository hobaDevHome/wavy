import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';
import {colors} from '../utils/constants';
import {
  HeartIconOutline,
  HeartIconSolid,
  ArrowLeft,
  ArrowRidhtDouble,
} from '../utils/icons';
import ItemGallery from '../components/ItemGallery';
import AddToCartBtn from '../components/AddToCartBtn';

const Details = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <ItemGallery />
        </View>
        <View>
          <Text>Ashton Caned Teak</Text>
          <Text>Accent Chair</Text>
          <Text>Details</Text>
          <Text>
            Bring a sense of the outdoors inside with this reclaimed teak wood
            accent chair. Featuring a caned back and a sculptural silhouette
            that showcases its natural grain patterns, it's well-suited for sun
            rooms, reading nooks, and minimalist living spaces.
          </Text>
        </View>
      </View>
      <View>
        <View>
          <AddToCartBtn />
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
});
