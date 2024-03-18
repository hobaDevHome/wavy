import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../utils/constants';
import {HeartIconSolid} from '../utils/icons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {setFavorite} from '../redux/productsSlice';

const ListItem = ({item}) => {
  const [fav, setfav] = useState(false);

  const dispatch = useDispatch();

  const {favList} = useSelector(state => state.products);
  const navigation = useNavigation();

  useEffect(() => {
    const existingItem = favList.find(e => item.id === e.id);
    if (existingItem) {
      setfav(true);
    } else {
      setfav(false);
    }
  }, [dispatch]);

  if (!item) {
    return;
  }

  const handleFavPress = () => {
    setfav(!fav);
    dispatch(setFavorite(item));
  };

  return (
    <View style={styles.itemCont}>
      <Pressable style={styles.iconBox} onPress={handleFavPress}>
        {fav ? (
          <HeartIconSolid size={15} color={colors.red} />
        ) : (
          <HeartIconSolid size={15} color={colors.favGray} />
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Details', {item: item})}>
        <Image source={{uri: item.image[0]}} style={styles.image} />
      </Pressable>
      <View style={styles.textBox}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>${item.price}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemCont: {
    width: 160,
    height: 245,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    position: 'relative',
  },
  textBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.balck,
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.maroon,
  },
  image: {
    width: 160,
    height: 180,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    objectFit: 'cover',
  },

  iconBox: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
});
