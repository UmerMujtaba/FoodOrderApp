

import React, { useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../../../redux/slices/menuSlice';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { images } from '../../../assets/images';


const SidesScreen= ()=> {
  const dispatch = useDispatch();


  const { menuItems, loading, error } = useSelector((state) => state.menu);
  console.log("🚀 ~ SidesScreen ~ menuItems:", menuItems)
 
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  const sides = menuItems['Sides'] || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('MenuDetail', { item })}
    >
       <Image source={ images[item.imagePath] } style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={sides}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2} // Grid layout with 2 columns
      columnWrapperStyle={styles.row}
    />
  );
}
export default SidesScreen




