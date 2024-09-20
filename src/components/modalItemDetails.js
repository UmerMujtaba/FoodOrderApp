import React from 'react';
import { Modal, View, Text, Image, Pressable, TouchableOpacity, StyleSheet } from 'react-native';

const ItemDetailModal = ({ modalVisible, selectedItem, closeModal, images }) => {
  if (!selectedItem) return null; // Prevent rendering if no item is selected

  return (
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
    height: '80%',
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
  closeButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ItemDetailModal;
