import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text, Image,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../redux/slices/menuSlice';

import { images } from '../assets/images';
import ItemDetailModal from './modalItemDetails';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors



const MenuCategoryComponent = ({ category,searchQuery }) => {
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme(); // Use useTheme to access the current theme colors

  


  
  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  //const items = menuItems[category] || [];

  const items = menuItems[category]?.filter((item) =>
    item.name.includes(searchQuery) // Filter based on item name and searchQuery
  ) || [];

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, {backgroundColor:colors.tabBackgroundColor}]}
      onPress={() => openModal(item)}
    >
      <Image source={images[item.imagePath]} style={styles.image} />
      <Text style={[styles.itemName,{color:colors.text}]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <ItemDetailModal
      statusBarTranslucent={true}
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        closeModal={closeModal}
        images={images}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
      },
      row: {
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      itemContainer: {
        //backgroundColor: colors.tab,
        paddingTop:0,
        paddingBottom:10,
       // marginVertical: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        borderRadius: 8,
        width: '45%', // Adjust width for grid layout
      },
      image: {
        width: 162,
        height: 170,
       // marginBottom: 10,
        resizeMode:'stretch',
        borderRadius: 8,
        
      },
      itemName: {
        fontSize: 16,
        fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
        //fontWeight: 'bold',
        color:'black',
        textAlign:'center',
        marginTop: 10,
      },


});
export default MenuCategoryComponent;


