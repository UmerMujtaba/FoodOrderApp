import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../redux/slices/menuSlice';
import { images } from '../assets/images';
import ItemDetailModal from './modalItemDetails';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors
import { supabase } from '../utils/supabase';
import { incrementCount } from '../redux/slices/itemCountSlice';

const MenuCategoryComponent = ({ category, searchQuery }) => {
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme(); // Use useTheme to access current theme colors
  const generateId = () => Math.random().toString(36).substr(2, 9); // 


  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const storeItemCount = async (item) => {
    const { name, description, image, price, count } = item;

    if (!name || count === undefined) {
      console.error('Invalid input data:', { name, count });
      return;
    }

    try {
      const { data: existingItem, error: fetchError } = await supabase
        .from('item_counts')
        .select('id, count')
        .eq('item_name', name)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      let newCount = count;
      let itemId;

      if (existingItem) {
        itemId = existingItem.id;
        newCount += existingItem.count;
      } else {
        itemId = generateId(); // Generate a unique ID if the item doesn't exist
      }

      const { data, error } = await supabase
        .from('item_counts')
        .upsert({
          id: itemId,
          item_name: name,
          description,
          image,
          price,
          count: newCount,
        });

      if (error) {

        console.error('Error storing item count:\n', error.message);
      } else {

        console.log(`🚀 Attempting to upsert item: ${name}, count: ${newCount}`);
      }
    } catch (error) {
      console.error('Error processing item count:', error.message);
    }


  };

  const openModal = async (item) => {
    setSelectedItem(item);
    setModalVisible(true);

    dispatch(incrementCount({
      itemName: item.name,
      itemDetails: {
        name: item.name,
        description: item.description,
        image: images[item.imagePath], // Ensure you have the image path set up
        price: item.price,
      },
    }));

    const currentCount = (await storeItemCount({
      name: item.name,
      description: item.description,
      image: images[item.imagePath],
      price: item.price,
      count: 1, // Initial count
    }));
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

  const items = menuItems[category]?.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.itemContainer, { backgroundColor: colors.tabBackgroundColor }]}
      onPress={() => openModal(item)}
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


