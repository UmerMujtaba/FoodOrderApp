import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';
import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import styles from './styles';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const { colors } = useTheme(); // Use useTheme to access the current theme colors

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
    <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.background }]}>
      <HeaderWithSearch />
      <ScrollView>
        <FilterComponent onSearch={handleSearch} />
        <TouchableOpacity>
          <Image source={images.advertiseImage} style={styles.advertiseBg} />
        </TouchableOpacity>
        <View style={styles.containerRow}>
          {filteredItems.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.itemImageStyle,
                { backgroundColor: colors.tabBackgroundColor } // Use theme color for item background
              ]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image source={item.imageSource} style={[styles.itemImage, { backgroundColor: colors.tabBackgroundColor }]} />
              <Text style={[styles.itemName, { color: colors.text }]}>
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DashboardScreen;
