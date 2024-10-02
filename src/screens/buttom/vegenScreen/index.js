import React,{useState,useCallback} from 'react';
import { Text, View } from 'react-native';
import MenuCategoryComponent from '../../../components/menuComponent';
import styles from './styles';
import fonts from '../../../constants/fonts';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import { useFocusEffect } from '@react-navigation/native';



const VeganScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ type: '', price: '' });
  const [tempPriceFilter, setTempPriceFilter] = useState('');   // Store the type to apply after button click


  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  

  useFocusEffect(
    useCallback(() => {
      setFilter('');
      setSearchQuery('');
      setTempPriceFilter('');
    }, [])
  );


  const handleFilter = (newFilter) => {
    setTempPriceFilter(newFilter.price); // Set temp filter, not applying it yet
  };

  const handleApplyPriceFilter = () => {
    setFilter((prev) => ({ ...prev, price: tempPriceFilter })); // Apply the filter on button click
  };


  return (
    <View style={{ flex: 1 }}>

      <HeaderWithSearch />
      <FilterComponent onSearch={handleSearch} showPriceFilter={true} onFilter={handleFilter} onApply={handleApplyPriceFilter} />
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Salads</Text>
      <MenuCategoryComponent category="Salads" searchQuery={searchQuery} filter={filter} />
    </View>
  )
};

export default VeganScreen;
