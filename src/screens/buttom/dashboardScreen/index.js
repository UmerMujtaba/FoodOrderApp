import { View, Text, ImageBackground, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; // Import navigation
import { images } from '../../../assets/images'
import { Strings } from '../../../constants/string'
import fonts from '../../../constants/fonts'
import SearchField from '../../../components/searchFields'


const { width } = Dimensions.get('window'); // Get screen width
const itemWidth = (width - 30) / 2; // Calculate width for each item (2 columns with 15px margin)

const DashboardScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const items = [
    { id: 1, imageSource: images.veganImage, text: 'Vegetarian Food', screen: 'Vegan' },
    { id: 2, imageSource: images.fastFoodImage, text: 'Fast Food', screen: 'Fastfood' },
    { id: 3, imageSource: images.drinkImage, text: 'Drinks', screen: 'Drink' },
    { id: 4, imageSource: images.addOnsImage, text: 'Sides', screen: 'Sides' },
  ];

  return (
    <View style={{ flex: 1, }}>

      <ImageBackground source={images.BackgroundImage2} resizeMode='cover' style={{ width: 360, height: 220 }}>

        <View style={{ position: 'absolute', zIndex: 2, top: '40%', width: 360, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Text style={{ fontSize: 30, color: 'black', fontFamily: fonts.SF_PRO_TEXT.Spectral.ExtraBold, marginLeft: 20 }}>
            {Strings.findYourFvrtFood}
          </Text>
          <View style={{ height: 45, width: 45, borderRadius: 15, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginRight: 30 }}>
            <Image source={images.notificationIcon} resizeMode='contain' style={{ width: 30, height: 30 }} />
          </View>
        </View>

      </ImageBackground>

      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>

          <SearchField
            //leftIcon
            imageSource={images.searchIcon}
          >
          </SearchField>

          <TouchableOpacity style={{ backgroundColor: '#F9A84D', height: 49, width: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={images.filterIcon} resizeMode='contain' style={{ width: 25, height: 25, }} />
          </TouchableOpacity>
        </View>

        <Image source={images.advertiseImage} resizeMode='contain' style={{ width: 'auto', height: 150, marginTop: 10 }} />


        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 10,
        }}>
          {items.map(item => (
            <TouchableOpacity key={item.id} style={{
              width: itemWidth,
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
              padding: 10,
              alignItems: 'center',
              marginBottom: 15,
              height: 184,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 3,
              justifyContent: 'center'

            }}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Image
                source={item.imageSource}
                style={{
                  width: 90,
                  height: 90,
                  resizeMode: 'contain',

                }}
              />
              <Text style={{
                marginTop: 10,
                fontSize: 18,
                color: '#333',
                fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold
              }}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>

  )
}
export default DashboardScreen