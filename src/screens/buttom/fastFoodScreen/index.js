import React from 'react';
import MenuCategoryScreen from '../../../components/menuComponent';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import { Text, View } from 'react-native';
import fonts from '../../../constants/fonts';

const FastfoodScreen = () => {

  return (
    <View style={{ flex: 1 }}>

      <HeaderWithSearch />
      <FilterComponent />
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Fast Food</Text>


      <MenuCategoryScreen category="Burgers" />
    </View>);
};

export default FastfoodScreen;
