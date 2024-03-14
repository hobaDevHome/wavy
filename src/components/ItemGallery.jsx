import {Image, StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../utils/constants';
import {ArrowLeft, HeartIconOutline, HeartIconSolid} from '../utils/icons';
import ImageSlider from './ImageSlider';

const ItemGallery = ({itemImages}) => {
  const [showSlider, setshowSlider] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [fav, setfav] = useState(false);

  const ThumbImage = ({thumbImg, overlay = false, index = 0}) => {
    return (
      <Pressable style={styles.thumbImage} onPress={() => setThumbIndex(index)}>
        <Image source={thumbImg} style={styles.thumimge} />
        {overlay && (
          <Pressable style={styles.overlay} onPress={() => setshowSlider(true)}>
            <Text style={{color: 'white'}}>+4</Text>
          </Pressable>
        )}
      </Pressable>
    );
  };
  return (
    <View style={styles.cont}>
      {showSlider ? (
        <View style={styles.sliderView}>
          <ImageSlider images={itemImages} />

          <Pressable
            style={[styles.iconBox, {position: 'absolute', left: 10, top: 10}]}
            onPress={() => setshowSlider(false)}>
            <ArrowLeft size={20} color={colors.balck} />
          </Pressable>
        </View>
      ) : (
        <View style={styles.thumbsView}>
          <Image source={itemImages[thumbIndex]} style={styles.image} />
          <View style={styles.iconsRow}>
            <Pressable style={styles.iconBox}>
              <ArrowLeft size={20} color={colors.balck} />
            </Pressable>
            <Pressable style={styles.iconBox} onPress={() => setfav(!fav)}>
              {fav ? (
                <HeartIconSolid size={20} color={colors.red} />
              ) : (
                <HeartIconSolid size={20} color={colors.favGray} />
              )}
            </Pressable>
          </View>
          {itemImages.length > 1 && (
            <View style={styles.thumgsLcol}>
              <ThumbImage thumbImg={itemImages[0]} index={0} />
              <ThumbImage thumbImg={itemImages[1]} index={1} />

              {itemImages.length === 3 && (
                <ThumbImage thumbImg={itemImages[2]} index={2} />
              )}
              {itemImages.length > 3 && (
                <ThumbImage thumbImg={itemImages[2]} overlay={true} />
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default ItemGallery;

const styles = StyleSheet.create({
  cont: {
    width: '100%',
    marginHorizontal: 20,
    marginTop: 10,
  },
  image: {
    width: 350,
    height: 400,
    objectFit: 'cover',
    borderRadius: 20,
  },
  thumbsView: {
    position: 'relative',
  },
  sliderView: {position: 'relative'},
  thumgsLcol: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 15,
    marginRight: 45,
  },
  iconsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 350,
    padding: 30,
    position: 'absolute',
    left: 0,
    top: 0,
    border: '1px solid red',
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImage: {
    width: 54,
    height: 54,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: 'white',
    marginBottom: 10,
    position: 'relative',
  },
  thumimge: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  overlay: {
    width: 48,
    height: 48,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
