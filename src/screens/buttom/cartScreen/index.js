import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Modal, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../../redux/slices/cartSlice'; // Adjust the path as needed
import fonts from '../../../constants/fonts';
import { images } from '../../../assets/images';
import { SwipeListView } from 'react-native-swipe-list-view';
import LinearGradient from 'react-native-linear-gradient';
import { LinearGradientText } from 'react-native-linear-gradient-text';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const[showFullDescription,setShowFullDescription] = useState(false);
  const [containerHeight, setContainerHeight] = useState(120);


  const handleRemoveItem = (id) => {
    setSelectedItem(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedItem) {
      dispatch(removeFromCart(selectedItem));
      setModalVisible(false);
      setSelectedItem(null);
    }
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const subTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };


  const calculateTotal = () => {
    const deliveryCharge = 10; // Delivery charge
    const discount = 5; // Discount
    const total = parseFloat(subTotal()) + deliveryCharge - discount; // Parse subTotal as a float and add/subtract
    return `${total.toFixed(2)}$`; // Format the total with 2 decimal places and append the currency symbol
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
    setContainerHeight((prev) => (prev === 120 ? 140 : 120));
  }


  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { height: containerHeight }]}>
      <Image source={images[item.imagePath]} style={styles.itemImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity onPress={toggleDescription}>
        <Text
          numberOfLines={showFullDescription ? undefined : 1}
          ellipsizeMode='tail'
          style={styles.itemDescription}
        >
          {item.description}
        </Text>
      </TouchableOpacity>




        <LinearGradientText
          colors={['#15BE77', '#53E88B']}
          text={`$ ${item.price.toFixed(2)}`}
          start={{ x: 0.1, y: 0.1 }}  // Optional
          end={{ x: 0.5, y: 0.4 }}  // Optional
          textStyle={styles.itemPrice}  // Optional
          textProps={{ allowFontScaling: true }}  // Optional
        />
        {/* <LinearGradient colors={['#FF5733', '#FFC300']} style={styles.gradient}> */}

        {/* <Text style={styles.itemPrice}></Text> */}
        {/* </LinearGradient> */}


        <View style={styles.quantityContainer}>

          <TouchableOpacity
            onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <LinearGradient
              colors={['#53E88B', '#53E88B']}
              // start={{ x: 0.2, y: 0.10 }}  // Optional
              //  end={{ x: 0.5, y: 0 }}  // Optional
              style={styles.gradientButton2} // Style for the gradient background
            >
              <Text style={[styles.button2, item.quantity <= 1 && styles.disabledButton]}>
                -
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity + 1)}>
            <LinearGradient
              colors={['#15BE77', '#53E88B']} // Your gradient colors
              start={{ x: 0.2, y: 0.7 }}  // Optional
              end={{ x: 0.5, y: 0.4 }}  // Optional
              style={styles.gradientButton}
            >
              <Text style={styles.button}>+</Text>
            </LinearGradient>
          </TouchableOpacity>

 
        </View>



      </View>
    </View>
  );

  const renderHiddenItem = (data) => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveItem(data.item.id)}>
        <Image source={images.deleteIcon} style={styles.deleteImg} />

      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>


      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
        <Image source={images.backIcon} style={styles.backImage} />

      </TouchableOpacity>
      <Text style={[styles.title]}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Your cart is empty.</Text>
      ) : (
        <SwipeListView
          data={cartItems}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-100}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}




      {cartItems.length > 0 && (
        <>
          <LinearGradient
            colors={['#15BE77', '#53E88B']} // Your gradient colors
            start={{ x: 0.2, y: 0.5 }}  // Optional
            end={{ x: 0.5, y: 0.2 }}  // Optional
            style={styles.cardGradient}
          >
            <ImageBackground source={images.cardBackground} style={styles.bgImageStyle}>




              <View style={styles.cardContainerRow}>

                <View style={styles.cardContainerCol}>

                  <Text style={styles.headingText}>Sub Total:</Text>

                  {cartItems.length > 0 && (
                    <>
                      <Text style={styles.headingText}>
                        Delivery Charges:
                      </Text>
                      <Text style={styles.headingText}>
                        Discount
                      </Text>

                      <Text style={styles.priceText}>
                        Total
                      </Text>
                    </>
                  )}

                </View>

                <View style={styles.cardContainerCol}>
                  <Text style={[styles.headingText, { textAlign: 'center' }]}>{subTotal()}$</Text>


                  {cartItems.length > 0 && (
                    <>
                      <Text style={[styles.headingText, { textAlign: 'center' }]}>{10}$</Text>
                      <Text style={[styles.headingText, { textAlign: 'center' }]}>{5}$</Text>

                      <Text style={[styles.priceText, { textAlign: 'center' }]}>{calculateTotal()}</Text>
                    </>
                  )}
                </View>

              </View>


            </ImageBackground>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.ctaBtn}>
              <LinearGradientText
                colors={['#15BE77', '#53E88B']}
                text={'Place my Order'}
                start={{ x: 0.4, y: 0.4 }}  // Optional
                end={{ x: 0.1, y: 0.5 }}  // Optional
                textStyle={[styles.OrderText]}  // Optional
                textProps={{ allowFontScaling: true }}  // Optional
              />
            </TouchableOpacity>
          </LinearGradient>
        </>
      )}



      {/* Delete Confirmation Modal */}
      <Modal
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}
        animationType="fade"
      >
        <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>

            <Text style={styles.modalText}>Are you sure you want to remove this item?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity onPress={confirmDelete} style={styles.modalButton}>
                <LinearGradient
                  colors={['#15BE77', '#53E88B']} // Your gradient colors
                  start={{ x: 0.2, y: 0.7 }}  // Optional
                  end={{ x: 0.5, y: 0.4 }}  // Optional
                  style={styles.gradientButton}
                >
                  <Text style={styles.modalButtonText}>Yes</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>

                <LinearGradient
                  colors={['#15BE77', '#53E88B']} // Your gradient colors
                  start={{ x: 0.2, y: 0.7 }}  // Optional
                  end={{ x: 0.5, y: 0.4 }}  // Optional
                  style={styles.gradientButton}
                >
                  <Text style={styles.modalButtonText}>No</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CartScreen;
