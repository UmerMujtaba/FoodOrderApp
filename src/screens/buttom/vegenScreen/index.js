import React from 'react';
import { Text, View } from 'react-native';
import MenuCategoryScreen from '../../../components/menuComponent';
import styles from './styles';
import fonts from '../../../constants/fonts';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';

const VeganScreen = () => {
  return (
    <View style={{ flex: 1 }}>

      <HeaderWithSearch />
      <FilterComponent/>
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Salads</Text>
      <MenuCategoryScreen category="Salads" />
    </View>
  )
};

export default VeganScreen;
