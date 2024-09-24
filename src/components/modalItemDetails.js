import React from 'react';
import { Modal, View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice'; // Import the action
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors


const ItemDetailModal = ({ modalVisible, selectedItem, closeModal, images,statusBarTranslucent }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item); // Check item structure
    const itemToAdd = {
      ...item,

    };
    dispatch(addItemToCart(itemToAdd));
    closeModal();
  };

  const { colors } = useTheme(); // Use useTheme to access the current theme colors



  if (!selectedItem) return null;

  return (
    <Modal
    statusBarTranslucent={statusBarTranslucent}
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <Pressable style={styles.modalBackground} onPress={closeModal}>
        <View style={[styles.modalContainer,{backgroundColor:colors.tabBackgroundColor}]}>
         
          <Image source={images[selectedItem.imagePath]} style={styles.modalImage} />
          <Text style={[styles.modalName,{color:colors.text}]}>{selectedItem.name}</Text>
          <Text style={[styles.modalDescription,{color:colors.text}]}>{selectedItem.description}</Text>
          <Text style={[styles.modalPrice,{color:colors.text}]}>Price: ${selectedItem.price.toFixed(2)}</Text>


          <TouchableOpacity style={styles.addToCartButton} onPress={() => handleAddToCart(selectedItem)}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
   borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop: 20,
    height: '75%',
    alignItems: 'center',
  },
  modalImage: {
    width: '95%',
    height: 300,
    borderRadius: 10,
    //resizeMode:'contain'
  },
  modalName: {
    fontSize: 24,
   // fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
    fontFamily:fonts.SF_PRO_TEXT.Spectral.Bold
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    paddingLeft:5,
    paddingRight:5,
    color: 'black',
    fontFamily:fonts.SF_PRO_TEXT.Spectral.Medium
  },
  modalPrice: {
    fontSize: 18,
    //fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
    fontFamily:fonts.SF_PRO_TEXT.Spectral.SemiBold
  },
  addToCartButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
   // fontWeight: 'bold',
   fontFamily:fonts.SF_PRO_TEXT.Spectral.SemiBold
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    marginLeft: 10,
  },

});

export default ItemDetailModal;
