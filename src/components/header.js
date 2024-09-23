import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { images } from '../assets/images';
import { Strings } from '../constants/string';
import SearchField from './searchFields';
import fonts from '../constants/fonts';

const { width } = Dimensions.get('window'); // Get screen width

const HeaderWithSearch = () => {
  return (
    
      <ImageBackground source={images.BackgroundImage2} resizeMode='cover' style={{ width: width, height: 200}}>
        <View style={{
          position: 'absolute', 
          zIndex: 2, 
          top: '35%', 
          width: width, 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 30, 
            color: 'black', 
            fontFamily: fonts.SF_PRO_TEXT.Spectral.ExtraBold, 
            marginLeft: 20
          }}>
            {Strings.findYourFvrtFood}
          </Text>
          <TouchableOpacity style={{
            height: 45, 
            width: 45, 
            borderRadius: 15, 
            backgroundColor: 'white', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginRight: 30
          }}>
            <Image source={images.notificationIcon} resizeMode='contain' style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
   
  );
}


export default HeaderWithSearch;
