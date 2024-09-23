import React from 'react';
import { Modal, View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/slices/cartSlice'; // Import the action


const ItemDetailModal = ({ modalVisible, selectedItem, closeModal, images }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log('Adding item to cart:', item); // Check item structure
    const itemToAdd = {
      ...item,

    };
    dispatch(addItemToCart(itemToAdd));
    closeModal();
  };




  if (!selectedItem) return null;

  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <Pressable style={styles.modalBackground} onPress={closeModal}>
        <View style={styles.modalContainer}>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>



            <TouchableOpacity style={[styles.closeButton]} onPress={closeModal}>
              <Image source={images.crossIcon} resizeMode='contain' style={{ width: 20, height: 20 }} />
            </TouchableOpacity>

          </View>
          <Image source={images[selectedItem.imagePath]} style={styles.modalImage} />
          <Text style={styles.modalName}>{selectedItem.name}</Text>
          <Text style={styles.modalDescription}>{selectedItem.description}</Text>
          <Text style={styles.modalPrice}>Price: ${selectedItem.price.toFixed(2)}</Text>


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
    borderRadius: 10,
    padding: 20,
    height: '90%',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  modalName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'black',
  },
  addToCartButton: {
    backgroundColor: '#53E88B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
