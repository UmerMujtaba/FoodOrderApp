import React from 'react';
import MenuCategoryScreen from '../../../components/menuComponent';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import { Text, View } from 'react-native';
import fonts from '../../../constants/fonts';

const DrinkScreen = () => {
  return (
    <View style={{ flex: 1 }}>

      <HeaderWithSearch />
      <FilterComponent />
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Drinks</Text>

      <MenuCategoryScreen category="Drinks" />
    </View>
  );
};

export default DrinkScreen;
