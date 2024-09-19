import React, { useEffect,useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity,Modal,Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMenu } from '../../../redux/slices/menuSlice';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { images } from '../../../assets/images';

const FastFoodScreen = () => {
  const dispatch = useDispatch();
  const { menuItems, loading, error } = useSelector((state) => state.menu);
  const [selectedItem, setSelectedItem] = useState(null); // For managing the selected item
  const [modalVisible, setModalVisible] = useState(false); 


  console.log("🚀 ~ FastFoodScreen ~ menuItems:", menuItems)
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

  // Render each item in a grid


  const burgers = menuItems['Burgers'] || [];


  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
     onPress={() => handlePress(item)}
    >
      <Image source={ images[item.imagePath] } style={styles.image} />
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={burgers}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2} // Grid layout with 2 columns
      columnWrapperStyle={styles.row}
    />

    {selectedItem && (
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalBackground} onPress={closeModal}>
          <View style={styles.modalContainer}>
            <Image source={images[selectedItem.imagePath]} style={styles.modalImage} />
            <Text style={styles.modalName}>{selectedItem.name}</Text>
            <Text style={styles.modalDescription}>{selectedItem.description}</Text>
            <Text style={styles.modalPrice}>Price: ${selectedItem.price.toFixed(2)}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    )}
  </View>
);
};

export default FastFoodScreen







