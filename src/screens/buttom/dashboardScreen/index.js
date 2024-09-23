import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import styles from './styles';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const items = [
    { id: 1, imageSource: images.veganImage, text: 'Vegetarian Food', screen: 'Vegan' },
    { id: 2, imageSource: images.fastFoodImage, text: 'Fast Food', screen: 'Fastfood' },
    { id: 3, imageSource: images.drinkImage, text: 'Drinks', screen: 'Drink' },
    { id: 4, imageSource: images.addOnsImage, text: 'Sides', screen: 'Sides' },
  ];

  
  const filteredItems = items.filter(item =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderWithSearch />
      <ScrollView>
        <FilterComponent onSearch={handleSearch} />

        <Image source={images.advertiseImage} style={styles.advertiseBg} />

        <View style={styles.containerRow}>
          {filteredItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.itemImageStyle}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image
                source={item.imageSource}
                style={styles.itemImage}
              />
              <Text style={styles.itemName}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DashboardScreen;
