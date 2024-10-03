import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { images } from '../assets/images';
import { Strings } from '../constants/string';
import SearchField from './searchFields';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors
import { hp, rfs, rhp, rwp, width, wp } from '../constants/dimensions';




const HeaderWithSearch = () => {
  const { colors } = useTheme(); // Use useTheme to access the current theme colors

  return (

    <ImageBackground source={images.BackgroundImage2} style={styles.imgStyle}>
      <View style={styles.mainView}>
        <Text style={styles.textStyle(colors)}>
          {Strings.findYourFvrtFood}
        </Text>
        <TouchableOpacity style={styles.touchableComponent(colors)}>
          <Image source={images.notificationIcon} style={styles.notifyImg} />
        </TouchableOpacity>
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: width,
    height: rhp(250),
    resizeMode: 'cover'
  },
  mainView: {
    position: 'absolute',
    zIndex: 2,
    top: hp(12),
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: (colors) => ({
    fontSize: rfs(34),
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.ExtraBold,
    marginLeft: rwp(20)
  }),
  touchableComponent: (colors) => ({
    height: rhp(50),
    width: rwp(50),
    borderRadius: 15,
    backgroundColor: colors.tabBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: rwp(25)
  }),
  notifyImg: { width: rwp(35), height: rhp(35), resizeMode: 'contain' }
})

export default HeaderWithSearch;
