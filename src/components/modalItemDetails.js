import React, { useState } from 'react';
import { Modal, View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice'; // Import the action
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native'; // Import useTheme to access theme colors
import { LinearGradientText } from 'react-native-linear-gradient-text';
import ModalAppBar from './modalAppBar';
import GradientButton from './gradientButton';



const ItemDetailModal = ({ modalVisible, selectedItem, closeModal, images, statusBarTranslucent }) => {
  const dispatch = useDispatch();
  const [modalHeight, setModalHeight] = useState('40%'); // Initial height of the modal

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item); // Check item structure
    const itemToAdd = { ...item };
    dispatch(addItemToCart(itemToAdd));
    closeModal();
  };

  const { colors } = useTheme(); // Use useTheme to access the current theme colors

  const handleModalPress = () => {
    setModalHeight((prevHeight) => (prevHeight === '40%' ? '50%' : '40%')); // Toggle between two heights
  };

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
        <Image
          source={images[selectedItem.imagePath]}
          style={styles.modalImage}
          resizeMode="cover"
        />
        <Pressable style={[styles.modalContainer, { backgroundColor: colors.modalColor, height: modalHeight }]} onPress={handleModalPress}>
          {/* Fixed Nudge View */}
          <View style={styles.nudge} />
          {/* Content below the nudge */}
          <View style={styles.contentContainer}>

          
          <ModalAppBar/>
           

            <Text style={[styles.modalName, { color: colors.text }]}>{selectedItem.name}</Text>
            <Text style={[styles.modalDescription, { color: colors.text }]}>{selectedItem.description}</Text>
            <Text style={[styles.modalPrice, { color: colors.text }]}>Price: ${selectedItem.price.toFixed(2)}</Text>



            <GradientButton onPress={() => handleAddToCart(selectedItem)} buttonText={'Add to Cart'}>
            
            </GradientButton>
          
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to start
  },
  nudge: {
    width: 60,
    height: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 10, // Space below the nudge
  },
  modalImage: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  contentContainer: {
    width: '100%',
    paddingBottom: 10, // Space below content
  },
   modalName: {
    fontSize: 24,
    marginVertical: 10,
    color: 'black',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    marginLeft: 10,
  },
  modalDescription: {
    fontSize: 16,
   // textAlign: 'center',
    //marginVertical: 10,
    marginLeft: 10,
    //paddingLeft: 5,
    paddingRight: 5,
    color: 'black',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
  },
  modalPrice: {
    fontSize: 18,
    marginVertical: 10,
    color: 'black',
    marginLeft: 10,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
  },
  addToCartButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
   margin:120
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
  },
});

export default ItemDetailModal;
