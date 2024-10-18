import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, useColorScheme, Alert, ImageBackground, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeFromCart, updateQuantity } from '../../../redux/slices/cartSlice';
import { images } from '../../../assets/images';
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { Strings } from '../../../constants/string';
import ConfirmationModal from '../../../components/confirmationModal';
import CartItem from '../../../components/cartItem';
import HiddenCartItem from '../../../components/hiddendCartItem';
import OrderSummary from '../../../components/orderSummary';


const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const cartItemsFromStore = useSelector((state) => state.cart.cartItems);
  const cartItems = cartItemsFromStore.map(item => ({
    ...item,
    totalPrice: item.price + (item.selectedAddon ? item.selectedAddon.price : 0),
  }))
  console.log("🚀 ~ cartItems ~ cartItems:", cartItems)



  const confirmDelete = (id) => {
    if (id) {
        dispatch(removeFromCart(id)); // Use the id to remove the specific item from the cart
        setModalVisible(false); // Optionally hide the modal if you have one
        setSelectedItem(null); // Clear the selected item
    }
};


  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to delete all items from the cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            setLoading(true); // Set loading to true

            setTimeout(() => {
              dispatch(clearCart()); // Dispatch clearCart action
              setLoading(false); // Reset loading state
            }, 1000); // 2 seconds delay
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id) => {
    setSelectedItem(id);
    Alert.alert(
        'Delete Item',
        'Are you sure you want to delete this item from the cart?',
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: async () => {
                    setLoading(true); // Set loading to true
                    try {
                        confirmDelete(id); // Pass the id to confirmDelete
                    } catch (error) {
                        console.error('Error deleting item:', error);
                    } finally {
                        setLoading(false); // Reset loading state after the operation
                    }
                },
            },
        ],
        { cancelable: true }
    );
};


  const subTotal = () => {
    return cartItems.reduce((total, item) => {
      const addOnPrice = item.selectedAddon ? item.selectedAddon.price : 0;
      return total + (item.price + addOnPrice) * item.quantity;
    }, 0).toFixed(2);
  };


  const calculateTotal = () => {
    const deliveryCharge = 10; // Delivery charge
    const discount = 5; // Discount
    const total = parseFloat(subTotal()) + deliveryCharge - discount;
    return `${total.toFixed(2)}$`;
  };


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' />
      {/* appbar */}
      <View style={styles.appBar}>

        <ImageBackground source={images.userScreenBgImage} style={styles.imgStyle}>
          <View style={styles.appBarContainer}>
            <TouchableOpacity style={styles.backIconContainer(colors)} onPress={() => navigation.goBack()}>
              <Image source={images.backIcon} style={styles.backImage} />
            </TouchableOpacity>

            {cartItems.length >= 1 && (
              <TouchableOpacity style={styles.backIconContainer(colors)} onPress={handleClearCart}>
                <Image source={images.deleteIconOrange} style={styles.deleteImg} />
              </TouchableOpacity>
            )}

          </View>
        </ImageBackground>


        {/* Show loading indicator or delete icon */}
        {cartItems.length > 0 && (
          loading ? (
            <View style={styles.backIconContainer(colors)}>
              <ActivityIndicator size="large" color="#15BE77" />
            </View>
          ) : (
            <TouchableOpacity style={styles.backIconContainer(colors)} onPress={handleClearCart}>
              <Image
                source={images.deleteIconOrange}
                style={styles.deleteImg}
              />
            </TouchableOpacity>
          )
        )}
      </View>
      {/* ending of app bar */}


      {/* body */}
      <Text style={styles.title(colors)}>{Strings.orderDetails}</Text>
      {cartItems.length === 0 ? (
        <View style={styles.displayMsg}>
          <Text style={styles.emptyMessage(colors)}>{Strings.cartEmptyMsg}</Text>
        </View>
      ) : (
        <SwipeListView
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              colors={colors}
              handleQuantityChange={handleQuantityChange}
            />
          )}
          renderHiddenItem={(data) => (
            <HiddenCartItem
              item={data.item}
              handleRemoveItem={handleRemoveItem}
              scheme={scheme}
              images={images}
            />
          )}
          rightOpenValue={-100}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}

      {cartItems.length > 0 && (
        <OrderSummary
          cartItems={cartItems}
          subTotal={subTotal}
          calculateTotal={calculateTotal}
          navigate={navigation.navigate}
        />
      )}

      <ConfirmationModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        confirmDelete={confirmDelete}
        confirmationMsg="Are you sure you want to delete this item?"
      />
    </View>
    // body ending
  );
};

export default CartScreen;
