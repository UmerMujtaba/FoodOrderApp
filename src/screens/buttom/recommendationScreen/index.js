import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../../utils/supabase';
import { Strings } from '../../../constants/string';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecommendations } from '../../../redux/slices/recommendationSlice';
import { useRecommendations } from '../../../hooks/useRecommendations';
import { images } from '../../../assets/images';
import fonts from '../../../constants/fonts';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';

const RecommendationScreen =({navigation})=> {

  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { recommendations, isLoading } = useSelector((state) => state.recommendations);

  // Subscribe to real-time updates
  useRecommendations();

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  } if (recommendations.length === 0) {
    return (
      <View style={styles.loaderContainer}>
        <Text>No recommendations available.</Text>
      </View>
    );
  }

  // Debugging: Check what data is being rendered
  console.log("🚀 ~ RecommendationScreen ~ recommendations:", recommendations)



  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
        <Image source={images.backIcon} style={styles.backImage} />
      </TouchableOpacity>
      <Text style={styles.title(colors)}>{Strings.recommendations}</Text>


      {recommendations.map((item) => (
        <View key={item.item_name} style={styles.tile(colors)}>

          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.itemName(colors)}>{item.item_name}</Text>
            <Text style={styles.description(colors)}>{item.description}</Text>
            <Text style={styles.price(colors)}>${item.price}</Text>
          </View>
        </View>
      ))}
      </ScrollView>
    </View>
  )
}
  

export default RecommendationScreen