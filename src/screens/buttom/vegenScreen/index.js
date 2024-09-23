import React,{useState} from 'react';
import { Text, View } from 'react-native';
import MenuCategoryScreen from '../../../components/menuComponent';
import styles from './styles';
import fonts from '../../../constants/fonts';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';

const VeganScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  
  return (
    <View style={{ flex: 1 }}>

      <HeaderWithSearch />
      <FilterComponent onSearch={handleSearch} />
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Salads</Text>
      <MenuCategoryScreen category="Salads" searchQuery={searchQuery}/>
    </View>
  )
};

export default VeganScreen;
