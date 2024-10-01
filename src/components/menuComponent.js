import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../redux/slices/menuSlice';

import { images } from '../assets/images';
import ItemDetailModal from './modalItemDetails';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors
import { supabase } from '../utils/supabase';

const MenuCategoryComponent = ({ category, searchQuery }) => {
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddon, setSelectedAddon] = useState(null);
  const { colors } = useTheme(); // Use useTheme to access the current theme colors
  
  const [itemCounts, setItemCounts] = useState({});

 // Assume generateId is a function that returns a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9); // Example ID generation function


  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);


  const storeItemCount = async (itemName, count) => {
    
    console.log(`🚀 ~  Attempting to upsert item: ${itemName}, count: ${count}`);
  
    // Validate input data
    if (!itemName || count === undefined) {
      console.error('Invalid input data:', { itemName, count });
      return;
    }
  
    try {
      // Check if the item already exists in the table by item_name
      const { data: existingItem, error: fetchError } = await supabase
        .from('item_counts')
        .select('id, count') // Select id and count to check if the item exists
        .eq('item_name', itemName)
        .single(); 
  
      
      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }
  
      let newCount = count; // Start with the incoming count
      let itemId;
  
      // If the item exists, use the existing ID and calculate the new count
      if (existingItem) {
        itemId = existingItem.id;
        newCount += 1; // Increment the count only for the existing item
      } else {
        // If the item doesn't exist, generate a new ID
        itemId = generateId(); 
      }
  
      // Upsert the item with the new count and id (insert or update)
      const { data, error } = await supabase
        .from('item_counts') 
        .upsert({
          id: itemId, // Use the existing or newly generated ID
          item_name: itemName,
          count: count,
        })
        
        .select(); // Ensure we get the updated item back
  
      if (error) {
        console.log("🚀 ~ storeItemCount ~ error:", error.message)
        
      } else {
        console.log("🚀 ~ storeItemCount ~ count:", count)
      }
    } catch (error) {
      console.log("🚀 ~ storeItemCount ~ error:", error.message)
    }
    console.log(`🚀 ~  Attempting to upsert item: ${itemName}, count: ${count}`);
  };
  
  // Open modal function with functional setState
  const openModal = async (item) => {
    setSelectedItem(item);
    setSelectedAddon(null);
    setModalVisible(true);
  
    
    setItemCounts((prevCounts) => {
      const currentCount = prevCounts[item.name] || 0; // Get the current count
      const newCount = currentCount + 1; // Increment count for the selected item
    
      //console.log(`Item selected: ${item.name}, New Count: ${newCount}`); // Log the new count
     
     
      //console.log("🚀 ~ setItemCounts ~ newCount & Item selected:", newCount , `${item.name}`)
      // Store the count for the item in the database
      storeItemCount(item.name, newCount);
  
      
      return { ...prevCounts, [item.name]: newCount };
    });
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

  // Filter menu items based on the category and search query
  const items = menuItems[category]?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: colors.tabBackgroundColor }]}
      onPress={() => {
        openModal(item);         // Open the modal with the selected ite
      }}
    >
      <Image source={images[item.imagePath]} style={styles.image} />
      <Text style={[styles.itemName, { color: colors.text }]}>{item.name}</Text>
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
        showsVerticalScrollIndicator={false}
      />
      <ItemDetailModal
        statusBarTranslucent={true}
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        closeModal={closeModal}
        images={images} // Pass your images object here
      />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemContainer: {
    //backgroundColor: colors.tab,
    paddingTop: 0,
    paddingBottom: 10,
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
    resizeMode: 'stretch',

    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  itemName: {
    fontSize: 16,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
    //fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },


});
export default MenuCategoryComponent;


