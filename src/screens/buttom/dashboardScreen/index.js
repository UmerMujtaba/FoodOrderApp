import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; // Import navigation
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import fonts from '../../../constants/fonts'
import SearchField from '../../../components/searchFields'

import HeaderWithSearch from '../../../components/header';
import FilterComponent from '../../../components/filter';
import styles from './styles';



const DashboardScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const items = [
    { id: 1, imageSource: images.veganImage, text: 'Vegetarian Food', screen: 'Vegan' },
    { id: 2, imageSource: images.fastFoodImage, text: 'Fast Food', screen: 'Fastfood' },
    { id: 3, imageSource: images.drinkImage, text: 'Drinks', screen: 'Drink' },
    { id: 4, imageSource: images.addOnsImage, text: 'Sides', screen: 'Sides' },
  ];

  return (
    <KeyboardAvoidingView style={styles.container}>
      

        <HeaderWithSearch />
        <ScrollView>
          <FilterComponent />

          <Image source={images.advertiseImage} style={styles.advertiseBg} />


          <View style={styles.containerRow}>
            {items.map(item => (
              <TouchableOpacity key={item.id} style={styles.itemImageStyle}
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
  )
}
export default DashboardScreen