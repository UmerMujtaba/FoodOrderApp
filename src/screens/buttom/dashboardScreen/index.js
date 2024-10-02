import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import React, { useState,useCallback } from 'react';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { images } from '../../../assets/images';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import styles from './styles';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors
import { ScreenNames } from '../../../constants/string';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState(''); // Store the selected type
  const [appliedType, setAppliedType] = useState('');   // Store the type to apply after button click
  const { colors } = useTheme();


  useFocusEffect(
    useCallback(() => {
      // Reset filter states when navigating to the screen
      setSelectedType('');
      setAppliedType('');
      setSearchQuery('');
    }, [])
  );


  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (type) => {
    setSelectedType(type); // Set the selected type but don’t apply it yet
  };

  const applyFilter = () => {
    setAppliedType(selectedType); // Apply the selected type on button click
  };

  const items = [
    { id: 1, imageSource: images.veganImage, text: 'Vegetarian Food', type: 'Vegan', screen: ScreenNames.Vegan },
    { id: 2, imageSource: images.fastFoodImage, text: 'Fast Food', type: 'Fast Food', screen: ScreenNames.Fastfood },
    { id: 3, imageSource: images.drinkImage, text: 'Drinks', type: 'Drinks', screen: ScreenNames.Drink },
    { id: 4, imageSource: images.addOnsImage, text: 'Sides', type: 'Sides', screen: ScreenNames.Sides },
  ];

  // Filter items based on applied type and search query
  const filteredItems = items.filter(item =>
    (appliedType === '' || item.type === appliedType) &&
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar translucent backgroundColor="transparent" />
      <HeaderWithSearch />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FilterComponent onSearch={handleSearch} onFilter={handleFilter} onApply={applyFilter} showPriceFilter={false} />
        <TouchableOpacity>
          <Image source={images.advertiseImage} style={styles.advertiseBg} />
        </TouchableOpacity>
        <View style={styles.containerRow}>
          {filteredItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.itemImageStyle,
                { backgroundColor: colors.tabBackgroundColor }
              ]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image source={item.imageSource} style={[styles.itemImage, { backgroundColor: colors.tabBackgroundColor }]} />
              <Text style={[styles.itemName, { color: colors.text }]}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};



export default DashboardScreen;
