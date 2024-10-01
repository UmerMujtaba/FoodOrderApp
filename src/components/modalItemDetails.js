import React, { useState } from 'react';
import { Modal, View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice'; // Import the action
import { addClickedItem } from '../redux/slices/clickedItemSlice';
import fonts from '../constants/fonts';
import { useTheme } from '@react-navigation/native';
import ModalAppBar from './modalAppBar';
import GradientButton from './gradientButton';
import { Strings } from '../constants/string';
import { RadioButton } from 'react-native-paper';


const ItemDetailModal = ({ modalVisible, selectedItem, closeModal, images, statusBarTranslucent }) => {
  const dispatch = useDispatch();
  const [modalHeight, setModalHeight] = useState('34%');
  const [selectedAddon, setSelectedAddon] = useState(null); // Track selected addon
  const { colors } = useTheme();




  const handleAddToCart = () => {
    const itemToAdd = {
    ...selectedItem,
      selectedAddon,
      totalPrice: selectedItem.price + (selectedAddon ? selectedAddon.price : 0),
    };
  
    dispatch(addItemToCart(itemToAdd));
   
  
    console.log("🚀 ~ Adding item to cart:", itemToAdd);
    closeModal();
  };
  
   

  const handleAddonSelect = (addon) => {
    setSelectedAddon(addon); // Set selected add-on by ID
    console.log("🚀 ~----------setSelectedAddon ----------~ setSelectedAddon:", addon);
  };

  const handleModalPress = () => {
    setModalHeight((prevHeight) => (prevHeight === '34%' ? '65%' : '34%')); // Toggle between two heights
  };

  if (!selectedItem) return null;

  const availableAddons = selectedItem.availableAddons || [];

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
        />
        <Pressable style={styles.modalContainer(colors, modalHeight)} onPress={handleModalPress}>
          <View style={styles.nudge(colors)} />
          <View style={styles.contentContainer}>
            <ModalAppBar />

            <Text style={styles.modalName(colors)}>{selectedItem.name}</Text>
            <Text style={styles.modalDescription(colors)}>{selectedItem.description}</Text>
            <Text style={styles.modalPrice(colors)}>Price: ${selectedItem.price.toFixed(2)}</Text>

            <View style={styles.addOnContainerCol}>
              <Text style={styles.modalAddons(colors)}>{Strings.availableAddOns}</Text>

              <View style={{ flexDirection: 'column' }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: availableAddons.length > 3 ? 'wrap' : 'nowrap',
                    justifyContent: availableAddons.length <= 3 ? 'space-between' : 'flex-start',
                    gap: 10,
                  }}
                >
                  {availableAddons.length > 0 ? (
                    availableAddons.map((addon, index) => (
                      <TouchableOpacity
                        key={index + addon.price}
                        style={[
                          styles.addOnContainer(colors),
                          {
                            width: availableAddons.length <= 3 ? 'auto' : '45%',
                            marginBottom: availableAddons.length > 3 ? 10 : 0,
                            justifyContent: availableAddons.length <= 3 ? 'space-evenly' : 'center',
                          },
                        ]}
                        onPress={() => handleAddonSelect(addon)}
                      >
                        <RadioButton
                          value={addon}
                          status={selectedAddon === addon ? 'checked' : 'unchecked'}
                          onPress={() => handleAddonSelect(addon)}
                          color={selectedAddon === addon ? colors.selected : colors.unselected}
                          uncheckedColor={colors.unselected}
                        />
                        <Text style={styles.addOnName(colors)}>{addon.name}</Text>
                      </TouchableOpacity>
                    ))
                  ) : (
                    <Text style={styles.modalDescription(colors)}>{Strings.noAddonsAvailable}</Text>
                  )}
                </View>
              </View>
            </View>

            <GradientButton onPress={handleAddToCart} buttonText={'Add to Cart'} />
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
  modalContainer: (colors, modalHeight) => ({
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.modalColor,
    height: modalHeight
  }),
  nudge: (colors) => ({
    width: 60,
    height: 4,
    backgroundColor: colors.nudge,
    alignSelf: 'center',
    borderRadius: 8,
    marginBottom: 10,
  }),
  modalImage: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: "cover"
  },
  contentContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  modalName: (colors) => ({
    fontSize: 24,
    marginVertical: 10,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    marginLeft: 10,
    color: colors.text,
  }),
  modalDescription: (colors) => ({
    fontSize: 16,
    marginLeft: 10,
    paddingRight: 5,
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
  }),
  modalAddons: (colors) => ({
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    color: colors.text
  }),
  addOnContainerCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  addOnContainer: (colors) => ({
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  }),
  addOnName: (colors) => ({
    textAlign: 'center',
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium
  }),
  modalPrice: (colors) => ({
    fontSize: 18,
    marginVertical: 10,
    color: colors.text,
    marginLeft: 10,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
  }),
});

export default ItemDetailModal;
