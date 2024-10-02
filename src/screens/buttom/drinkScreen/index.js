import React,{useState,useCallback} from 'react';
import MenuCategoryComponent from '../../../components/menuComponent';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import { Text, View } from 'react-native';
import fonts from '../../../constants/fonts';
import { useFocusEffect } from '@react-navigation/native';

const DrinkScreen = () => {
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
      <Text style={{ fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold, fontSize: 36, textAlign: 'center', color: 'black' }}>Drinks</Text>

      <MenuCategoryComponent category="Drinks"  searchQuery={searchQuery} filter={filter}/>
    </View>
  );
};

export default DrinkScreen; 
