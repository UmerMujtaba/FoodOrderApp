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
  console.log("🚀 ~ ItemDetailModal ~ selectedItem:", selectedItem)
  const dispatch = useDispatch();
  const [modalHeight, setModalHeight] = useState('34%'); // Initial height of the modal
  const [selectedAddon, setSelectedAddon] = useState([]);
  const { colors } = useTheme(); 


 
  const handleAddToCart = (item) => {
    const itemToAdd = { 
      ...selectedItem,
      selectedAddon, // Include selected add-on
      totalPrice: selectedItem.price + (selectedAddon ? selectedAddon.price : 0) // Calculate total price
    };
    dispatch(addItemToCart(itemToAdd));
    closeModal();
    console.log('Adding item to cart:', item); // Check item structure
  };

 
  const handleAddonSelect = (addon) => {
    setSelectedAddon(addon); // Set selected add-on
    console.log("🚀 ~----------setSelectedAddons ----------~ setSelectedAddons:", addon)
  };


  const handleModalPress = () => {
    setModalHeight((prevHeight) => (prevHeight === '34%' ? '60%' : '34%')); // Toggle between two heights
  };

  if (!selectedItem) return null;

  // Display available add-ons if available
  const availableAddons = selectedItem.availableAddons || []; // Ensure we have a valid array
  console.log("🚀 Available Add-ons:", availableAddons); // Log to consol


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


            <ModalAppBar />


            <Text style={[styles.modalName, { color: colors.text }]}>{selectedItem.name}</Text>
            <Text style={[styles.modalDescription, { color: colors.text }]}>{selectedItem.description}</Text>
            <Text style={[styles.modalPrice, { color: colors.text }]}>Price: ${selectedItem.price.toFixed(2)}</Text>


            <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center' }}>
              <Text style={[styles.modalAddons, { color: colors.text }]}>Available Add-ons</Text>

              {/* Dynamically render the availableAddons */}
              {availableAddons.length > 0 ? (
                availableAddons.map((addon, index) => (
                  <TouchableOpacity
                    key={addon.id}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      margin: 5,
                      height: 35,
                      width: 140,
                      borderRadius: 16,
                      backgroundColor: colors.tabBackgroundColor,
                      alignItems: 'center',
                    }}
                    onPress={() => handleAddonSelect(addon)}
                  >
                    <Text style={{ textAlign: 'center', color: 'white', fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium }}>{addon.name}</Text>
                    {/* <Text style={{ color: 'white' ,fontFamily:fonts.SF_PRO_TEXT.Spectral.Medium }}>${addon.price.toFixed(2)}</Text> */}
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={[styles.modalDescription, { color: colors.text }]}>No add-ons available</Text>
              )}
            </View>


            <GradientButton onPress={() => handleAddToCart(selectedItem)} buttonText={'Add to Cart'} >

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
    //backgroundColor:'red',
    paddingBottom: 20,
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
    marginLeft: 10,
    paddingRight: 5,
    color: 'black',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
  },
  modalAddons: {
    fontSize: 16,
    //marginLeft: 10,
    marginBottom: 10,
    // paddingRight: 5,
    color: 'black',
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
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
    margin: 120
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
  },
});

export default ItemDetailModal;
