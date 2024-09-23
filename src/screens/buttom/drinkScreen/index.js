import React,{useState} from 'react';
import MenuCategoryScreen from '../../../components/menuComponent';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import { Text, View } from 'react-native';
import fonts from '../../../constants/fonts';

const DrinkScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <View style={{ flex: 1 }}>

      <HeaderWithSearch />
      <FilterComponent onSearch={handleSearch} />
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Drinks</Text>

      <MenuCategoryScreen category="Drinks"  searchQuery={searchQuery}/>
    </View>
  );
};

export default DrinkScreen; 
